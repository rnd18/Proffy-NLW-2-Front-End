import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo2.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import api from '../../services/api';
import './styles.css';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);
  useEffect(()=>{
    api.get('pedidos').then(response =>{
      const {total} = response.data;
      setTotalConnections(total);
    })
  },[])
  

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Restaurante"/>
          <h2>Sua plataforma de pedidos online.</h2>
        </div>
        <div className="buttons-container">
          <Link to="/registrarPedido" className="registrar-pedido">
            <img src={giveClassesIcon} alt="Registrar"/>
            Registrar
          </Link>

          <Link to="/Pedidos" className="pedidos">
            <img src={studyIcon} alt="Pedidos"/>
            Pedidos
          </Link>
        </div>
        <span className="total-connections">
          Total de {totalConnections} pedidos já realizados! 
        </span>
      </div>
    </div>
  );
}

export default Landing;