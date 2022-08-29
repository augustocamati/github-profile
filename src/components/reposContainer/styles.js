import styled from 'styled-components'

export const Section = styled.section`
    width: 400px;
    height: 400px;
    background: rgba(255,255,255,.95);
    border-radius: 10px;
    border-bottom: 10px solid #ff7a00;
    margin-top: 15px;
    @media (max-width: 430px) {
        width: 300px;
    }

`

export const Title = styled.h1`
    height: 30px;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 700;
    color: #444;
    width: 100%;
    text-align: center;
    

`
export const ListReposContainer = styled.h1`
    width: 100%;
    height: 350px;
    overflow: scroll;
  
    padding: 10px;

`

export const Repo = styled.h2`
    width: 100%;
    height: 80px;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 10px;
   background: rgba(0,0,0,.05);


   h2{
    font-size:15px;
    width: 100%;
    overflow: hidden;
    color: #444;
   }
   p{
    font-size:12px;
    font-weight: 400;
    width: 100%;
    height: 30px;
    overflow: hidden;
    color: #777;
    line-height: 1.3;
    margin-top: 10px;
   }
    

`