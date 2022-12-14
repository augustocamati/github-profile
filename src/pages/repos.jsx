import React, { useContext } from 'react'
import { context } from '../context'
import Container from '../components/container';

import ReposContainer from '../components/reposContainer'

  const Repos = () => {
    const ctx= useContext(context)
  return (
    <Container>
        <ReposContainer name={ctx.userData?.name} repos={ctx?.repos}/> 
    </Container>
  )
}

export default  Repos