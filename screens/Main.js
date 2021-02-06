import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet,Button} from 'react-native';
import { create } from 'react-test-renderer';
import database from '@react-native-firebase/database';
import { LoginManager, AccessToken } from "react-native-fbsdk";

function Main(props){
         const [email,setEmail] = useState("");
         const [password,setPassword] = useState("");
    const save_data = () => {
       let user = {
           email,
           password
       }
       database().ref('/').child('users').push(user)
       setEmail("")
       setPassword("")
    }

    const facebook_login = () => {
        LoginManager.logInWithPermissions(["public_profile"]).then(
            function(result) {
              if (result.isCancelled) {
                console.log("Login cancelled");
              } else {
                let {data} = AccessToken.getCurrentAccessToken()
                .then((data)=>{
                  console.log("data==>",data)
                },
                console.log(
                  "Login success with permissions: " +
                    result.grantedPermissions.toString()
                )
                );
              }
            },
            function(error) {
              console.log("Login fail with error: " + error);
            }
          );
    }

    return(
    <View style={{backgroundColor: 'mistyrose', flex: 1 }}>
        <Text style={{paddingVertical: 25, height: 90, fontSize: 35, alignItems:'center', textAlign:'center', color: 'black'}}>MK Blood Bank</Text>
        <Text style={{height: 60, fontSize: 20, alignItems:'center', textAlign:'center', color: 'black'}}> Spare only few minutes {'\n'} and save one life</Text>
        <Image 
            source={require('../assets/blood.png')} 
            style = {{width: 360, height: 200}}
        />
        <View style={{marginTop: 7, paddingVertical: 5, textAlign: 'center', alignItems: 'center', borderWidth: 1, borderColor: "grey", width: "100%"}}>
            <TextInput value={email} onChangeText={(text)=>setEmail(text)} placeholder='E-mail address'/>
        </View>
        <View style={{marginTop: 5, marginBottom: 5, paddingVertical: 5, textAlign: 'center', alignItems: 'center', borderWidth: 1, borderColor: "grey", width: "100%"}}>
            <TextInput secureTextEntry={true} value={password} onChangeText={(text)=>setPassword(text)} placeholder='password'/>
        </View>
        <View style={{margin: 2}}>
        <Button onPress={()=>props.navigation.navigate("Home")} onPress={save_data} title="Login"/>
        </View>
        <View style={{margin: 2}}>
        <Button onPress={facebook_login} title="Login with Facebook"/>
        </View>
        <View style={{margin: 2}}>
            <Button onPress={()=>props.navigation.navigate("Register")} title="Go to registration page"/>
        </View>
    </View>
    );
}

export default Main;