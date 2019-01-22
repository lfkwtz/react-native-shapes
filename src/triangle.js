import React, { PureComponent } from "react";
import { View } from "react-native";

export class Triangle extends PureComponent {
  render() {
    const { color, rotate, size } = this.props;

    return (
      <View
        style={[
          {
            width: 0,
            height: 0,
            borderLeftWidth: size / 2,
            borderRightWidth: size / 2,
            borderBottomWidth: size,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: color || "red",
            transform: [{ rotate: `${rotate}deg` }]
          }
        ]}
      />
    );
  }
}
