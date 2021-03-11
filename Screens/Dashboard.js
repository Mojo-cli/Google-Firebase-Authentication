import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Alert, Image } from 'react-native';
import * as firebase from "firebase";
import Colors from '../Constants/Colors';

export default class Dashboard extends React.Component{

    state={
        email:""
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.setState({
                    email:user.email
                })
            }else{
                this.props.navigation.replace("Login");
            }
        })
    }

    userSignout(){
        firebase.auth().signOut().catch(error=>{
            Alert.alert(error.message)
        })
    }

    render(){

        return(
            <SafeAreaView style={styles.container}>

                <View style={styles.card}> 
                    <Image source={require("../assets/Dashboard/celebration.png")} style={styles.logo}/>
                    <Text style={{fontSize:18, fontWeight:"bold", textAlign:"center"}}> Authentication Successfully Done With Your Email ID {this.state.email} !</Text>
                </View>

                <TouchableOpacity onPress={()=>this.userSignout()} style={styles.button}>
                    <Text style={{color:"white", textAlign:"center", paddingTop:6, fontWeight:"bold", fontSize:16}}> Logout </Text>
                </TouchableOpacity>

            </SafeAreaView>
        );

    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.backColor
    },
    button:{
        backgroundColor:Colors.headerColor,
        width:100,
        height:30,
        borderRadius:10,
        elevation:8,
        marginTop:35
    },
    card:{
        height:250,
        width:350,
        backgroundColor:Colors.textColor,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        padding:8
    },
    logo:{
        height:100,
        width:100,
        marginBottom:20
    }
});

