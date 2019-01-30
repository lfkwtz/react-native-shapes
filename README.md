# react-native-shapes

[![npm version](https://badge.fury.io/js/react-native-shapes.svg)](https://badge.fury.io/js/react-native-shapes)

🔻 A collection of simple shapes built with CSS for use as icons, buttons, graphics, etc..

[View example on snack.expo.io](https://snack.expo.io/@lfkwtz/react-native-shapes)

## Getting Started

### Installing

`npm install react-native-shapes`

### Usage

`import { Chevron, Heart, Triangle } from 'react-native-shapes'`

### Shapes

-   Chevron (also supports `type` prop of thin (default) or thick)
-   Heart
-   Triangle (also supports `type` prop of equilateral (default) or isosceles)

### Props

| Name   | Type   | Description                                            |
| ------ | ------ | ------------------------------------------------------ |
| Color  | String | Changes the color of the shape. Defaults to black.     |
| Rotate | Int    | Rotates the shape clockwise.                           |
| Size   | Float  | Changes the size of the shape. Defaults to 1.          |
| Style  | Object | Style overrides to spread onto the outer wrapping View |

## License

react-native-shapes is [MIT licensed](https://github.com/lfkwtz/react-native-shapes/tree/master/LICENSE)
