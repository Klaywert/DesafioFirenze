import { StyleSheet } from "react-native";
import styled from "styled-components";

// Estilização dos componentes da página de perfil
const styles = StyleSheet.create({
     container: {
         flex: 1,
     },

     cover: {
         resizeMode: "cover",
         width: 500,
         height: 250
     },

     header: {
        flexDirection:'row',
        flexWrap: 'wrap'
        

     },

     profile: {
         marginTop: -60,
         marginStart: 20,
         width: 150,
         height: 150,
         borderColor: 'white', 
         borderWidth: 5,
         borderRadius: 150 / 2,
         overflow: "hidden",
     },

     like: {
        marginTop: -45,
        marginStart: 120,
        width: 85,
        height: 85,
        borderColor: 'white', 
        borderWidth: 3,
        borderRadius: 150/2 ,
        overflow: "hidden", 
        backgroundColor:'white'

     },

     likes: {
        fontWeight:"bold",
        fontSize: 10,
        alignItems: "center",
        marginTop: -35,
        marginStart:100,
     },

     friends: {
        alignItems: "center",
        marginTop: -40,
        marginStart: 270,

    },

    regularWriting: {
        fontSize: 16,
        fontWeight: 'bold',
    }

});
  
  export default styles;
