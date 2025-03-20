import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function WebView() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Access Travel SDK on React Native</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Go to Webview</ThemedText>
        <ThemedText>
          Navigate to the Webview tab to initialize the Access Travel SDK. The
          SDK is embedded in a WebView component for seamless integration.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Generate Session Token</ThemedText>
        <ThemedText>
          You need to generate your own session token to use the SDK. Replace
          the hard-coded token in the webview.tsx file with your own token.
        </ThemedText>
        <ThemedText style={styles.codeBlock}>
          {`// Generate a token using cURL:
curl -X POST https://api.accessdevelopment.com/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{"client_id": "YOUR_CLIENT_ID", "client_secret": "YOUR_CLIENT_SECRET"}'`}
        </ThemedText>
        <ThemedText>
          Alternatively, you can use Postman to make the same request and obtain
          your token.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Update the Token</ThemedText>
        <ThemedText>
          Open{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/webview.tsx</ThemedText>{" "}
          and replace the sessionToken value with your newly generated token:
        </ThemedText>
        <ThemedText style={styles.codeBlock}>
          {`const sessionToken = "YOUR_NEW_SESSION_TOKEN";`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 4: Run the SDK</ThemedText>
        <ThemedText>
          After updating the token, the SDK should initialize properly when you
          navigate to the Webview tab. You'll see the Access Travel interface
          with hotel booking capabilities and other travel services.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  codeBlock: {
    fontFamily: "SpaceMono",
    fontSize: 12,
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
  },
});
