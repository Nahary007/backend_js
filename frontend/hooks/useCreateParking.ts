import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createParking, queryKeyParking } from "../api/services/parkingService";

export function useCreateParking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createParking,
    onSuccess: () => {
      // quand le parking est créé, on rafraîchit la liste
      queryClient.invalidateQueries({ queryKey: [queryKeyParking] });
    },
  });
}