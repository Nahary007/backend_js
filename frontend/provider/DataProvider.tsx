import { createContext, useState, type ReactNode } from "react";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';


export const DataContext = createContext<{} | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());


    return (
        <QueryClientProvider client={queryClient}>
            <DataContext.Provider value={{ }}>
                {children}
            </DataContext.Provider>
        </QueryClientProvider>
    );
}
