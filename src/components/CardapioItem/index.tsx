  import React from 'react';
  import logo2 from '../../assets/images/logo2.svg'

  import './styles.css';
  import api from '../../services/api';
  import { Link } from 'react-router-dom';


  export interface ListCardapioForm {
    id: number;
    nome_comanda: number;
    status: number;
    hora_pedido: number;
  }
  interface ComandaItemsProps{
    list: ListCardapioForm;
  }



  const CardapioItem: React.FC<ComandaItemsProps> = ({ list }) => {
    function FinalizarPedido(){
      api.get('cardapio',{
        
      })
    }

    
    return (
      <article className="cardapio-item">
        <header>
        <img src={logo2} alt=""/>
          <div>
              <strong>Nome Comanda: {list.nome_comanda}</strong>
    
         
         
         
  
            <span>Horário: {list.hora_pedido}</span>
            {list.status == 0 ? <span>Status: Aberto</span> : <span>Status: Finalizado</span> }
      
        </div>
          </header>
          <footer>
            <strong>Observações: </strong>
          <Link to="/PedidosCliente" className="give-classes"> 
          <a target="_blank">
            Finalizar Pedido
          </a>
          </Link>
        </footer>
      </article>
    )
  }

  export default CardapioItem;