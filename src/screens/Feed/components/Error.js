import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default ({ error, feedUpdate }) => (
  <View>
    <Text>Ha ocurrido un error inesperado</Text>
    <Text>{error}</Text>
    <TouchableOpacity onPress={feedUpdate}>
      <Text>Try again</Text>
    </TouchableOpacity>
  </View>
);
