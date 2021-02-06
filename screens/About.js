import React from 'react';
import { View, Text, Button } from 'react-native';

function About(props){
    return(
      <View style={{ backgroundColor: 'mistyrose', flex: 1, alignItems: 'center', paddingVertical: 50 }}>
          <Text style={{fontSize: 20}}>This app is acting as a centralized database for blood banks, where blood banks go to register and are able to update their blood inventory details in real-time. Through this app you can search through the centralized database for available blood type needed.{"\n"}</Text>
          <Text style={{fontSize: 20}}>This app consists of a central repository containing various blood deposits available along with associated details. This app is an online system that allows to check weather required blood deposits of a particular group are available in the blood bank.</Text>
        <View style={{margin: 20}}>
          <Button onPress={()=>props.navigation.navigate("Main")} title="Go to Main Page"/>
        </View>
      </View>
    );
}

export default About;