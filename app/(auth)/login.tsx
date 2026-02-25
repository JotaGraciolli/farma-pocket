import { Button, Text, View } from "react-native";
import { useGoogleAuth } from "../../src/services/googleAuth";

export default function Login() {
  const { request, promptAsync } = useGoogleAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Farma Pocket</Text>
          <Button
              title="Entrar com Google"
              disabled={!request}
              onPress={() => {
                  console.log("Botão clicado");
                  promptAsync();
              }}
          />
    </View>
  );
}
