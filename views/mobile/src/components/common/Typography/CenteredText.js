import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import styles from './styles'

export default CenteredText = ({children}) => (
  <Text style={[styles.text, styles.centeredText]}>
    {children}
  </Text>
)

CenteredText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]).isRequired
}