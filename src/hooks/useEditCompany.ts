import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCompany as editCompanyApi } from "../services/apiCompanies";

export function useEditCompany() {
  const queryClient = useQueryClient();

  const { mutate: editCompany, isPending: isLoading } = useMutation({
    mutationFn: editCompanyApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["companies"],
      });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return { editCompany, isLoading };
}
