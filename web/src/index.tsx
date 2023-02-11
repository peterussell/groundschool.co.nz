import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

import GA4React from "ga-4-react";

ReactDOM.render(
    <BrowserRouter>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN ?? ""}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID ?? ""}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
        >
        <App />
      </Auth0Provider>
    </BrowserRouter>,
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
