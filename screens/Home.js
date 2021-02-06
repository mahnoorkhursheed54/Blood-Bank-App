import React from 'react';
import { View, Text, Button } from 'react-native';

function Home(props){
    return(
      <View style={{ backgroundColor: 'mistyrose', flex: 1, alignItems: 'center', paddingVertical: 50 }}>
          <Text style={{paddingVertical: 25, height: 90, fontSize: 35, alignItems:'center', textAlign:'center', color: 'black'}}>Menu</Text>
        <View style={{margin: 15}}>
        <Button onPress={()=>props.navigation.navigate("Main")} title="Main Page"/>
        </View>
        <View style={{margin: 15}}>
            <Button onPress={()=>props.navigation.navigate("BloodBank")} title="Blood Bank"/>
        </View>
        <View style={{margin: 15}}>
        <Button onPress={()=>props.navigation.navigate("Register")} title="Registration Page"/>
        </View>
        <View style={{margin: 15}}>
            <Button onPress={()=>props.navigation.navigate("Donor")} title="Donor Details"/>
        </View>
        <View style={{margin: 15}}>
            <Button onPress={()=>props.navigation.navigate("About")} title="About Page"/>
        </View>
      </View>
    );
}

export default Home;