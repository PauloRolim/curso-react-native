import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

//export default function(props) {
//    return <Text>{props.Texto}</Text>
//}

export default props => //funções Arrows são mais enxutas
    <Text style={[Padrao.ex]}>Arrow: {props.Texto}</Text> 