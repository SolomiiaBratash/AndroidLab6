// import Svg, {
//   Circle,
//   Ellipse,
//   G,
//   Text,
//   TSpan,
//   TextPath,
//   Path,
//   Polygon,
//   Polyline,
//   Line,
//   Rect,
//   Use,
//   Image,
//   Symbol,
//   Defs,
//   LinearGradient,
//   RadialGradient,
//   Stop,
//   ClipPath,
//   Pattern,
//   Mask,
// } from 'expo';


import { Svg } from 'expo';
const { Circle, Polyline } = Svg;


import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class SvgExample extends React.Component {
  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}>
        <Svg
          height="300"
          width="300"
        >
          <Polyline
           // x y
						
			points="200,0 100,0 100,200 200,200 200,100 100,100"
            fill="none"
            stroke="black"
            strokeWidth="3"
          />
        </Svg>
      </View>
    );
  }
}