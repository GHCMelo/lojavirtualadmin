import React from 'react';
import { Global, Content } from '../../style';

import Menu from '../../components/Menu'


export default function Home(){

    return(
        <Global>
        <Menu />
            <Content>
                <h1>Home</h1>
            </Content>
        </Global>
    )
}