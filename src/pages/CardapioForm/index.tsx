import React,{useState, FormEvent} from 'react';
import {useHistory} from 'react-router-dom';

import Input from '../../components/Input';
import PageHeader from '../../components/Page-Header';

import warningIcon from '../../assets/images/icons/warning.svg';

import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';
import './styles.css';


function TeacherForm() {
   const history = useHistory();
    const [nome_comanda,setNomeComanda] = useState(''); 


    function createComandas(e: FormEvent){
      e.preventDefault();



      api.post('comandas',{
        nome_comanda

      }).then(()=>{
        alert('Cadastro realizado com sucesso!');
        history.push('/');
      }).catch(()=>{
        alert('Erro no cadastro!')
      })

    }
    
  return (
    <div id="page-cardapio-form" className="container">
      <PageHeader 
        title="Cadastro de Pedidos"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={createComandas}>
        <fieldset>
          <legend>Comanda</legend>

            <Input name="name"label="Nome da comanda" value={nome_comanda} onChange={(e)=>{setNomeComanda(e.target.value)}} />
            
            </fieldset>

        <footer>
          <p><img src={warningIcon} alt="Aviso importante"/>Importante! <br/>Preencha todos os dados</p>
          <button type="submit">
            Salvar cadastro
          </button>
        </footer>
        </form>
      </main>

    </div>
  )
}

export default TeacherForm;