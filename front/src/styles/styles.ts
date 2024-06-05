import styled from 'styled-components';


export const Conteiner = styled.div`
display: flex;
height: 100vh;
max-width: 100vw;
align-items: center;
border-top: 50px solid green;
border-left:50px solid red;
border-right: 50px solid blue;
border-bottom: 50px solid yellow;
    div{
        display: flex;
        align-items: stretch;
        align-content: center;
        flex-direction: column;
        margin: 0 auto;
        width: 50%;
        gap: 10px;
        h2{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 15px;
            padding: 0px;
            margin: 0px;
            color: gray;
        }
        select{
            margin-top: 5px;
            color: gray;
            padding: 15px;
            border-radius: 5px;
            border: solid 2px gray;
            border-color: gray;
            &:focus {
                border-color: orange;
            }
        }
       
}

`