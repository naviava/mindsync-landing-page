import { useRouterState } from "@tanstack/react-router";

function usePath() {
  const path = useRouterState({
    select: (state) => state.location,
  });

  return path;
}

export default usePath;
