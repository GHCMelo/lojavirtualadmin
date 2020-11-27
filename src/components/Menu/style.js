import styled from 'styled-components'

export const Container = styled.div`
    background: #068057;
    width: 280px;
    height: 100vh
`;

export const Ul = styled.ul `
    padding: 10px;
`

export const Li = styled.li `
    padding: 10px;
    margin: 5px 0;
    border-radius: 10px;
    cursor: pointer;
    color: #FFF;

    &:hover{
        background: #FFF;
        color: #000
    }
`
