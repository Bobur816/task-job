import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../services/apiAuth";

export function useSignUp() {
  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: signUpApi,

    onSuccess: () => {},
    onError: (err) => {
      console.log(err.message);
    },
  });

  return { signUp, isLoading };
}
