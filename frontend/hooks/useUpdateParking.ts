// hooks/useUpdateParking.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeyParking, updateParking } from "../api/services/parkingService";

export function useUpdateParking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, dto }: { id: number; dto: { name?: string; location?: string; capacity?: number } }) =>
      updateParking(id, dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeyParking] });
    },
  });
}
