import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, Alert } from 'react-native';

import TouchID from 'react-native-touch-id';

import styles from './styles';

const Home = () => {
  const [supported, setSupported] = useState(null);
  const [name, setName] = useState('User');

  useEffect(() => {
    TouchID.isSupported()
      .then(success => {
        setSupported(true);
      })
      .catch((err) => {
        console.log('Error in Touch:' + err);
        alert('Touch ID not Supported/Enabled!');
      })
  }, []);

  const _handleLogin = () => {
    const settings = {
      title: 'Touch ID Authentication',
      color: '#ff0000',
      sensorErrorDescription: 'Touch ID Invalid!',
    };

    TouchID.authenticate('Make your Login', settings)
      .then(success => {
        Alert.alert('Authenticated Successfully!');
        setName('Jeziel');
      })
      .catch(error => {
        Alert.alert('Authentication Failed! Try Again.');
      });
  }

  return (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome {name}!</Text>

    <TouchableHighlight style={styles.btn} onPress={_handleLogin}>
      <Text style={styles.btnText}>Login</Text>
    </TouchableHighlight>
  </View>
  );
}

export default Home;