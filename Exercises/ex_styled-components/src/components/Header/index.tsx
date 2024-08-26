
import { TouchableOpacity, View } from "react-native"
import { ContainerHeader, NavBar } from "./styles";
import { NavItem } from "../Font/styles";





const Header = () => {


    
    return (
        
        <ContainerHeader>

            <NavBar>
                <NavItem> Home </NavItem>
                <NavItem> About me </NavItem>
                <NavItem> My stack </NavItem>
            </NavBar>
            
        </ContainerHeader>
        
    )


}



export default Header;