import React from 'react'
import { Text } from 'react-native'

//export default function(props) {
//    return <Text>{props.Texto}</Text>
//}

export default props => //funções Arrows são mais enxutas
    <Text>Arrow: {props.Texto}</Text> 