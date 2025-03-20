import React from "react";
import { Platform } from "react-native";
import { WebView } from "react-native-webview";

const SCRIPT_URL =
  process.env.NODE_ENV === "production"
    ? "https://booking.accessdevelopment.com/scripts/travel.client.v2.js"
    : "https://booking-stage.accessdevelopment.com/scripts/travel.client.v2.js";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://booking.accessdevelopment.com"
    : "https://booking-stage.accessdevelopment.com";

export default function TravelClient() {
  const sessionToken = "ACCESS_SESSION_MFUIVHN2inlXbZU1P62gscbKQe72aZL2";

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          html, body, #travelContainer {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 92vh;
            overflow: auto;
          }
        </style>
      </head>
      <body>
        <div id="travelContainer"></div>
        <script src="${SCRIPT_URL}"></script>
        <script>
          window.travelClient.start({
            session_token: '${sessionToken}',
            container: '#travelContainer',
            width: '100%',
            height: 'fit',
            navigate_to: {
              view: 'home',
              start_tab: 'hotels'
            }
          });

          window.travelClient.on("error", function(event) {
            console.log('error: ' + event.error_message);
          });

          window.travelClient.on("update", function(event) {
            console.log('update: ' + event.message);
          });
        </script>
      </body>
    </html>
  `;

  return (
    <WebView
      style={{ flex: 1, padding: 50 }}
      source={{
        html,
        baseUrl: BASE_URL,
      }}
      allowsBackForwardNavigationGestures={true}
      userAgent={
        Platform.OS === "ios"
          ? "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"
          : undefined
      }
      onError={(error) => {
        console.error(error);
      }}
    />
  );
}
