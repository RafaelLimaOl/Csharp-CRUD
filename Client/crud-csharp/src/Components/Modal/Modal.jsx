// Imports: 

import React, {useState} from 'react';
import axios from 'axios';

import './Modal.css';


// Código HTML:

function Modal({closeModal}) {

    // Requisição dos Dados Através do URL:
    
    const baseUrl = "http://localhost:5182/api/Alunos"; // Port Number
    
    // Armazenamento dos Dados:
    
    const [data, setData] = useState([]);

    // Armazenamento dos Dados dos INPUT's:

    const [alunoSelecionado, setAlunoSelecionado] = useState({
        Id: '',
        AlunoNome: '',
        AlunoEmail: '',
        AlunoIdade: '',
        AlunoRM: '',
    })

    const handleChangesUpdate = event =>{
        const {name, value} = event.target;
        setAlunoSelecionado({
            ...alunoSelecionado,
            [name]:value
        });

    }

    // Método para Criar um Novo Aluno:

    const postAluno = async() => {

        console.log(alunoSelecionado);
        
        delete alunoSelecionado.Id;

        alunoSelecionado.AlunoIdade = parseInt(alunoSelecionado.AlunoIdade);
        alunoSelecionado.AlunoRM = parseInt(alunoSelecionado.AlunoRM);

        await axios.post(baseUrl, alunoSelecionado)
        .then(response => {
          setData(data.concat(response.data));
        }).catch(error =>{
          console.log(error);
        });

        window.location.reload();
    };

  // Código HTML: 

  return (
    <div className='modalContent' id='createModal'>
        <div className='modalContainer'>
            <button id="close" className='btnClose' onClick={()=>{
                closeModal(false)
            }}>X</button>
            <div className="title">
                <h4>Adicionar um Novo Aluno:</h4>
            </div>
            <div className="body">

                <label htmlFor="nome">Nome:</label>
                <input 
                    type="text"
                    name="AlunoNome" 
                    id="nome" 
                    placeholder="Nome do Aluno"
                    onChange={handleChangesUpdate}/>

                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    name="AlunoEmail" 
                    id="email" 
                    placeholder="Email do Aluno"
                    onChange={handleChangesUpdate}/>

                <label htmlFor="idade">Idade:</label>
                <input 
                    type="text" 
                    name="AlunoIdade"
                    id="idade" 
                    placeholder="Idade do Aluno"
                    onChange={handleChangesUpdate}/>

                <label htmlFor="em">RM:</label>
                <input 
                    type="text" 
                    name="AlunoRM" 
                    id="rm" 
                    placeholder="RM do Aluno"
                    onChange={handleChangesUpdate}/>

            </div>
            <div className="footer">
                <button id="close" onClick={()=>{
                    closeModal(false)
                    }}
                    className="cancel">
                        Cancelar
                </button>
                
                <button id="continue" onClick={ () => postAluno()}>Continuar</button>
            </div>
        </div>
    </div>
  )
};

export default Modal;