import React, { PureComponent } from "react";
import { View } from "react-native";

export class Heart extends PureComponent {
  render() {
    const { color, rotate, size } = this.props;

    const heartPiece = {
      width: 6 * size,
      height: 9 * size,
      position: "absolute",
      top: 0,
      borderTopLeftRadius: 3 * size,
      borderTopRightRadius: 3 * size,
      backgroundColor: color
    };

    return (
      <View
        style={[
          {
            width: 10 * size,
            height: 10 * size,
            backgroundColor: "transparent",
            transform: [{ rotate: `${rotate}deg` }]
          }
        ]}
      >
        <View
          style={[
            {
              transform: [{ rotate: "-45deg" }],
              left: 0.9 * size
            },
            heartPiece
          ]}
        />
        <View
          style={[
            {
              transform: [{ rotate: "45deg" }],
              right: 0.9 * size
            },
            heartPiece
          ]}
        />
      </View>
    );
  }
}
