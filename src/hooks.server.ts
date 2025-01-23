import type { HandleServerError } from "@sveltejs/kit";

export const handleError: HandleServerError = async (props) => {
  if (props.status === 404) return;
  return props;
};
