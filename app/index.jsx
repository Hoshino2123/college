import { StatusBar } from 'expo-status-bar';
import { Image,  ScrollView, Text, View } from 'react-native';
import { Redirect, router} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import {images} from '../constants';
import Botao from '../components/Botao';

export default function App() {
  return (
    <SafeAreaView className ="bg-primary w-full h-full">
     <ScrollView contentContainerStyle={{ height: '100%'}}>
     <View className="w-full justify-left items-topleft h-full 5px">
      <Image
      source={images.logo}
      className="w-120 h-120"
      />
<View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
  <Text style={{ flex: 0.1, fontWeight: 'bold', color: 'white' }}>Discover something new with Onevent</Text>

  <Botao 
  title="Login"
  handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
  />
</View>
     </View>
     </ScrollView>
            
     <StatusBar backgroundColor='black' style='light'/>
    </SafeAreaView>
  );
}

