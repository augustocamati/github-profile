import Container from '../components/container';
import React , {useContext}from 'react'
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from '../components/UserPicture'
import UserDetail from '../components/UserDetail'
import UserNumber from '../components/UserNumbers'

import { context } from '../context';
export default function Home() {

    const ctx= useContext(context)
    return (
        <Container>
            <Header />
            <UserContainer>
                {
                    ctx.userData?.name?
                    <React.Fragment>
                    <UserPicture url={ctx.userData?.avatar_url} altenative='image'/>
                    <UserDetail name={ctx.userData.name} username={`#${ctx.userData?.login}`} description= {ctx.userData?.bio}/>
                    <UserNumber repos={ctx.userData.public_repos} followers={ctx.userData.followers}  following={ctx.userData.following} />
                    </React.Fragment>
                    :undefined
                }
            </UserContainer>
        </Container>
    );
}