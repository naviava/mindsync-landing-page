import { useEffect, useState } from "react";

import { useMutation } from "@tanstack/react-query";
import { useForm } from "@tanstack/react-form";

import { cn } from "@/lib/utils";
import { sendEmail } from "@/actions";

// Sanitize input to prevent XSS attacks
const sanitizeInput = (value: string): string => {
  return value
    .replace(/[<>]/g, "") // Remove angle brackets
    .trim();
};

// Validate phone: 10+ digits only
const validatePhone = (value: string): boolean => {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7;
};

// Validate email format
const validateEmail = (value: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export function ContactForm() {
  const [focusedField, setFocusedField] = useState<
    "NAME" | "PHONE" | "EMAIL" | "MESSAGE" | null
  >(null);

  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const mutation = useMutation({
    mutationFn: sendEmail,
  });

  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    onSubmit: ({ value }) => {
      const errors = { name: "", phone: "", email: "" };
      let isValid = true;

      // Validate name
      if (!value.name || value.name.length < 2) {
        errors.name = "Name must be at least 2 characters";
        isValid = false;
      }

      // Validate phone
      if (!validatePhone(value.phone)) {
        errors.phone = "Phone must be at least 7 digits";
        isValid = false;
      }

      // Validate email
      if (!validateEmail(value.email)) {
        errors.email = "Please enter a valid email";
        isValid = false;
      }

      setFieldErrors(errors);

      if (isValid) {
        // Sanitize all inputs before sending
        const sanitizedData = {
          name: sanitizeInput(value.name),
          phone: value.phone.replace(/\D/g, ""),
          email: sanitizeInput(value.email),
          message: sanitizeInput(value.message),
        };
        mutation.mutate({ data: sanitizedData });
      }
    },
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      form.reset();
    }
  }, [mutation.isSuccess, form]);

  return (
    <>
      {mutation.isSuccess ? (
        <p className="text-white text-center text-[40px] mt-16 font-semibold">
          Thank you for reaching out.
          <br />
          We&apos;ll get back to you shortly.
        </p>
      ) : (
        <form
          className="gap-y-6 mt-6 flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          {/* Name */}
          <div>
            <form.Field
              name="name"
              children={(field) => {
                return (
                  <div className="relative">
                    <label
                      htmlFor={field.name}
                      className={cn(
                        "text-[22px] xl:text-[24px] absolute left-6 top-2.5 text-[#545454] transition-all",
                        focusedField === "NAME" || field.state.value
                          ? "-translate-y-2 text-xs italic xl:text-sm"
                          : "translate-y-0",
                      )}
                    >
                      Name
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      maxLength={50}
                      onFocus={() => setFocusedField("NAME")}
                      onBlur={() => {
                        setFocusedField((prev) =>
                          prev === "NAME" ? null : prev,
                        );
                        field.handleBlur();
                      }}
                      onChange={(e) => field.handleChange(e.target.value)}
                      disabled={mutation.isPending}
                      className={cn(
                        "bg-white focus:outline-none rounded-full w-full text-[20px] xl:text-[22px] px-6 py-4",
                        fieldErrors.name && "outline-3 outline-red-500",
                      )}
                    />
                    {fieldErrors.name && (
                      <div className="ml-4 text-red-800 text-sm mt-1">
                        {fieldErrors.name}
                      </div>
                    )}
                  </div>
                );
              }}
            />
          </div>

          {/* Contact no. and Email */}
          <div className="flex flex-col md:flex-row md:items-center gap-x-0 gap-y-6 md:gap-x-4 md:gap-y-0 w-full">
            {/* Phone */}
            <div className="w-full">
              <form.Field
                name="phone"
                children={(field) => {
                  return (
                    <div className="relative">
                      <label
                        htmlFor={field.name}
                        className={cn(
                          "text-[22px] xl:text-[24px] absolute left-6 top-2.5 text-[#545454] transition-all",
                          focusedField === "PHONE" || field.state.value
                            ? "-translate-y-2 text-xs italic xl:text-sm"
                            : "translate-y-0",
                        )}
                      >
                        Contact No.
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type="tel"
                        value={field.state.value}
                        maxLength={20}
                        onFocus={() => setFocusedField("PHONE")}
                        onBlur={() => {
                          setFocusedField((prev) =>
                            prev === "PHONE" ? null : prev,
                          );
                          field.handleBlur();
                        }}
                        onChange={(e) => field.handleChange(e.target.value)}
                        disabled={mutation.isPending}
                        className={cn(
                          "bg-white focus:outline-none rounded-full w-full text-[20px] px-6 py-4 xl:text-[22px]",
                          fieldErrors.phone && "outline-3 outline-red-500",
                        )}
                      />
                      {fieldErrors.phone && (
                        <div className="ml-4 text-red-800 text-sm mt-1">
                          {fieldErrors.phone}
                        </div>
                      )}
                    </div>
                  );
                }}
              />
            </div>

            {/* Email */}
            <div className="w-full">
              <form.Field
                name="email"
                children={(field) => {
                  return (
                    <div className="relative">
                      <label
                        htmlFor={field.name}
                        className={cn(
                          "text-[22px] xl:text-[24px] absolute left-6 top-2.5 text-[#545454] transition-all",
                          focusedField === "EMAIL" || field.state.value
                            ? "-translate-y-2 text-xs italic xl:text-sm"
                            : "translate-y-0",
                        )}
                      >
                        E-mail
                      </label>
                      <input
                        id={field.name}
                        type="email"
                        name={field.name}
                        value={field.state.value}
                        maxLength={100}
                        onFocus={() => setFocusedField("EMAIL")}
                        onBlur={() => {
                          setFocusedField((prev) =>
                            prev === "EMAIL" ? null : prev,
                          );
                          field.handleBlur();
                        }}
                        onChange={(e) => field.handleChange(e.target.value)}
                        disabled={mutation.isPending}
                        className={cn(
                          "bg-white focus:outline-none rounded-full w-full text-[20px] xl:text-[22px] px-6 py-4",
                          fieldErrors.email && "outline-3 outline-red-500",
                        )}
                      />
                      {fieldErrors.email && (
                        <div className="ml-4 text-red-800 text-sm mt-1">
                          {fieldErrors.email}
                        </div>
                      )}
                    </div>
                  );
                }}
              />
            </div>
          </div>

          {/* Message */}
          <div className="w-full">
            <form.Field
              name="message"
              children={(field) => {
                return (
                  <div className="relative">
                    <label
                      htmlFor={field.name}
                      className={cn(
                        "text-[22px] xl:text-[24px] absolute left-6 top-2.5 text-[#545454] transition-all",
                        focusedField === "MESSAGE" || field.state.value
                          ? "-translate-y-2 text-xs italic xl:text-sm"
                          : "translate-y-0",
                      )}
                    >
                      {!field.state.value ? "Enter your message" : "Message"}
                    </label>
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      maxLength={500}
                      rows={10}
                      onFocus={() => setFocusedField("MESSAGE")}
                      onBlur={() => {
                        setFocusedField((prev) =>
                          prev === "MESSAGE" ? null : prev,
                        );
                        field.handleBlur();
                      }}
                      onChange={(e) => field.handleChange(e.target.value)}
                      disabled={mutation.isPending}
                      className="bg-white focus:outline-none rounded-3xl w-full text-[20px] px-6 py-4 xl:text-[22px]"
                    />
                  </div>
                );
              }}
            />
          </div>

          <button
            type="submit"
            className="text-[22px] inline-flex items-center justify-center cursor-pointer text-white font-semibold px-10 py-4 text-lg rounded-full border border-cta backdrop-blur-md bg-cta hover:bg-cta/80 hover:shadow-[0_10px_25px_rgba(0,118,234,0.45)] transition-all duration-300"
          >
            SUBMIT
          </button>
        </form>
      )}
    </>
  );
}
