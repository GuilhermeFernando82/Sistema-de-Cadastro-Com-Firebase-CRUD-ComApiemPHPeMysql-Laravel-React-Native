import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import firebase from './firebaseconection';
import { TextInput } from 'react-native-gesture-handler';
import login from './Login';
import { createStackNavigator } from '@react-navigation/stack';
import { firestore } from 'firebase';
import {Button} from 'react-native-elements';
function manager({navigation}){
    function back(){
        navigation.navigate('logado')
    }
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
    const [data, setData] = useState('')
    const user_id = firebase.auth().currentUser.uid
    useEffect(()=>{
        let ref = firebase.firestore().collection('produtos').where("user_id", "==",user_id).onSnapshot(querySnapshot =>{
        const data = []
        querySnapshot.forEach(doc =>{
          data.push({
            ...doc.data(),
               key:doc.id
          })
        })
          setData(data)
      })
        return () => ref()
    }, [])
    return(
        <View>
            <Text>Gerenciador</Text>
            <FlatList
                data={data}
                renderItem={({item}) => (
                  <View style={{ marginBottom:5,borderRadius:15,backgroundColor:'black',borderWidth:4,borderColor:'green',height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{color:'white', fontSize:15}}>Nome: {item.nome}</Text>
                    <Text style={{color:'white', fontSize:15}}>Descrição: {item.desc}</Text>
                  </View>
                )}
            />
            <Button
                buttonStyle={style.button}
                title="Voltar"
                onPress={back}
            />
        </View>
    );
}
export default manager;