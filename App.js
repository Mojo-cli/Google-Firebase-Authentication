import React from 'react';
import AppNavigator from './Navigation/AppNavigator';
import { firebaseConfig } from './config';
import * as firebase from 'firebase';

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return<AppNavigator/>;
}