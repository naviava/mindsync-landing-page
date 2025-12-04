import { useState } from "react";

import { useForm } from "@tanstack/react-form";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [focusedField, setFocusedField] = useState<
    "NAME" | "PHONE" | "EMAIL" | "MESSAGE" | null
  >(null);

  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <form
      className="space-y-6 mt-6"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      {/* Name */}
      <div>
        <form.Field
          name="name"
          validators={{
            onChange: ({ value }) =>
              value.length < 3
                ? "Name must be at least 3 characters"
                : undefined,
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: async ({ value }) => {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              return value.includes("error") && 'No "error" allowed in name';
            },
          }}
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
                  onFocus={() => setFocusedField("NAME")}
                  onBlur={() => {
                    setFocusedField((prev) => (prev === "NAME" ? null : prev));
                    return field.handleBlur;
                  }}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="bg-white focus:outline-none rounded-full w-full text-[20px] xl:text-[22px] px-6 py-4"
                />
                <div
                  className={cn(
                    "ml-4 text-red-700 text-sm mt-1",
                    field.state.meta.isValidating && "text-white",
                  )}
                ></div>
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
            validators={{
              onChange: ({ value }) =>
                value.length < 7 ? "Enter a valid phone number" : undefined,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return (
                  value.includes("error") &&
                  'No "error" allowed in contact number'
                );
              },
            }}
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
                    value={field.state.value}
                    onFocus={() => setFocusedField("PHONE")}
                    onBlur={() => {
                      setFocusedField((prev) =>
                        prev === "PHONE" ? null : prev,
                      );
                      return field.handleBlur;
                    }}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="bg-white focus:outline-none rounded-full w-full text-[20px] px-6 py-4 xl:text-[22px]"
                  />
                  <div
                    className={cn(
                      "ml-4 text-red-700 text-sm mt-1",
                      field.state.meta.isValidating && "text-white",
                    )}
                  ></div>
                </div>
              );
            }}
          />
        </div>

        {/* Email */}
        <div className="w-full">
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) =>
                value.length < 3
                  ? "Name must be at least 3 characters"
                  : undefined,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return value.includes("error") && 'No "error" allowed in email';
              },
            }}
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
                    onFocus={() => setFocusedField("EMAIL")}
                    onBlur={() => {
                      setFocusedField((prev) =>
                        prev === "EMAIL" ? null : prev,
                      );
                      return field.handleBlur;
                    }}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="bg-white focus:outline-none rounded-full w-full text-[20px] xl:text-[22px] px-6 py-4"
                  />
                  <div
                    className={cn(
                      "ml-4 text-red-700 text-sm mt-1",
                      field.state.meta.isValidating && "text-white",
                    )}
                  ></div>
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
          validators={{
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: async ({ value }) => {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              return value.includes("error") && 'No "error" allowed in name';
            },
          }}
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
                  rows={10}
                  onFocus={() => setFocusedField("MESSAGE")}
                  onBlur={() => {
                    setFocusedField((prev) =>
                      prev === "MESSAGE" ? null : prev,
                    );
                    return field.handleBlur;
                  }}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="bg-white focus:outline-none rounded-3xl w-full text-[20px] px-6 py-4 xl:text-[22px]"
                />
                <div
                  className={cn(
                    "ml-4 text-red-700 text-sm mt-1",
                    field.state.meta.isValidating && "text-white",
                  )}
                ></div>
              </div>
            );
          }}
        />
      </div>
    </form>
  );
}
