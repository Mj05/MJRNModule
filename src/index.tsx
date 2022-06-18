import * as React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

import Icons from './assets'

export const addOne = (input: number) => input + 1

export const Counter = () => {
  const [count, setCount] = React.useState(0)

  return (
    <View style={styles.container}>
      <Text>You pressed {count} times</Text>
      <Button onPress={() => setCount(addOne(count))} title='Press Me' />
      <Image source={Icons.userImage} style={styles.userImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  userImage: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
})
