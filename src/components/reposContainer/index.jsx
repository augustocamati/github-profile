import React from 'react'
import {
    Title,
    ListReposContainer,
    Repo
} from './styles'
export default function ReposContainer(props) {
  return (
    <section>
        <Title>Repositorios de {(props.name)?.split(' ')[0]}</Title>
        <ListReposContainer>
            {
                (props?.repos).map(repo => {
                   return <Repo>
                        <h2>{repo?.name}</h2>
                        <p>{repo?.description}</p>

                    </Repo>
                })
            }
        </ListReposContainer>
    </section>
  )
}
