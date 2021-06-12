import React, { useState } from 'react';

import {Image, View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

export function Profile(){
    
    // Set das entidades editáveis do sistema
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [friends, setFriends] = useState(0);

    // Funções que lidam e fazer o curtir funcionar
    const handleLike = () => {
        if (liked === false) {
            setLikes(likes+1),
            setLiked(true)

        }
        else {
            setLikes(likes-1)
            setLiked(false)
        }
    }

    const getLike = (liked) => {
        if(liked > 0 ){
            return require("../../images/activelike.png")
          }
          return require("../../images/like.png")
     }

    
    // Função extra
    const changeImage = () => {
        alert("Image Clicked!!!");
    }

    // Estrutura principal da tela de perfil do usuário, com suas características e algumas funcionalidades 
    return(
        <View style={styles.container}>

             <TouchableOpacity activeOpacity= {.5} onPress={ changeImage }>
                 <Image  style={styles.cover} source={require('../../images/capa.png')}/>
            </TouchableOpacity>   

            <View style={styles.header}> 
                <TouchableOpacity activeOpacity= {.5} onPress={ changeImage }>
                    <Image style={styles.profile} source={require('../../images/man.png')}/>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity= {.5} onPress={ handleLike }>
                    <Image style={styles.like} source={getLike(liked)}/>
                </TouchableOpacity>
            </View>
            <View style={styles.likes} >
                 <Text style={styles.regularWriting}>{likes}</Text>
                 <Text style={styles.regularWriting}>Likes</Text>
            </View>
            <View style={styles.friends}>
                <Text style={styles.regularWriting}>{friends}</Text>
                <Text style={styles.regularWriting}>Amigos</Text>
            </View> 
 
        </View>
    )

}
