import { StyleSheet, Button, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState} from 'react';
import firebase from './firebaseconection';
import Logado from './logado';
import failedLogin from './failedlogin';
function HomeLogin({navigation}){
    function navegarSucess(){
        navigation.navigate('Logado')
    }
    function navegarFailed(){
        navigation.navigate('failedLogin')
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }
    const onChangePassword = (txtPassword) =>{
        setPassword(txtPassword)
    }
    const login = () =>{
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            navegarSucess()
        }).catch(()=>{
            navegarFailed()
        })
    }
    return(
        <View>
            <Text>Login de Usuários</Text>
            <Text>E-mail</Text>
            <TextInput
             value={email}
             onChangeText={txtEmail => onChangeEmail(txtEmail)}>
            </TextInput>
            <Text>Senha</Text>
            <TextInput
             value={password}
             onChangeText={txtPassword => onChangePassword(txtPassword)}>
            </TextInput>
            <Button 
            title="Entrar"
            onPress={login}/>
        </View>
    );
}
const Stack = createStackNavigator();

function LoginForm() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="HomeLogin" component={HomeLogin} />
        <Stack.Screen name="Logado" component={Logado} />
        <Stack.Screen name="failedLogin" component={failedLogin} />
      </Stack.Navigator>
   
  );
}
export default LoginForm;