import React, { useState, FormEvent } from 'react';
  import PageHeader from '../../components/Page-Header';

  import './styles.css';



  function pedidoList() {

    return (
      <div id="page-cardapio-list" className="container">
        <PageHeader 
          title="Pedido: 2"
        >
        </PageHeader>
      </div>
    )
  }

  export default pedidoList;