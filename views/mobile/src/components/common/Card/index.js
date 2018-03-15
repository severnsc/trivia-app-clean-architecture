import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import styles from './styles'

export default class Card extends React.Component {
  
  static Header = CardHeader;
  static Body = CardBody;
  static Footer = CardFooter;

  render(){
    
    const { children, style } = this.props

    return(
      <View style={[styles.card, style]}>
        {children}
      </View>
    )
  }
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired
}