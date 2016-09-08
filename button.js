import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class Button extends Component {
    static propTypes = {
        ...TouchableOpacity.propTypes,
        text: React.PropTypes.string.isRequired,
        backgroundColor: React.PropTypes.string,
        borderColor: React.PropTypes.string,
        borderRadius: React.PropTypes.number,
        shadowHeight: React.PropTypes.number,
        activeOpacity: React.PropTypes.number,
        containerStyle: View.propTypes.style,
        contentStyle: Text.propTypes.style
    }

    static defaultProps = {
        borderRadius: 8,
        shadowHeight: 4,
        activeOpacity: 0.9,
        backgroundColor: '#1abc9c',
        borderColor: '#16a085'
    }


    constructor(props){
        super(props)

        this._pressIn = this._pressIn.bind(this)
        this._pressOut = this._pressOut.bind(this)

        this.state = {
            borderBottomWidth: this.props.shadowHeight,
            borderColor: this.props.borderColor,
            borderRadius: this.props.borderRadius,
            borderLeftWidth: 0.5,
            borderRightWidth: 0.5
        }
    }

    _pressIn(){
        this.setState({
            borderBottomWidth: 0,
            borderColor: 'transparent',
            borderRadius: this.props.borderRadius,
            borderLeftWidth: 0,
            borderRightWidth: 0
        })
    }

    _pressOut(){
        this.setState({
            borderBottomWidth: this.props.shadowHeight,
            borderColor: this.props.borderColor,
            borderRadius: this.props.borderRadius,
            borderLeftWidth: 0.5,
            borderRightWidth: 0.5
        })
    }


  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        onPressIn={this._pressIn}
        onPressOut={this._pressOut}
        activeOpacity={this.props.activeOpacity}
        style={[styles.buttonContainer, this.props.containerStyle, {backgroundColor: this.props.backgroundColor, borderBottomWidth: this.state.borderBottomWidth, borderColor: this.state.borderColor, borderRadius: this.state.borderRadius, borderLeftWidth: this.state.borderLeftWidth, borderRightWidth: this.state.borderRightWidth}]}>
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
