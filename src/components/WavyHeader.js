import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const WavyHeader = ({customStyles, customHeight, customBgColor, customWavePattern}) => {
    return (
        <View style={customStyles}>
            <View style={{ backgroundColor: customBgColor, height: customHeight }}>
            <Svg width="100%"
          height="350" viewBox="20 40 220 130"
          style={{ position: 'absolute' }}
        >
          <Path fill={customBgColor} d={customWavePattern} />
        </Svg>
            </View>
        </View>
    );
}

export default WavyHeader;