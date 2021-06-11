import React from 'react';

import { Image, View } from 'react-native';
import styles from './styles';

export function Profile(){
    return(
        <View style={styles.container}>

            <View>
                <Image  style={styles.header} source={require('../../images/capa.png')}/>
            </View>

            
            <View >
                <Image style={styles.profile} source={require('../../images/man.png')}/>
            </View>

        </View>
    )

}
