import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, FONTS, SIZES, SHADOWS } from '../constants'


export const CircleButton = ({ imgURL, handlePress, ...props }) => {
  return (
    <TouchableOpacity style={{
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      position: 'absolute',
      borderRadius: SIZES.extraLarge,
      alignItems: 'center',
      justifyContent: 'center',
      ...SHADOWS.light,
      ...props
    }}
      onPress={handlePress}
    >
      <Image 
      source={imgURL}
      resizeMode={'contain'}
      style={{width: 24, height: 24}}
      />
    </TouchableOpacity>
  )
}
export const RectButton = () => {
  return (
    <View>
      <Text>rect</Text>
    </View>
  )
}

