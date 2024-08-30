import { Text, View, Image } from "react-native";

import Presentation from "../Presentation";
import { ContainerMain } from "../ContainerMain/styles";
import { Paragraph } from "../Paragraph/styles";
import { EmailButton } from "../Button";
import { ButtonText, NavItem } from "../Font/styles";

import { Feather,Fontisto } from '@expo/vector-icons/';
import { SocialMediasContainer } from "../SocialMediasContainer/styles";
import { ContainerProfile } from "../ContainerImage";


const profile = require('../../assets/profile.png');

const Main = () => {



    return (

        <ContainerMain>

                <Presentation />

                <Paragraph> From wireframing to prototyping and everything in between, the ultimate designer tool has everything you need to create stunning websites and digital experiences.</Paragraph>

                <EmailButton activeOpacity={0.5}>
                    <Fontisto name="email" size={18} color="white" /> 
                    <ButtonText> Drop me an e-mail</ButtonText>
                </EmailButton>

                <SocialMediasContainer> 
                    <Feather name="github" size={22} color="black"/>
                    <Feather name="linkedin" size={22} color="black"/>
                    <Feather name="instagram" size={22} color="black"/>
                </SocialMediasContainer>

                <ContainerProfile>

                    <Image source={profile} style={{width: 220, height: 290}}/>
                    
                </ContainerProfile>






        </ContainerMain>

    )
}


export default Main;