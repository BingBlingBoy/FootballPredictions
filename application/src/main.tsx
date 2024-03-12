import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ConvexProvider, ConvexReactClient } from "convex/react";
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { Auth0Provider } from '@auth0/auth0-react';

const queryClient = new QueryClient({defaultOptions: {
    queries: {
        refetchOnWindowFocus: false
    }

}});


const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
    domain="{yourDomain}"
    clientId="{yourClientId}"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
>
      <ConvexProvider client={convex}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ConvexProvider>
    </Auth0Provider>,
  </React.StrictMode>,
)
