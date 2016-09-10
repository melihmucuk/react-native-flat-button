import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  buttonContainer: {
      borderRadius: 8,
      borderBottomWidth: 4,
      borderLeftWidth: 0.5,
      borderRightWidth: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
  },
  text:{
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
  }
})

export const buttonStyles = {
  info: {
    backgroundColor: '#f1c40f',
    borderColor: '#f39c12',
  },
  negative: {
    backgroundColor: '#e74c3c',
    borderColor: '#c0392b',
  },
  neutral: {
    backgroundColor: '#95a5a6',
    borderColor: '#7f8c8d',
  },
  positive: {
    backgroundColor: '#2ecc71',
    borderColor: '#27ae60',
  },
  primary: {
    backgroundColor: '#3498db',
    borderColor: '#2980b9',
  },
  warn: {
    backgroundColor: '#e67e22',
    borderColor: '#d35400',
  }
}
