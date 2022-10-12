// Imports: 

import React, {useState} from 'react';
import axios from 'axios';

import './Modal.css';
import { useEffect } from 'react';


// Código HTML:

function ModalDelete({closeModalDelete}) {

    // Requisição dos Dados Através do URL:
    
    const baseUrl = "http://localhost:5182/api/Alunos"; // Port Number
    
    // Armazenamento dos Dados:
    
    const [data, setData] = useState([]);
    // Armazenamento dos Dados dos INPUT's:

    const [alunoSelecionado, setAlunoSelecionado] = useState({
        Id: '',
        AlunoRM: ''
    })

    const handleChangesDelete = event =>{
        const {name, value} = event.target;
        setAlunoSelecionado({
            ...alunoSelecionado,
            [name]:value
        });
    }

    // Método para Criar um Novo Aluno:

    const deleteAluno = async() => {

        console.log(alunoSelecionado.Id);

        await axios.delete(baseUrl + "/"+ alunoSelecionado.Id)
        .then(response => {
          setData(data.filter(aluno => aluno.Id !== response));
          closeModalDelete();
        }).catch(error =>{
          console.log(error);
        });

    };

  // Código HTML: 

  return (
    <div className='modalContent' id='deleteModal'>
        <div className='modalContainer'>
            <button id="close" className='btnClose' onClick={()=>{
                closeModalDelete(false)
            }}>X</button>
            <div className="title">
                <h4>Deseja Excluir Esse Aluno?</h4>
            </div>

            <div className="body">
                <label htmlFor="id">ID</label>
                <input type="number" name="Id" id='id' placeholder='Digite o ID do Aluno:' onChange={handleChangesDelete}/>

                <label htmlFor="rm">RM do Aluno</label>
                <input type="text" name="AlunoRM" id='rm' placeholder='Digite o RM do Aluno:' onChange={handleChangesDelete}/>
            </div>
            <div className="footer">
                <button id="close" onClick={()=>{
                    closeModalDelete(false)
                    }}
                    className="cancel">
                        Cancelar
                </button>
                
                <button id="continue" onClick={deleteAluno}>Excluir</button>
            </div>
        </div>
    </div>
  )
};

export default ModalDelete;