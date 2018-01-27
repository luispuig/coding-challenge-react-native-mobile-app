import React from "react";
import PropTypes from "prop-types";

import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

class SectionSelector extends React.PureComponent {
  _changeSection_New = () => this.props.feedSectionChange("new");
  _changeSection_Top = () => this.props.feedSectionChange("top");
  _changeSection_Controversial = () =>
    this.props.feedSectionChange("controversial");
  _changeSection_Hot = () => this.props.feedSectionChange("hot");

  render() {
    const { section } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this._changeSection_New}
          style={[styles.item, section == "new" ? styles.selected : {}]}
        >
          <Text
            style={[styles.text, section == "new" ? styles.selected_text : {}]}
          >
            New
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this._changeSection_Top}
          style={[styles.item, section == "top" ? styles.selected : {}]}
        >
          <Text
            style={[styles.text, section == "top" ? styles.selected_text : {}]}
          >
            Top
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this._changeSection_Controversial}
          style={[
            styles.item,
            section == "controversial" ? styles.selected : {}
          ]}
        >
          <Text
            style={[
              styles.text,
              section == "controversial" ? styles.selected_text : {}
            ]}
          >
            Popular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this._changeSection_Hot}
          style={[styles.item, section == "hot" ? styles.selected : {}]}
        >
          <Text
            style={[styles.text, section == "hot" ? styles.selected_text : {}]}
          >
            Hot
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
SectionSelector.propTypes = {
  section: PropTypes.string.isRequired,
  feedSectionChange: PropTypes.func.isRequired
};

export default SectionSelector;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC"
  },
  item: {
    padding: 10,
    flex: 1
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    color: "#47b8ff"
  },
  selected: {
    backgroundColor: "#47b8ff"
  },
  selected_text: {
    color: "#FFFFFF"
  }
});
