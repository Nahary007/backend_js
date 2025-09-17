import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCar, queryKeyCar } from "../api/services/carService";

export function useDeleteCar() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCar,
    onSuccess: () => {
      // quand la car est supprimee, on rafraîchit la liste
      queryClient.invalidateQueries({ queryKey: [queryKeyCar] });
    },
  });

}