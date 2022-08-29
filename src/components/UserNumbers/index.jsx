import { React } from "react";
import {useHistory} from 'react-router-dom'
import {Container, NumberContainer} from './styles';

export default function UserPicture(props){
    const history = useHistory()

    const handlerClick= route => history.push(route)
    return (
        <Container>
        <NumberContainer onClick={()=>handlerClick('/repos')}>
                <h1>{props.repos}</h1>
                <h2>Repositorios</h2>
        </NumberContainer>
        
        <NumberContainer onClick={()=>handlerClick('/repos')}>
        <h1>{props.followers}</h1>
                <h2>Seguidores</h2>
        </NumberContainer>
        
        <NumberContainer onClick={()=>handlerClick('/repos')}>
        <h1>{props.following}</h1>
                <h2>Seguindo</h2>
        </NumberContainer>
        
                    </Container>
    )
}

