import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ headerShown: true, title: "Feed" }}
          />
        </Stack>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
