import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getDefaultStyle, getPressInStyle } from './helpers'
import { staticDefaultProps, staticPropTypes } from './static'
import { buttonStyles, styles } from './styles'

class Button extends Component {
  static propTypes = {...staticPropTypes}
  static defaultProps = {...staticDefaultProps}

  constructor(props){
    super(props)
    const {
      backgroundColor,
      borderColor,
      borderLeftWidth,
      borderRadius,
      borderRightWidth,
      shadowHeight,
      type,
     } = this.props

    this.state = {
      style: getDefaultStyle(type, this.props),
      pressInStyle: getPressInStyle(type, backgroundColor, borderRadius),
      isBorderPresent: true,
    }

    this._pressIn = this._pressIn.bind(this)
    this._pressOut = this._pressOut.bind(this)
  }

  _pressIn(){
    this.setState({
        isBorderPresent: false,
    })
  }

  _pressOut(){
    this.setState({
        isBorderPresent: true,
    })
  }

  render() {
    const { activeOpacity, children, containerStyle, contentStyle, onPress } = this.props
    const { isBorderPresent, style } = this.state
    return (
      <TouchableOpacity
        {...this.props}
        onPress={onPress}
        onPressIn={this._pressIn}
        onPressOut={this._pressOut}
        activeOpacity={activeOpacity}
        style={[styles.buttonContainer, style, { borderBottomWidth: isBorderPresent ? 4 : 0 }, containerStyle]}>
        <Text style={[styles.text, contentStyle]}>
            {children}
        </Text>
      </TouchableOpacity>
    )
  }
}

export default Button
