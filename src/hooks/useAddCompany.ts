import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCompany as addCompanyApi } from "../services/apiCompanies";

export function useAddCompany() {
  const queryClient = useQueryClient();

  const { mutate: addCompany, isPending: isLoading } = useMutation({
    mutationFn: addCompanyApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["companies"],
      });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return { addCompany, isLoading };
}
