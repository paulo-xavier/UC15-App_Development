import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';




const Header = () => {


    return (

        <View style={styles.header}>
            <Feather name="user" size={20} color="black" />
            <Text>Paulo Xavier</Text>
        </View>



    )

}


const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        marginVertical: 10,
        marginHorizontal: 10
    }

    
})


export default Header;