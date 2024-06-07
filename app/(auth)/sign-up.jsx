import {  Image,  Text, StyleSheet, View, Button, ScrollView , Dimensions, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { Link, router } from "expo-router";

import { images } from '../../constants';
import FormField from '../../components/FormField';
import Botao from '../../components/Botao';
import { createUser} from '../../lib/appwrite'
import { useGlobalContext } from "../../context/GlobalProvider";


  const Signup = () => {
    const { setUser, setIsLogged } = useGlobalContext();
  
    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
      username: "",
      email: "",
      password: "",
    });
  
    const submit = async () => {
      if (form.username === "" || form.email === "" || form.password === "") {
        Alert.alert("Error", "Please fill in all fields");
      }
  
      setSubmitting(true);
      try {
        const result = await createUser(form.email, form.password, form.username);
        setUser(result);
        setIsLogged(true);
  
        router.replace("/home");
      } catch (error) {
        Alert.alert("Error", error.message);
      } finally {
        setSubmitting(false);
      }
    };

  


  return (
    <SafeAreaView className="bg-black  h-full">
      <ScrollView>
        <View className="w-full justify-left items-topleft h-full px-6 my-2">
        <Image
      source={images.logo}
      className="w-120 h-120"
      />
      <Text className="text-2xl  text-white">Sign up  to Onevent today, it's free, so signup rigth now

      </Text>
      <FormField
            style={styles.formField} // Apply consistent styles to all FormField components
            label="Username"
            title="Username"
            placeholder="Write your user here"
            value={form.username}
            onChangeText={(text) => setForm({ ...form, username: text })}
           
            />
            <FormField
            style={styles.formField} // Apply consistent styles to all FormField components

            label="Email"
            title="Email"
            placeholder="Write your email here : (ex: nome@exemplo.com)"
            value={form.mail}
            onChangeText={(text) => setForm({ ...form, mail: text })}
             keyboardType="email-address"
            
          />
          
        
          <FormField
            style={styles.formField}
            label="Password"
            title="Password" // Corrected title
            placeholder="Write your password here"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-6"
          />
          <Botao
          title="Sign in"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
           />

<           View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
            Hey! Have an account already? 
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary">Sign in</Link>
             </View>
             </View>
 
            </ScrollView>
           </SafeAreaView>
 );
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white', // Set background color for the entire component
    flex: 1, // Make the container take up the entire viewport height
  },
  content: {
    color: 'white',
    padding: 20, // Add padding for better spacing
    alignItems: 'center', // Center the content horizontally
  },
  logo: {
    width: 120,
    height: 120,
  },
  heading: {
    fontSize: 24,
    color: 'white', // Set text color to white
    marginTop: 20, // Add margin top for spacing
  },
  formField: {
    backgroundColor: 'ghostwhite',
    color: 'black', // Set text color to white for all FormField components
   marginTop: 10, // Add margin top between fields
  
  },

});

export default Signup

