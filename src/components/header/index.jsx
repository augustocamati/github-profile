import { FiSearch } from 'react-icons/fi';
import { React, useContext, useState } from 'react'

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';
import api from '../../services/client';
import { context } from '../../context';

const Header = () =>{ 
    const [searchedValue, setSearchedValue] = useState('')

    const ctx = useContext(context)
    async function getDataFromGithub(){
        try{
            const response = await api.get(`/${searchedValue}`)
            const repos = await api.get(`/${searchedValue}/repos`)
            ctx.setUserData(response.data)
            ctx.setRepos(repos.data)
        }
        catch(er){
            console.log(er)
        }
    }
    return(
    <HeaderSection>
        <HeaderTitle>Github Profile</HeaderTitle>
        <HeaderInputContainer>
            <HeaderInput value={searchedValue} onChange={ e => setSearchedValue(e.target.value) }/>
            
            <HeaderSearchButton onClick={()=> getDataFromGithub()}>
                <FiSearch size={15} />
            </HeaderSearchButton>
        </HeaderInputContainer>
    </HeaderSection>
)}  

export default Header;
