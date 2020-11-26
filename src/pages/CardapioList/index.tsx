import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/Page-Header';
import CardapaioItem,{ListCardapioForm} from '../../components/CardapioItem';

import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

import './styles.css';
import Select from '../../components/Select';
import api from '../../services/api';




function PedidoList() {
  const [startDate, setStartDate] = useState(null);

  
  const [numeroPedidos, setNumPedidos] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [status, setStatus] = useState('');


  async function searchTeachers(e: FormEvent){
    e.preventDefault();

 const response = await api.get('comandas',{
      params:{
      status
      }
    })
    setNumPedidos(response.data);

  }
  return (
    
    <div id="page-cardapio-list" className="container">
      <PageHeader 
        title="Lista de Pedidos"
      >
        <form id="search-cardapio" onSubmit={searchTeachers}>

        <Select 
            
            name="subject"
            label="status"
            value={status}
            onChange={e =>{setStatus(e.target.value)}}
            options={[
              {value: '0',label:'Aberto'},
              {value: '1',label:'Finalizado'}
            ]}        
            />
   
          <input className="date" id="date" type="date"/>
            
          <button type="submit">Buscar</button>      

        </form>
    
      </PageHeader>
            
      <main>
    {numeroPedidos.map((list: ListCardapioForm) =>{
          return <CardapaioItem key={list.id} list={list} />
    })}
   
       
      </main>
    </div>

    
  )
}

export default PedidoList;