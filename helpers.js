import { buttonStyles } from './styles'

let defaultStyle = {}
let pressInStyle = {
  borderColor: 'transparent',
  borderBottomWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0
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
