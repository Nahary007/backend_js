import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteParking, queryKeyParking } from "../api/services/parkingService";

export function useDeleteParking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteParking,
    onSuccess: () => {
      // Invalider et refetch la liste des parkings
      queryClient.invalidateQueries({ queryKey: [queryKeyParking] });
    },
  });
}
