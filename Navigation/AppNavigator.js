import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";
import Colors from '../Constants/Colors';

import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Loading from '../Screens/Loading';
import Dashboard from '../Screens/Dashboard';


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="Login" component={Login} 
                    options={
                        {
                            headerStyle:{
                                backgroundColor:Colors.headerColor
                            }
                        }
                    }
                />
                <Stack.Screen name="Signup" component={Signup}
                    options={
                        {
                            headerStyle:{
                                backgroundColor:Colors.headerColor
                            }
                        }
                    }
                />
                <Stack.Screen name="Loading" component={Loading}
                    options={
                        {
                            headerShown:false,
                            headerStyle:{
                                backgroundColor:Colors.headerColor
                            }
                        }
                    }
                />
                <Stack.Screen name="Dashboard" component={Dashboard}
                    options={
                        {
                            title:"Authentication Dashboard",
                            headerStyle:{
                                backgroundColor:Colors.headerColor
                            }
                        }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default AppNavigator;