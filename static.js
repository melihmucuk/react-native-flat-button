import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export const staticPropTypes = {
  ...TouchableOpacity.propTypes,
  type: React.PropTypes.string.isRequired,
  backgroundColor: React.PropTypes.string,
  borderColor: React.PropTypes.string,
  borderRadius: React.PropTypes.number,
  shadowHeight: React.PropTypes.number,
  borderLeftWidth: React.PropTypes.number,
  borderRightWidth: React.PropTypes.number,
  activeOpacity: React.PropTypes.number,
  containerStyle: View.propTypes.style,
  contentStyle: Text.propTypes.style
}

export const staticDefaultProps = {
  borderRadius: 8,
  shadowHeight: 4,
  activeOpacity: 0.9,
  backgroundColor: '#34495e',
  borderColor: '#2c3e50',
  borderLeftWidth: 0.5,
  borderRightWidth: 0.5
}
