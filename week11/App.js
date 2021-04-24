import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        Illias Askew
      </Card>
      <Text>
    Chicken
      </Text>
      <Text>
    Beef
      </Text>
      <Button title="Submit!"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
