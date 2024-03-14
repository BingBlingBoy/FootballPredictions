import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ConvexReactClient } from "convex/react";
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { Auth0Provider } from '@auth0/auth0-react';
import { ConvexProviderWithAuth0 } from 'convex/react-auth0';

const queryClient = new QueryClient(
  {defaultOptions: {
    queries: {
        refetchOnWindowFocus: false
    }

}});

const DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN as string
const CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID as string

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <ConvexProviderWithAuth0 client={convex}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ConvexProviderWithAuth0>
    </Auth0Provider>,
  </React.StrictMode>,
)
