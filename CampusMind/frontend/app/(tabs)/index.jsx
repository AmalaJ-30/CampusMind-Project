// index.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Link } from 'expo-router'
import Icon from 'react-native-vector-icons/Feather';

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password.');
    } else {
      // Handle the login logic here, e.g., API call or navigation
      // Alert.alert('Success', 'Login successful');
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Redirecting to password reset page...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="message-square" size={70} color='#fff'/>
      </View>
      <Text style={styles.header}>CampusMind</Text>
      <Text style={styles.sub_header}>Welcome Back.</Text>

      <View style={styles.inputContainer}>
        <Icon name="mail" size={20} color="#888" style={styles.icon}/>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#888" style={styles.icon}/>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <Icon name={passwordVisible ? 'eye-off' : 'eye'} size={20} color='#888' />
        </TouchableOpacity>
      </View>

      <View style={styles.forgot_password_container}>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgot_password}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <Link href="/explore" style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Link>

      <TouchableOpacity style={styles.button_signUp}>
        <Text style={styles.buttonText} numberOfLines={1}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1B263B',
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FFF',
  },
  sub_header: {
    fontSize: 14,
    marginBottom: 40,
    color: '#FFF',
  },
  icon: {
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    // borderBottomColor: '#778DA9',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
  },
  eyeIcon: {
    padding: 2,
  },
  input: {
    flex: 1,
    fontSize: 13,
    color: '#333',
  },
  forgot_password: {
    color: '#FFF',
    fontSize: 12,
  },
  forgot_password_container: {
    width: '100%',
    alignItems: 'flex-end',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#778DA9',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 15,
  },
  button_signUp: {
    marginTop: 10,
    backgroundColor: '#778FFF',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
});

export default LoginPage;
