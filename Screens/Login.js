import React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Item, Input, Label } from 'native-base';
import Colors from '../Constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from "firebase";

export default class Login extends React.Component{

    state={
        email:"",
        password:""
    }

    userSignin(email, password){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            this.props.navigation.replace('Dashboard')
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }

    render(){
        const { replace,navigate } = this.props.navigation;
        return(

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <SafeAreaView style = {styles.container} >
                    
                    <View style={styles.upper}>
                        <Image source={require("../assets/Login/firebase.png")} style={styles.image1}/>
                    </View>
                    
                    <Text style={{ fontSize:25, color: Colors.headerColor, textAlign:"center", fontWeight:"bold", marginTop:20}}>Google Firebase Authentication</Text> 
                        <Text style={{ fontSize:25, color: Colors.textColor, textAlign:"center"}}> With </Text> 
                    <Text style={{ fontSize:25, color: Colors.primaryColor, textAlign:"center" }}> React Native ! </Text> 
                    
                    <View style = {styles.mid}>
                        <Item stackedLabel last style={styles.form}>
                        <Label style={{color:Colors.headerColor}}>Email</Label>
                        <Input style = {{color:"white"}} value={this.state.email} onChangeText={(text)=>this.setState({email:text})}/>
                        </Item>

                        <Item stackedLabel last style={styles.form}>
                        <Label style={{color:Colors.headerColor}}>Password</Label>
                        <Input style = {{color:"white"}} secureTextEntry={true} value={this.state.password} onChangeText={(text)=>this.setState({password:text})}/>
                        </Item>
                    </View>

                    <TouchableOpacity onPress={()=>this.userSignin(this.state.email, this.state.password)} style={styles.button}>
                            <Text style={{color:"white", textAlign:"center", paddingTop:6, fontWeight:"bold", fontSize:16}}> Login </Text>
                    </TouchableOpacity>

                    <View style={styles.lower}>

                        <Text style={{color:Colors.textColor, marginTop:5, fontSize:18}}> Don't have an account? </Text>

                        <TouchableOpacity onPress={()=>replace("Signup")}>
                                <Text style={{ color:Colors.headerColor, fontWeight:"bold", fontSize:18, marginTop:4.5}}> Signup </Text>
                        </TouchableOpacity>

                    </View>

                </SafeAreaView>

            </TouchableWithoutFeedback>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: Colors.backColor
    },
    upper:{
        justifyContent:"center",
        alignItems:'center'
    },
    image1:{
        height:170,
        width:190
    },
    form:{
        height:20,
        width:350,
        borderBottomColor:Colors.headerColor,
        color:"white"
    },
    mid:{
        marginTop:10
    },
    lower:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'center',
        alignItems:"center",
    },
    button:{
        backgroundColor:Colors.headerColor,
        width:100,
        height:30,
        borderRadius:10,
        elevation:8,
        marginTop:35
    }
});
