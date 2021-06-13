import { StyleSheet } from "react-native";

// Estilização dos componentes da página de perfil
const styles = StyleSheet.create({
     container: {
         flex: 1,
     },

     // foto de capa
     cover: {
         resizeMode: "cover",
         width: 500,
         height: 250
     },

    // container com foto de perfil e like
     header: {
        flexDirection:'row',
        flexWrap: 'wrap'
        

     },

    // foto de perfil
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

     // botao de like
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

     // contador de likes
     likes: {
        fontWeight:"bold",
        fontSize: 12,
        alignItems: "center",
        marginTop: -42,
        marginStart:65,
     },

     // contador de amigos
     friends: {
        alignItems: "center",
        marginTop: -42,
        marginStart: 260,

    },

    // escrita comum da página
    regularWriting: {
        fontSize: 16,
        fontFamily:'monospace',
        color: "#5c5d66"
    },

    buttonAdd: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#441d92',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        width: 180,
        borderRadius: 5,
        margin: 10,
        marginStart: 188
      },

    buttonAddIcon: {
        margin: 12,
        height: 25,
        width: 25,
        resizeMode:"cover",
      },

    buttonAddText: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 4,
        marginLeft: 8,
        fontFamily: 'monospace'
      },

    name: {
       alignItems:"flex-start",
       marginTop: -70,
       marginStart: 25,
    },

    nameText: {
        fontSize: 38,
        lineHeight: 50,
        fontFamily:'serif',
        fontWeight:'bold'
    },

    username: {
        fontSize: 14,
        color: '#5c18e4',
        fontFamily:'serif',
        marginStart: 25,
        lineHeight: 45,
        fontWeight:'bold'
    },

    address: {
        fontSize: 16,
        color: 'black',
        fontFamily:'serif',
        marginStart: 25,
        lineHeight: 20,
        fontStyle:'italic',
    },

    number: {
        flexDirection:'row',
        marginStart: 200,
        marginTop: -70,
    },

    aspas: {
        width: 20,
        height: 20,
        marginTop: 100,
        marginLeft: 25,
        marginRight: 25

    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        flexDirection:'row'
      },

});
  
  export default styles;
