import { TouchableOpacity, StyleSheet, Text } from 'react-native'

import React from 'react'
const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    backgroundColor: 'red',
    padding: 5,
    paddingLeft: 150,
    paddingRight: 120,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

const Botao = ({ title, handlePress, containerStyles, isLoading }) => {
  return (
    <TouchableOpacity style={styles.button}
      onPress={handlePress}
      activeOpacity={1}
    >
      <Text className="text-primary font-bold text-5lg">
        {title}
      </Text>

    </TouchableOpacity>
  );
};

export default Botao;