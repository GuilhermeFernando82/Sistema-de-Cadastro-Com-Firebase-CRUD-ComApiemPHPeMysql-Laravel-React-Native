import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cadastro from './Cadastration';
import Login from './Login';
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sistema de Cadastro de Login</Text>
      <Button 
        title="Cadastrar"
        onPress={() => navigation.navigate('Cadastro')}
        
        />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
        
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;