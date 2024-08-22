import { Image, StyleSheet } from "react-native";

interface Props {
    url: string
}

const Main = ({url}:Props) => {

    return (
        <>
            <Image 
                source={{uri: url}}
                style={styles.img}
            />
        </>
    )
}


const styles = StyleSheet.create({
    img: {
        width: 300,
        height: 300
    }
})




export default Main;   