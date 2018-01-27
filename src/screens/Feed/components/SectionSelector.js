import React from "react";
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
          <Text style={styles.text}>New</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this._changeSection_Top}
          style={[styles.item, section == "top" ? styles.selected : {}]}
        >
          <Text style={styles.text}>Top</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this._changeSection_Controversial}
          style={[styles.item, section == "controversial" ? styles.selected : {}]}
        >
          <Text style={styles.text}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this._changeSection_Hot}
          style={[styles.item, section == "hot" ? styles.selected : {}]}
        >
          <Text style={styles.text}>Hot</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    margin: 5,
    padding: 5,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between"
  },
  item: {
    borderWidth: 1,
    padding: 4,
    flex: 1
  },
  text: {
    fontSize: 12,
    textAlign: "center"
  },
  selected: {
    backgroundColor: "#CCCCCC"
  }
});

export default SectionSelector;
