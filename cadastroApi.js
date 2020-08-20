import React, { Component } from 'react';
import api from './apiaxios';
import { StyleSheet, View, Text, SafeAreaView,Modal  } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';

export default class Main extends React.Component {
    static navigationOptions = {
        title: 'CadastroApi1'
    };
    constructor(props){
        super(props);
        this.state = {
            data: [],
            nome: '',
            desc: '',
            text: '',
            visible: false,
            style: StyleSheet.create({
                button: {
                  backgroundColor:'green',
                  borderRadius:15,
                  borderWidth:5,
                  borderColor:'yellow',
                  width:300,
                  margin:5,
                }
              })
        }
       
        
        this.insert = this.insert.bind(this);
        
       
        
    }

   
    insert(){
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
          };
          
          fetch("http://192.168.15.6:8000/api/produtos?nome="+this.state.nome+"&desc="+this.state.desc+"", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(this.loadProducts)
            .then(alert('Inserido com sucesso'))
            .catch(error => console.log('error', error));
            
       };
   
   
   
    
   
    render() {
        return (
            
            <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center', backgroundColor:'gray' }}>
                
                <Text style={{color:'pink', fontSize:16}}>Cadastro de Produtos</Text>
                <TextInput
                    style={{textAlign:'center', height:50,width:320 ,marginBottom:6, borderColor:'black',borderWidth:6, backgroundColor:'white',borderRadius:15}}
                    onChangeText={(value) => this.setState({nome: value})}
                    value={this.state.nome}
                />
                <TextInput
                    style={{textAlign:'center',borderWidth:6, height:50,marginBottom:6,width:320 ,borderColor:'black', backgroundColor:'white',borderRadius:15}}
                    onChangeText={(value) => this.setState({desc: value})}
                    value={this.state.desc}
                />
                <Button
                    buttonStyle={this.state.style.button}
                    title="Insert"
                    onPress={this.insert}
                    
                />
            </View>
        );
    }
}