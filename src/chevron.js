import React, { PureComponent } from "react";
import { View } from "react-native";

export class Chevron extends PureComponent {
  render() {
    const { color, rotate, size } = this.props;

    const chevronTriangle = {
      backgroundColor: "transparent",
      borderTopWidth: 1.33 * size,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 5 * size,
      borderTopColor: "transparent",
      borderBottomColor: "transparent",
      borderRightColor: "transparent",
      borderLeftColor: color
    };

    return (
      <View
        style={{
          width: 10 * size,
          height: 3.33 * size,
          transform: [{ rotate: `${rotate}deg` }]
        }}
      >
        <View
          style={{
            width: 10 * size,
            height: 3.33 * size,
            backgroundColor: color
          }}
        />
        <View
          style={[
            chevronTriangle,
            {
              position: "absolute",
              top: -1.33 * size,
              left: 0
            }
          ]}
        />
        <View
          style={[
            chevronTriangle,
            {
              position: "absolute",
              top: -1.33 * size,
              right: 0,
              transform: [{ scaleX: -1 }]
            }
          ]}
        />
        <View
          style={[
            chevronTriangle,
            {
              position: "absolute",
              bottom: -1.33 * size,
              left: 0,
              transform: [{ scale: -1 }]
            }
          ]}
        />
        <View
          style={[
            chevronTriangle,
            {
              position: "absolute",
              bottom: -1.33 * size,
              right: 0,
              transform: [{ scaleY: -1 }]
            }
          ]}
        />
      </View>
    );
  }
}
