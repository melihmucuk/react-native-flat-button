import React, { Component, PropTypes } from 'react';
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
        backgroundColor: React.PropTypes.string.isRequired,
        borderColor: React.PropTypes.string.isRequired,
        borderRadius: React.PropTypes.number,
        shadowHeight: React.PropTypes.number,
        activeOpacity: React.PropTypes.number,
        containerStyle: View.propTypes.style,
        contentStyle: Text.propTypes.style
    }

    static defaultProps = {
        borderRadius: 8,
        shadowHeight: 4,
        activeOpacity: 0.9
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
        onPress={() => console.log("onPress")}
        onPressIn={this._pressIn}
        onPressOut={this._pressOut}
        activeOpacity={this.props.activeOpacity}
        style={[styles.buttonContainer, this.props.containerStyle, {borderBottomWidth: this.state.borderBottomWidth, borderColor: this.state.borderColor, borderRadius: this.state.borderRadius, borderLeftWidth: this.state.borderLeftWidth, borderRightWidth: this.state.borderRightWidth}]}>
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
      width: 150,
      height: 50,
      backgroundColor: '#1abc9c',
      paddingVertical: 10,
      paddingHorizontal: 20
  },
  text:{
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
  }
});

export default Button;
