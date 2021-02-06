import React from 'react';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import {View, Text, TextInput, Button} from 'react-native';

function Donor(props){
    return(
    <View style={{backgroundColor: 'mistyrose', flex: 1 }}>
        <Text style={{textDecorationLine:'underline', fontSize: 50, height: 150, alignItems:'center', textAlign:'center', color: 'black'}}>Search Donor</Text>
        <TextInput style={{
            width: "70%",
            fontSize: 20,
            height: 60,
            borderColor: 'gray'
        }}
        placeholder='Blood Group:' />
        <Button onPress={()=>props.navigation.navigate("Home")} title="Go to login page"/>
        <Button onPress={()=>props.navigation.navigate(Register)} title="Register now"/>
    </View>
    );
}

export default Donor;