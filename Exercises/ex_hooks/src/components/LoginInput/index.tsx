import { Container } from "../Container";
import { ContainerInfo } from "../Info/styles";

import { Button } from "../Button";

import { Input } from "../Input";
import { useState } from "react";

import { Alert } from 'react-native'



const LoginInput = () => {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');


    const printValue = () => {
        setEmail(email);
        setpassword(password);

        console.log(email);
        console.log(password);
        
    }


    return (
    
            <Container>

                <Input 
                
                    value={email}
                    onChangeText={setEmail}
                />

                <Input 
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setpassword}
                />

                <Button>Log in</Button>

            
            </Container>
    )
}


export default LoginInput;