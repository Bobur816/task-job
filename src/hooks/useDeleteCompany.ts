import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCompany as deleteCompanyApi } from "../services/apiCompanies";

export function useDeleteCompany() {
  const queryClient = useQueryClient();

  const { mutate: deleteCompany, isPending: isLoading } = useMutation({
    mutationFn: deleteCompanyApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["companies"],
      });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return { deleteCompany, isLoading };
}
