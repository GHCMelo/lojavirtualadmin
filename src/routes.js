import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Produto from './pages/Produto';
import Categoria from './pages/Categoria';
import Usuario from './pages/Usuario';
import Home from './pages/Home';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/produto" component={Produto} />
                <Route path="/categoria" component={Categoria} />
                <Route path="/usuario" component={Usuario} />
                <Route path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}