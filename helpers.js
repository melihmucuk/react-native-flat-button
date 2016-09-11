import { buttonStyles } from './styles'

let defaultStyle = {}

let pressInStyle = {
  borderColor: 'transparent',
  borderBottomWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0
}

export const getDefaultStyle = (type, props) => {
  switch (type) {
    case "custom":
      defaultStyle = {
        borderRadius: props.borderRadius,
        borderBottomWidth: props.shadowHeight,
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
        borderLeftWidth: props.borderLeftWidth,
        borderRightWidth: props.borderRightWidth
      }
      return defaultStyle
    case "primary":
      defaultStyle = buttonStyles.primary
      return defaultStyle
    case "neutral":
      defaultStyle = buttonStyles.neutral
      return defaultStyle
    case "warn":
      defaultStyle = buttonStyles.warn
      return defaultStyle
    case "negative":
      defaultStyle = buttonStyles.negative
      return defaultStyle
    case "positive":
      defaultStyle = buttonStyles.positive
      return defaultStyle
    case "info":
      defaultStyle = buttonStyles.info
      return defaultStyle
    default:
      defaultStyle = buttonStyles.primary
      return defaultStyle
  }
}

export const getPressInStyle = (type, backgroundColor, borderRadius) => {
  switch (type) {
    case "custom":
      pressInStyle.backgroundColor = backgroundColor
      pressInStyle.borderRadius = borderRadius
      return pressInStyle
    case "info":
      pressInStyle.backgroundColor = buttonStyles.info.backgroundColor
      return pressInStyle
    case "negative":
      pressInStyle.backgroundColor = buttonStyles.negative.backgroundColor
      return pressInStyle
    case "neutral":
      pressInStyle.backgroundColor = buttonStyles.neutral.backgroundColor
      return pressInStyle
    case "positive":
      pressInStyle.backgroundColor = buttonStyles.positive.backgroundColor
      return pressInStyle
    case "primary":
      pressInStyle.backgroundColor = buttonStyles.primary.backgroundColor
      return pressInStyle
    case "warn":
      pressInStyle.backgroundColor = buttonStyles.warn.backgroundColor
      return pressInStyle
    default:
      pressInStyle.backgroundColor = buttonStyles.primary.backgroundColor
      return pressInStyle
  }
}
