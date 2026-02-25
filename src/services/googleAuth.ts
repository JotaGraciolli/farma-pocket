import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";

WebBrowser.maybeCompleteAuthSession();

export function useGoogleAuth() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "902335525452-1h7mfepnreh2bp15g4bplb8or2rfhnc6.apps.googleusercontent.com",
  });

useEffect(() => {
  if (response?.type === "success") {
    const idToken = response.authentication?.idToken;

    if (!idToken) return;

    const credential = GoogleAuthProvider.credential(idToken);
    signInWithCredential(auth, credential);
  }
}, [response]);


  return { request, promptAsync };
}
