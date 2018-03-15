import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default Button = ({onPress, title, disabled}) => (
  <TouchableOpacity disabled={disabled || false} onPress={onPress} style={styles.button}>
    <Text style={styles.buttonTitle}>{title}</Text>
  </TouchableOpacity>
)

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}