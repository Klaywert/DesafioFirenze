import React, { useState } from 'react';

import {Image, View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import styles from './styles';

export function Profile(){
    
    // Set das entidades editáveis do sistema
    const [firstName, setFirstName] = useState('Joana');
    const [lastName, setLastName] = useState('Silva');
    const [username, setUsername] = useState('@joanasilva1');
    const [city, setCity] = useState('Campina Grande');
    const[address, setAddress] = useState('PB, Brasil');
    const [whatsapp, setWhatsapp] = useState(' 99 99999-9999');
    const [bio, setBio] = useState('');
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [added, setAdded] = useState(false);
    const [addedText, setAddedText] = useState('Add Amigo');
    const [friends, setFriends] = useState(0);

    // Funções que lidam e fazem o curtir funcionar
    const handleLike = () => {
        if (liked === false) {
            setLikes(likes+1);
            setLiked(true);

        }
        else {
            setLikes(likes-1);
            setLiked(false);
        }
    }

    const getLike = (liked) => {
        if(liked > 0 ){
            return require("../../images/activelike.png");
          }
          return require("../../images/like.png");
     }

    // Funcoes que lidam com o add e o fazem funcionar
    const handleAdd = () => {
        if (added === false) {
            setAddedText("Enviado")
            setAdded(true);
        }
        else {
            alert("Você já enviou solicitação para esta pessoa!");
        }
    }

    const sendInvite = (added) => {
        if(added > 0) {
            return require("../../images/added.png")
        }
        return require("../../images/add.png")
    }

    
    // Função extra
    const changeImage = () => {
        alert("Image Clicked!!!");
    }

    // Estrutura principal da tela de perfil do usuário, com suas características e algumas funcionalidades 
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="position" enabled>
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
                    <Text style={{fontSize: 18, fontFamily:'monospace', fontWeight: 'bold'}}>{likes}</Text>
                    <Text style={styles.regularWriting}>Likes</Text>
                </View>

                <View style={styles.friends}>
                    <Text style={{fontSize: 18, fontFamily:'monospace', fontWeight: 'bold'}}>{friends}</Text>
                    <Text style={styles.regularWriting}>Amigos</Text>
                </View>

                <TouchableOpacity style={styles.buttonAdd} activeOpacity={0.5} onPress={ handleAdd }>
                    <Image source={sendInvite(added)} style={styles.buttonAddIcon}/>
                    <Text style={styles.buttonAddText}>{addedText}</Text>
                </TouchableOpacity>

                <View style={styles.name}>
                    <Text style={styles.nameText}>{firstName}</Text>
                    <Text style={styles.nameText}>{lastName}</Text>
                </View>

                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.address}>{city}</Text>
                    <Text style={styles.address}>{address}</Text>

                <View style={styles.number}>
                    <Image style={{width: 25, height:25}} source={require('../../images/whatsapp.png') }></Image>
                    <Text style={{fontSize:17, fontStyle:'italic', fontWeight:'bold'}}>{whatsapp}</Text>
                </View>

                    <View style={{flexDirection:'row', justifyContent:"space-between",}}> 
                    <Image style={styles.aspas} source={require('../../images/abreaspas.png') }></Image> 
                    <Image style={styles.aspas} source={require('../../images/fechaaspas.png') }></Image>
                </View>

                    <TextInput style={{fontSize:20, fontFamily:'serif', fontStyle:'italic', marginTop: -20, marginLeft: 70, marginRight:70}} textAlign={'center'} multiline={true} returnKeyType={'send'} value={bio} blurOnSubmit={true} placeholder="Adicionar uma bio" onChangeText={bio => setBio(bio)}></TextInput>
            </KeyboardAvoidingView>
        </View>
    )

}
