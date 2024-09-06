import { Container } from "../Container";
import { ContainerInfo } from "../Info/styles";

import { Button } from "../Button";

import { TextInput, Text, TouchableOpacity } from "react-native";
import { Input } from "../Input";



const LoginInput = () => {

    return (
    
            <Container>

                <Input 
                    placeholder="Enter your email" 
                    showSoftInputOnFocus={false}
                    selectTextOnFocus={false}
                    autoFocus={false}
                    maxLength={20}
                />

                <Input 
                    placeholder="Enter your password"
                />

                <Button>Log in</Button>

                

            </Container>
    

    )
}


export default LoginInput;