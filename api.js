import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView,Modal  } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';

export default class Main extends React.Component {
    static navigationOptions = {
        title: 'JSHunt'
    };
    constructor(props){
        super(props);
        this.state = {
            data: [],
            nome: '',
            desc: '',
            text: '',
            id_selected: '',
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
        this.loadProducts = this.loadProducts.bind(this)
        this.renderrow = this.renderrow.bind(this)
        
    }
    async removeItemValue(key){
            var requestOptions = {
                method: 'DELETE',
                redirect: 'follow'
            };
          
          fetch("http://192.168.15.6:8000/api/produtos/"+key, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(this.loadProducts)
            .catch(error => console.log('error', error));
    }
    componentDidMount() {
        
            this.loadProducts();
        
        
    }
    
    async updateItem(key){
        this.setState({isVisible:true})
        var requestOptions = {
            method: 'PUT',
            redirect: 'follow'
          };
          
          fetch("http://192.168.15.6:8000/api/produtos/"+key+"?nome="+this.state.nome+"&desc="+this.state.desc+"", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(this.loadProducts)
            .then(alert('Alterado com sucesso'))
            .catch(error => console.log('error', error));
            
       };
   
    loadProducts = async () => {
        this.setState({isLoading:false})
        fetch('http://192.168.15.6:8000/api/produtos').then(res => res.json()).then(res => {
            this.setState({
                data: res || []
            })
        }).catch((error)=>{
            console.log("Api call error");
            alert(error.message);
        }).finally(()=>{this.setState({isLoading:false})});
        /*try{
            const response = await api.get();
        }catch(err) {
            // TODO
            // adicionar tratamento da exceção
            console.error(err);
        }
        
        */
        //const { docs } = response.data;

        //console.log(docs);
    };
    renderrow = ({item}) =>{
        return(
            <View style={{ marginBottom:5,marginTop:5,borderRadius:15,backgroundColor:'black',borderWidth:4,borderColor:'green',height: 200, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                     
                      <Text style={{color:'white', fontSize:15}}>Nome: </Text>
                      <Text style={{color:'white', fontSize:15}}>Nome: {item.nome}</Text>
                      <Text style={{color:'white', fontSize:15}}>Descrição: {item.desc}</Text>
                      <Button buttonStyle={this.state.style.button} title="Remove" onPress={() => this.removeItemValue(item.id)}/>
                      <Button buttonStyle={this.state.style.button} title="update" onPress={() => this.setState({ visible: true, id_selected: item.id})}/>         
                      <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center', backgroundColor:'gray' }}>
                        <Modal
                            animationType={'slide'}
                            transparent={false}
                            visible={this.state.visible}
                            onRequestClose={() => {
                                this.setState({ visible: false });
                            }}
                            >
                            <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center', backgroundColor:'gray' }}>
                            <Text>Atualizar Item</Text>
                            <TextInput
                                style={{textAlign:'center', height:50,width:320 ,marginBottom:6, borderColor:'black',borderWidth:6, backgroundColor:'white',borderRadius:15}}
                                onChangeText={(value) => this.setState({nome: value})}
                                value={this.state.nome}
                            />
                            <TextInput
                                style={{textAlign:'center', height:50,width:320 ,marginBottom:6, borderColor:'black',borderWidth:6, backgroundColor:'white',borderRadius:15}}
                                onChangeText={(value) => this.setState({desc: value})}
                                value={this.state.desc}
                            />
                            <Button
                                buttonStyle={this.state.style.button}
                                title="Atualizar"
                                onPress={() => this.updateItem(this.state.id_selected)}
                                
                            />
                            <Button
                            buttonStyle={this.state.style.button}
                            title="Fechar"
                            onPress={() => {
                                this.setState({ visible: false });
                            }}
                            />
                        </View>
                    </Modal>
                </View>
            </View> 
        )
    }

    render() {
        return (
                <SafeAreaView>
                <FlatList
                inverted
                data={this.state.data}
                renderItem={this.renderrow}
                keyExtractor={item => item.id} 
                />
                </SafeAreaView>
        );
    }
}