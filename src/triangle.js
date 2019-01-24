import React, { PureComponent } from "react";
import { View } from "react-native";

export class Triangle extends PureComponent {
  render() {
    const { color, rotate, type, size } = this.props;

    return (
      <View
        style={[
          {
            width: 0,
            height: 0,
            borderLeftWidth: (size / 2) * 10,
            borderRightWidth: (size / 2) * 10,
            borderBottomWidth: (type === "isosceles" ? size / 2 : size) * 10,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: color,
            transform: [{ rotate: `${rotate}deg` }]
          }
        ]}
      />
    );
  }
}
