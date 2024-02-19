import axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet, Alert, Image } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { isLoggedIn } from '../../services/store/reducers/AuthSlice';
import { images } from '../../constants/images';
import { colors } from '../../constants/colors';
interface LoginValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('Admin');
  const [password, setPassword] = useState('Admin@123');
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleLogin = async () => {
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    setIsEmailValid(isValidEmail);
    setIsPasswordValid(isValidPassword);

    if (isValidEmail && isValidPassword) {
      const api = `https://efskorntxa.execute-api.ap-south-1.amazonaws.com/Dev/api/admin?user_name=${email}&pass_word=${password}`;
      try {
        const response = await axios.post(api, {
          user_name: email,
          pass_word: password,
        });
        const { statusCode } = response?.data;
        if(statusCode === 200){
          dispatch(isLoggedIn())
        }else {
          Alert.alert(JSON.stringify(response));
        }
        
      } catch (error) {
        Alert.alert('Something went wrong, please try again later.');
        // throw error;
      }
    }
  };

  const validateEmail = (value: string) => {
    // Implement email validation logic here
    return value.trim() !== '';
  };

  const validatePassword = (value: string) => {
    // Implement password validation logic here
    return value.trim() !== '';
  };

  return (
    <View style={styles.container}>
      <Image
      source={images.ic_logo_text} 
      style={{width:300,height:150,alignSelf:'center',marginVertical:50}}
      />
      <TextInput
        label="Email"
        value={email}
        mode='outlined'
        style={styles.textInput}
        onChangeText={(text) => setEmail(text)}
        outlineStyle={{borderWidth:0.5, }}
        underlineColorAndroid='transparent'
        error={!isEmailValid}
      />
      <HelperText type="error" visible={!isEmailValid}>
        Email is required
      </HelperText>

      <TextInput
        label="Password"
        value={password}
        style={styles.textInput}
        mode='outlined'
        onChangeText={(text) => setPassword(text)}
        right={<Image source={images.ic_visible} style={{width:24, tintColor:'#000', height:24}} />}
        secureTextEntry={!showPassword}
        error={!isPasswordValid}
        outlineStyle={{borderWidth:0.5, }}
        underlineColorAndroid='transparent'
      />
      <HelperText type="error" visible={!isPasswordValid}>
        Password is required
      </HelperText>

      <Button style={styles.loginBtn} mode="contained" onPress={handleLogin}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white
  },
  loginBtn:{
    width:'40%',
    borderRadius:10,
    alignSelf:'center',
    backgroundColor: colors.pink,
    marginTop:10
  },
  textInput:{
    backgroundColor: colors.white,
    marginHorizontal:10,
    padding:0
    
  }
});

export default Login;
