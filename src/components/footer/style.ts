import styled from "styled-components";

export const Container = styled.div`
    padding: 25px 0;
    border-bottom: 1px solid #16195C;
    display: flex;
    align-items: center;
`;

export const Cabecalho = styled.div`
    display: flex;
    align-items: center;
    h1{
        margin: 0;
        padding: 0;
        font-size: 28px;
        color: #751F5D;
    }

    p{
        font-size: 14px;
        color: #8D0B3F;
        display:block;
    }
    .flex_img{
        padding-right: 20px;
        padding-bottom: 20px;
        display:flex;
    }
    .flex{
        display:flex;
    }
`