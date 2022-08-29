import { React } from "react";
import {Container, Name, UserName, Description} from './styles';

export default function UserPicture(props){
    return (
        <Container>
         <Name>{props?.name}</Name>
         <UserName>{props?.username}</UserName>
         <Description>{props?.description}</Description>
        </Container>
    )
}

