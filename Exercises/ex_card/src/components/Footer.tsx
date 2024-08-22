
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';




const Footer = () => {


    return (
        <View style={stlyes.container}>
            
            <View style={stlyes.wrapper}> 

                <TouchableOpacity>
                    <Feather name="heart" size={22} color="black"/>
                </TouchableOpacity>


                <Feather name="message-circle" size={22} color="black"/>
                <Feather name="send" size={22} color="black"/>
                
            </View>

            <Feather name="bookmark" size={22} color="black" />
            
        </View>
    )
}


const stlyes = StyleSheet.create({
    container: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        cursor: 'pointer'

        
    },

    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 17
    },

    featherComponent: {
        marginVertical: 6
    }
})

export default Footer;