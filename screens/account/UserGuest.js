import React from 'react'
import { StyleSheet, Text, View , ScrollView, Image} from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation} from '@react-navigation/native'

export default function UserGuest() {

    const navigation = useNavigation()

    return (
        <ScrollView
            centerContent
            style={styles.viewBody}
        >
            <Image
                source={require("../../assets/logo-kuix-largo.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil en Restaurants</Text>
            <Text style={styles.description}>¿Cómo describirías mejor a tu restaurante? Busca y visualiza los mejores restaurantes de una forma sencila, votá cual te ha gustado más y comentá cómo ha sido tu experiencia.</Text>
            <Button
                title="ver tu perfil"
                buttonStyle={styles.button}
                onPress={()=> navigation.navigate("login")}
            />

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    viewBody: {
        marginHorizontal: 30
    },

    image: {
        height:300,
        width: "100%",
        marginBottom: 10,
        alignItems: 'center',

    }, 

    title: {
        fontWeight:"bold",
        fontSize: 19,
        marginVertical: 10, 
        textAlign:"center"
    }, 

    description: {
        textAlign: "justify", 
        marginBottom: 20,
        color: "#5895e5"
    },

    button: {
        backgroundColor: "#46b38e"    }


})
