import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import {primary, neutral, warn, positive, negative, info} from './builtin';

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

        var defaultStyle = {}
        var pressInStyle = {
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

            pressInStyle.backgroundColor = this.props.backgroundColor;
            pressInStyle.borderRadius = this.props.borderRadius;
            break;

          case "primary":
            defaultStyle = primary;
            pressInStyle.backgroundColor = primary.backgroundColor;
            pressInStyle.borderRadius = primary.borderRadius;
            break;

          case "neutral":
            defaultStyle = neutral;
            pressInStyle.backgroundColor = neutral.backgroundColor;
            pressInStyle.borderRadius = neutral.borderRadius;
          break;

          case "warn":
            defaultStyle = warn;
            pressInStyle.backgroundColor = warn.backgroundColor;
            pressInStyle.borderRadius = warn.borderRadius;
          break;

          case "negative":
            defaultStyle = negative;
            pressInStyle.backgroundColor = negative.backgroundColor;
            pressInStyle.borderRadius = negative.borderRadius;
          break;

          case "positive":
            defaultStyle = positive;
            pressInStyle.backgroundColor = positive.backgroundColor;
            pressInStyle.borderRadius = positive.borderRadius;
          break;

          case "info":
            defaultStyle = info;
            pressInStyle.backgroundColor = info.backgroundColor;
            pressInStyle.borderRadius = info.borderRadius;
          break;

          default:
            defaultStyle = primary;
            pressInStyle.backgroundColor = primary.backgroundColor;
            pressInStyle.borderRadius = primary.borderRadius;
        }

        this.state = {
            defaultStyle: defaultStyle,
            pressInStyle: pressInStyle,
            style: defaultStyle
        }
    }

    _pressIn(){
        this.setState({
            style: this.state.pressInStyle
        })
    }

    _pressOut(){
        this.setState({
            style: this.state.defaultStyle
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
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
  },
  text:{
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
  }
});

export default Button;
