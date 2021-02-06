import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import database from '@react-native-firebase/database';

function Register(props){
    const [Name,setName] = useState("");
    const [Password,setPassword] = useState("");
    const [Gender,setGender] = useState("");
    const [Email,setEmail] = useState("");
    const [Contact,setContact] = useState("");
    const [Address,setAddress] = useState("");
    const [City,setCity] = useState("");
    const [BloodGroup,setBloodGroup] = useState("");
const save_data = () => {
  let user = {
      Name,
      Password,
      Gender,
      Email,
      Contact,
      Address,
      City,
      BloodGroup
  }
  database().ref('/').child('users').push(user)
  .then((user) => {
    user.ok = true;
    return user;
  })
  .catch(() => {
    const user = {};
    user.ok = false;
    return user;
  });
}
    return(
    <View style={{backgroundColor: 'mistyrose', flex: 1 }}>
        <Text style={{paddingVertical: 3, textDecorationLine:'underline', fontSize: 35, height: 50, alignItems:'center', textAlign:'center', color: 'black'}}>Registration</Text>
        <TextInput value={Name} onChangeText={(text)=>setName(text)} style={{
            width: "70%",
            textAlign: 'center',
            fontSize: 20,
            height: 50,
            borderColor: 'gray'
        }}
        placeholder='User name:' />
        <TextInput secureTextEntry={true} value={Password} onChangeText={(text)=>setPassword(text)} style={{
            width: "70%",
            textAlign: 'center',
            fontSize: 20,
            height: 50,
            borderColor: 'gray',
        }}
        placeholder='Password:' />
        <TextInput value={Gender} onChangeText={(text)=>setGender(text)} style={{
            width: "70%",
            textAlign: 'center',
            fontSize: 20,
            height: 50,
            borderColor: 'gray',
        }}
        placeholder='Gender:' />
        <TextInput value={Email} onChangeText={(text)=>setEmail(text)} style={{
            width: "70%",
            textAlign: 'center',
            fontSize: 20,
            height: 50,
            borderColor: 'gray',
        }}
        placeholder='E-mail:' />
        <TextInput value={Contact} onChangeText={(text)=>setContact(text)} style={{
            width: "70%",
            textAlign: 'center',
            fontSize: 20,
            height: 50,
            borderColor: 'gray',
        }}
        placeholder='Contach No:' />
        <TextInput value={Address} onChangeText={(text)=>setAddress(text)} style={{
            width: "70%",
            textAlign: 'center',
            fontSize: 20,
            height: 50,
            borderColor: 'gray',
        }}
        placeholder='Address:' />
         <TextInput value={City} onChangeText={(text)=>setCity(text)} style={{
            width: "70%",
            textAlign: 'center',
            fontSize: 20,
            height: 50,
            borderColor: 'gray',
        }}
        placeholder='City:' />
        <TextInput value={BloodGroup} onChangeText={(text)=>setBloodGroup(text)} style={{
            width: "70%",
            textAlign: 'center',
            fontSize: 20,
            height: 50,
            borderColor: 'gray',
        }}
        placeholder='Blood Group:' />
        <View style={{margin: 10}}>
        <Button onPress={()=>props.navigation.navigate("Main")} title="Go to Login Page"/>
        </View>
        <View style={{margin: 10}}>
        <Button onPress={save_data} title="Register now"/>
        </View>
    </View>
    )
}

export default Register;