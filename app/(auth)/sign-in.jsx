import {  Image, ScrollView, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Link } from "expo-router";

import { images } from '../../constants';
import FormField from '../../components/FormField';
import Botao from '../../components/Botao'
import { signIn } from '../../lib/appwrite';
import { useGlobalContext } from "../../context/GlobalProvider";


const Signin = () => {
  const [form, setForm] = useState({
    email:'',
    password:''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  //Faz o Sign up
  const submit = async () =>{

    if(!form.email || !form.password){
      Alert.alert('Error', 'Please fill in all the fields')
    }

    setIsSubmitting(true);

    try {
      await signIn (form.email, form.password)

      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally{
      setIsSubmitting(false)
    }
  }

  return (
    <SafeAreaView className="bg-black  h-full">
      <ScrollView>
        <View className="w-full justify-left items-topleft h-full px-6 my-2">
          <Image source={images.logo} className="w-120 h-120" />
          <Text className="text-2xl  text-white">Your journey begins now, log in to Onevent today</Text>
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
            title="Sign In"
            alignItems= "center"
            justifyContent="center" 
            containerStyles="w-full mt-7"
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Signup
            </Link>
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
    backgroundColor: 'white',
    color: 'black', // Set text color to white for all FormField components
   marginTop: 10, // Add margin top between fields
  
  },
});
export default Signin;

