import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { buttonStyles, styles } from './styles'
import { getPressInStyle } from './helpers'

class Button extends Component {
    static propTypes = {
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

     static defaultProps = {
         borderRadius: 8,
         shadowHeight: 4,
         activeOpacity: 0.9,
         backgroundColor: '#34495e',
         borderColor: '#2c3e50',
         borderLeftWidth: 0.5,
         borderRightWidth: 0.5
     }

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

        this._pressIn = this._pressIn.bind(this)
        this._pressOut = this._pressOut.bind(this)

        let defaultStyle = {}

        switch (type) {
          case "custom":
            defaultStyle = {
              borderRadius: borderRadius,
              borderBottomWidth: shadowHeight,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderLeftWidth: borderLeftWidth,
              borderRightWidth: borderRightWidth
            }
            break

          case "primary":
            defaultStyle = buttonStyles.primary
            break

          case "neutral":
            defaultStyle = buttonStyles.neutral
          break

          case "warn":
            defaultStyle = buttonStyles.warn
          break

          case "negative":
            defaultStyle = buttonStyles.negative
          break

          case "positive":
            defaultStyle = buttonStyles.positive
          break

          case "info":
            defaultStyle = buttonStyles.info
          break

          default:
            defaultStyle = buttonStyles.primary
        }

        this.state = {
            defaultStyle,
            pressInStyle: getPressInStyle(type, backgroundColor, borderRadius),
            style: defaultStyle,
            isBorderPresent: true,
        }
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
