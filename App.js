import * as React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './Cadastration';
import Login from './Login';
import {Button} from 'react-native-elements';
import Api1 from './api';
import CadastroApi from './cadastroApi'
function HomeScreen({navigation}) {
  const style = StyleSheet.create({
    button: {
      backgroundColor:'green',
      borderRadius:15,
      borderWidth:5,
      borderColor:'yellow',
      width:300,
      margin:5,
    }
  })
  return (
    <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center', backgroundColor:'gray' }}>
      <Text>Sistema de Cadastro de Login</Text>
      <Button 
        buttonStyle={style.button}
        title="Cadastrar"
        onPress={() => navigation.navigate('Cadastro')}
        
        />
      <Button
        buttonStyle={style.button}
        title="Login"
        onPress={() => navigation.navigate('Login')}
        
      />
      <Button
        buttonStyle={style.button}
        title="Api"
        onPress={() => navigation.navigate('JSHunt')}
        
      />
      <Button
        buttonStyle={style.button}
        title="CadastroNaApiNova"
        onPress={() => navigation.navigate('CadastroApi1')}
        
      />
    </View>
    
    
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="JSHunt" component={Api1} />
        <Stack.Screen name="CadastroApi1" component={CadastroApi}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;