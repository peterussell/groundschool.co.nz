import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

import GA4React from "ga-4-react";

ReactDOM.render(
  // TODO: these need to come from local .env file, or ENV vars during build
  // and switch between dev/staging/prod
  <Auth0Provider
    domain="dev-dd6ko7nw.us.auth0.com"
    clientId="12HCOp9x8Nks1gYxPoY3EnSk7CVGn89h"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')
);

// Initialize analytics. Wait 4 seconds to allow the app to load first
if (process.env.NODE_ENV && process.env.NODE_ENV === "production") {
  try {
    setTimeout(_ => {
      const ga4react = new GA4React("G-ME96X32XY5");
      ga4react.initialize();
    }, 4000);
  } catch (err) { /* Prevent crashes due to adblockers */ }
}
