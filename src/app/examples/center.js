import React from "react";
import {Button, Text, View} from 'react-native'
import {RouteName} from "../routers";

export default class CenterScreen extends RouterScreen {

  render() {
    return (
      <View>
        <Text>{this.router.getParam("name", "CenterScreen")}</Text>
        <Button
          onPress={() =>
            this.router.navigate(RouteName.Navigation, {name: 'callback'})
          }
          title="Home Page"
          color="#841584"
        />
      </View>
    );
  }

}