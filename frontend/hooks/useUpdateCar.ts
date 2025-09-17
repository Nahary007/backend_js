// hooks/useUpdateParking.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeyCar, updateCar } from "../api/services/carService";

export function useUpdateCar() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, dto }: { id: number; dto: { plateNumber?: string; ownerName?: string; duration?: number; startTime?: string; } }) =>
            updateCar(id, dto),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKeyCar] });
        },
    });
}
