import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import { buttonStyles, styles } from './styles'

class Button extends Component {
    static propTypes = {
        ...TouchableOpacity.propTypes,
        type: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
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

        this._pressIn = this._pressIn.bind(this)
        this._pressOut = this._pressOut.bind(this)

        let defaultStyle = {}
        let pressInStyle = {
          borderBottomWidth: 0,
          borderColor: 'transparent',
          borderLeftWidth: 0,
          borderRightWidth: 0
        }

        switch (this.props.type) {
          case "custom":
            defaultStyle = {
              borderRadius: this.props.borderRadius,
              borderBottomWidth: this.props.shadowHeight,
              backgroundColor: this.props.backgroundColor,
              borderColor: this.props.borderColor,
              borderLeftWidth: this.props.borderLeftWidth,
              borderRightWidth: this.props.borderRightWidth
            }

            pressInStyle.backgroundColor = this.props.backgroundColor
            pressInStyle.borderRadius = this.props.borderRadius
            break

          case "primary":
            defaultStyle = buttonStyles.primary
            pressInStyle.backgroundColor = buttonStyles.primary.backgroundColor
            break

          case "neutral":
            defaultStyle = buttonStyles.neutral
            pressInStyle.backgroundColor = buttonStyles.neutral.backgroundColor
          break

          case "warn":
            defaultStyle = buttonStyles.warn
            pressInStyle.backgroundColor = buttonStyles.warn.backgroundColor
          break

          case "negative":
            defaultStyle = buttonStyles.negative
            pressInStyle.backgroundColor = buttonStyles.negative.backgroundColor
          break

          case "positive":
            defaultStyle = buttonStyles.positive
            pressInStyle.backgroundColor = buttonStyles.positive.backgroundColor
          break

          case "info":
            defaultStyle = buttonStyles.info
            pressInStyle.backgroundColor = buttonStyles.info.backgroundColor
          break

          default:
            defaultStyle = buttonStyles.primary
            pressInStyle.backgroundColor = buttonStyles.primary.backgroundColor
        }

        this.state = {
            defaultStyle,
            pressInStyle,
            style: defaultStyle,
        }
    }

    _pressIn(){
        this.setState({
            style: this.state.pressInStyle,
        })
    }

    _pressOut(){
        this.setState({
            style: this.state.defaultStyle,
        })
    }


  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        onPressIn={this._pressIn}
        onPressOut={this._pressOut}
        activeOpacity={this.props.activeOpacity}
        style={[styles.buttonContainer, this.props.containerStyle, this.state.style]}>
        <Text style={[styles.text, this.props.contentStyle]}>
            {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}



export default Button
