

import { StyleSheet, View } from 'react-native';

import Footer from "../components/Footer";
import Header from "../components/Header"
import Main from "../components/Main";

import { SafeAreaView, Text } from "react-native";

interface Props {
    url: string
}


const Card = ({url}: Props) => {


    return (

        <SafeAreaView>

            <View style={styles.home}>
                <Header />
                <Main url={"https://picsum.photos/200"}/>
                <Footer />
            </View>

        </SafeAreaView>
        
        

    )


}


const styles = StyleSheet.create({
    home: {
        // backgroundColor: 'darkgray',
        // width: '100%'
        marginVertical: '10%',
        paddingVertical: 10,

        borderTopLeftRadius: 15, 
        borderTopRightRadius: 15, 
        borderBottomLeftRadius: 15, 
        borderBottomRightRadius: 15,

    }
})


export default Card;