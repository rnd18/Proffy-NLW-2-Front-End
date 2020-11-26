import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import CardapioForm from '../pages/CardapioForm';
import CardapioList from '../pages/CardapioList';
import PedidoCliente from '../pages/PedidoCliente';
function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/registrarPedido" exact component={CardapioForm} />
      <Route path="/Pedidos" exact component={CardapioList} />
      <Route path="/PedidosCliente" exact component={PedidoCliente} />
    </Switch>
  )
}

export default Routes;