import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { WavyHeader, MyCard } from '../components';

const Login = ({ mainHeading }) => {
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.gradientContainer}
        colors={['#f8fcfc', '#0b64dd']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <WavyHeader
          customStyles={styles.svgCurve}
          customBgColor="#0099ff"
          customWavePattern="M380.279 107.377C380.279 107.377 295.739 13.1031 187.625 107.25C79.5108 201.397 -1.97128 107.125 -1.97128 107.125L-1.89778 1.07516e-06L380.353 0.252415L380.279 107.377Z"
        />
        <View style={styles.headerContainer}>
        <Image source={require('../../public/images/HRK-LOGO-PNG-01.png')} style={{width: 350, height: 50}}/>
        </View>
        <MyCard 
          MainHead="Login"
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#408fe3',
    justifyContent: 'center',
  },
  gradientContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    marginTop: 50,
    marginHorizontal: 10
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 35
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width
  },
});

export default Login;