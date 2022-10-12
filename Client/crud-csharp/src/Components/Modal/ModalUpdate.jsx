// Imports: 

import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './Modal.css';


// Código HTML:

function ModalUpdate({closeModalUpdate}) {

    // Requisição dos Dados Através do URL:
    
    const baseUrl = "http://localhost:5182/api/Alunos"; // Port Number
    
    // Seleção dos Dados: 

    const [data, setData] = useState([]);


    const infoGet = async() => {
        await axios.get(baseUrl)
        .then(response => {
          setData(response.data);
        }).catch(error =>{
          console.log(error);
        });
      };
    
      useEffect(() =>{
        infoGet();
      });

    // Armazenamento dos Dados dos INPUT's:

    const [alunoSelecionado, setAlunoSelecionado] = useState({
        Id: '',
        AlunoNome: '',
        AlunoEmail: '',
        AlunoIdade: '',
        AlunoRM: '',
    });

    const handleChanges = event =>{
        const {name, value} = event.target;
        setAlunoSelecionado({
            ...alunoSelecionado,
            [name]:value
        });
    }

    // Método para Criar um Novo Aluno:

    const putAluno = async() => {

        alunoSelecionado.AlunoIdade = parseInt(alunoSelecionado.AlunoIdade);
        alunoSelecionado.AlunoRM = parseInt(alunoSelecionado.AlunoRM);

        await axios.put(baseUrl + "/" +  alunoSelecionado.Id, alunoSelecionado)
        .then(response => {
            var resposta = response.data;
            var dados = data;
            dados.map(aluno =>{
                if(aluno.Id === alunoSelecionado.Id){
                    aluno.alunoNome = resposta.alunoNome;
                    aluno.alunoEmail = resposta.alunoEmail;
                    aluno.alunoIdade = resposta.alunoIdade;
                    aluno.alunoRM = resposta.alunoRM;
                }
            });
          setData(data.concat(response.data));
        }).catch(error =>{
          console.log(error);
        });

        //window.location.reload();
    };

  // Código HTML: 

  return (
    <div className='modalContent' id='updateModal'>
        <div className='modalContainer'>
            <button id="close" className='btnClose' onClick={()=>{
                closeModalUpdate(false)
            }}>X</button>
            <div className="title">
                <h5>Alterar Dados de um Aluno:</h5>
            </div>

            <div className="body">


                <label htmlFor="nome">ID:</label>
                <input 
                    type="text"
                    name="Id" 
                    id="nome" 
                    placeholder="ID"
                    onChange={handleChanges}
                />

                <label htmlFor="nome">Nome:</label>
                <input 
                    type="text"
                    name="AlunoNome" 
                    id="nome" 
                    placeholder="Nome do Aluno"
                    onChange={handleChanges}
                    />

                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    name="AlunoEmail" 
                    id="email" 
                    placeholder="Email do Aluno"
                    onChange={handleChanges}
                    />

                <label htmlFor="idade">Idade:</label>
                <input 
                    type="text" 
                    name="AlunoIdade"
                    id="idade" 
                    onChange={handleChanges}
                    placeholder="Idade do Aluno"
                    />

                <label htmlFor="em">RM:</label>
                <input 
                    type="text" 
                    name="AlunoRM" 
                    id="rm" 
                    placeholder="RM do Aluno"
                    onChange={handleChanges}
                    />

            </div>
            <div className="footer">
                <button id="close" onClick={()=>{
                    closeModalUpdate(false)
                    }}
                    className="cancel">
                        Cancelar
                </button>
                
                <button id="continue" onClick={putAluno}>Alterar</button>
            </div>
        </div>
    </div>
  )
};

export default ModalUpdate;