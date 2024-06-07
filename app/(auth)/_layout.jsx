import { Text, View } from 'react-native'
import { Stack,StackScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar'
const Authlay = () => {
  return (
<>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
     

      
    </>
  );
}

export default Authlay
