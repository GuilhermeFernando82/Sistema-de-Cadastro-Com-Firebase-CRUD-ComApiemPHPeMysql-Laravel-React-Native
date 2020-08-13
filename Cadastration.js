import React, { useState} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import firebase from './firebaseconection';
import sucess from './sucess';
function TaskForm({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }
    const onChangePassword = (txtPassword) =>{
        setPassword(txtPassword)
    }
    const Cadastration = () => {
        firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
            navigation.navigate('sucess')
        }).catch(()=>{

        })
    }
    return(
        <View>
            <Text>Cadastro de Usuários</Text>
            <Text>Email</Text>
            <TextInput
            value={email}
            onChangeText={txtEmail => onChangeEmail(txtEmail)}>
            </TextInput>
            <Text>Senha</Text>
            <TextInput
            value={password}
            onChangeText={txtPassword => onChangePassword(txtPassword)}
            >

            </TextInput>
            <Button
                title="Cadastrar"
                onPress={Cadastration}
            >

            </Button>
        </View>
    );

}
const Stack = createStackNavigator();

function CadastrationForm() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="TaskForm" component={TaskForm} />
        <Stack.Screen name="sucess" component={sucess} />
      </Stack.Navigator>
   
  );
}
export default CadastrationForm;