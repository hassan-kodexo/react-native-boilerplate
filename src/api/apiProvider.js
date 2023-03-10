import * as React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

export const queryClient = new QueryClient();

export default function APIProvider({children}) {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
