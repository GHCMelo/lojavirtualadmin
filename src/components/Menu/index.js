import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Ul, Li } from './style'

export default function Menu(){
    return(
        <Container>
            <Ul>
                <Link to="/home"><Li>Home</Li></Link>
                <Link to="/produto"><Li>Produtos</Li></Link>
                <Link to="/categoria"><Li>Categorias</Li></Link>
                <Link to="/usuario"><Li>Usuários</Li></Link>
                <Li>Configurações</Li>
                <Li>Pedidos</Li>
            </Ul>
        </Container>
    )
}