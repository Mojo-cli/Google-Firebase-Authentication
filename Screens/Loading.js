import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator, SafeAreaView } from 'react-native';
import * as firebase from "firebase";

import Colors from '../Constants/Colors';

export default class Loading extends React.Component{
    componentDidMount(){
        this.unsub = firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.props.navigation.navigate("Dashboard")
            }else{
                this.props.navigation.navigate("Login")  
            }
        })
    }

    componentWillUnmount(){
        this.unsub();
    }

    render(){
        return(
            <SafeAreaView  style={styles.container}>
                <View style={{height:200,width:200, backgroundColor:Colors.textColor, justifyContent:"center", alignItems:"center", borderRadius:360, elevation:8}}>
                    <ActivityIndicator size="large" color={Colors.headerColor}/>
                    <Text style={{fontSize:18,fontWeight:'bold', marginTop:20}}> Wait While Loading... </Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:Colors.backColor
    }
});
