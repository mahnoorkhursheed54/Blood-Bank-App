import React from 'react';
import { View, Text } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

class BloodBank extends React.PureComponent {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <View style={{ backgroundColor: 'mistyrose', flex: 1, alignItems: 'center', paddingVertical: 50 }}>
        <Menu
          ref={this.setMenuRef}
          button={<Text onPress={this.showMenu} style={{ borderColor: 'black', borderWidth: 3, fontSize: 35}}>Tap to Select Blood Group</Text>}
        >
          <MenuItem onPress={this.hideMenu}>A+         12</MenuItem>
          <MenuDivider/>
          <MenuItem onPress={this.hideMenu}>A-          10</MenuItem>
          <MenuDivider/>
          <MenuItem onPress={this.hideMenu}>AB+         15</MenuItem>
          <MenuDivider/>
          <MenuItem onPress={this.hideMenu}>AB-         5</MenuItem>
          <MenuDivider/>
          <MenuItem onPress={this.hideMenu}>B+         21</MenuItem>
          <MenuDivider/>
          <MenuItem onPress={this.hideMenu}>B-         3</MenuItem>
          <MenuDivider/>
          <MenuItem onPress={this.hideMenu}>O+         8</MenuItem>
          <MenuDivider/>
          <MenuItem onPress={this.hideMenu}>O-         2</MenuItem>
        </Menu>
      </View>
    );
  }
}

export default BloodBank;
        
        {/* <Button onPress={()=>props.navigation.navigate("Home")} title="Go to login page"/>
        <Button onPress={()=>props.navigation.navigate(Register)} title="Register now"/> */}
   
