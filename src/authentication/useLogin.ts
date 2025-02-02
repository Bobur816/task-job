import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiAuth";
import { useNavigate } from "react-router";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      navigate("/companies");
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return { login, isLoading };
}
