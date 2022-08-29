import { React } from "react";
import {Container, ProfilePicture} from './styles';

export default function UserPicture(props){
    return (
        <Container>
            <ProfilePicture src={props?.url} alt={props?.altenative}/>
        </Container>
    )
}

