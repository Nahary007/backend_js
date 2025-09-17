import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCar, queryKeyCar } from "../api/services/carService";

export function useCreateCar() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCar,
    onSuccess: () => {
      // quand le car est créé, on rafraîchit la liste
      queryClient.invalidateQueries({ queryKey: [queryKeyCar] });
    },
  });

}