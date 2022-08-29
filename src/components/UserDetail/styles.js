import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
   
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Name = styled.h1`
    width: 100%;
    text-align: center;
    color: #777;
    font-size: 20px;
    font-weight: 700;
    padding: 5px;
`;

export const UserName = styled.h2`
    width: 100%;
    height: 30px;
    text-align: center;
    color: #777;
    font-size: 13px;
   padding: 5px;
   font-weight: 500;

`;

export const Description = styled.p`
   width: 300px;
    
    margin: 10px 0;
    text-align: justify;
    color: #777;
    font-size: 12px;
    line-height: 1.2;
    overflow: hidden;

    @media (max-width: 430px) {
        width: 250px;
        
    }
`;
