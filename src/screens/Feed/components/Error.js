import React from "react";
import PropTypes from "prop-types";

import { Text, View, TouchableOpacity } from "react-native";

const Error = ({ error, feedUpdate }) => (
  <View>
    <Text>Ha ocurrido un error inesperado</Text>
    <Text>{error}</Text>
    <TouchableOpacity onPress={feedUpdate}>
      <Text>Try again</Text>
    </TouchableOpacity>
  </View>
);

Error.propTypes = {
  error: PropTypes.string.isRequired,
  feedUpdate: PropTypes.func.isRequired
};

export default Error;
