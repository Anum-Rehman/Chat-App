
import React from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  Platform,
  StyleSheet,
} from 'react-native'

const Button = () => {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="rgba(0,0,0,0.5)"
        >
        <View>
          {/* {loading &&
            <ActivityIndicator
              animating
              size="small"
            />
          } */}
            <Text>
              Click Me
            </Text>
        </View>
      </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 10,
    height: Platform.OS === 'ios' ? 35 : 40,
    minWidth: 160,
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white',
    alignItems: 'center',
  },
})

export default Button;