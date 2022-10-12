// Imports:

import React , {useEffect, useState}  from 'react';
import ModalUpdate from '../Modal/ModalUpdate';
import ModalDelete from '../Modal/ModalDelete';
import axios from 'axios';

import './Table.css';

// Código HTML: 

function Table() {

  // Requisição dos Dados Através do URL:

  const baseUrl = "http://localhost:5182/api/Alunos"; // Port Number

  // Armazenamento dos Dados:

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


  // Alteração dos Dados: 

  // Modal de Update:
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const [openModalDelete, setOpenModalDelete] = useState(false);

  return (

    <div className='tableContainer'>
        {/* Tabela de Usuários: */}
        <table>

            <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Idade</th>
                <th>RM</th>
                <th>Operações</th>
            </tr>
            </thead>

            {/* Exibição dos Dados para o Usuário: */}

            <tbody>
            {data.map((aluno, key) => (
                <tr>
                    <td data-label="Id:">{aluno.id}</td>
                    <td data-label="Nome:">{aluno.alunoNome}</td>
                    <td data-label="Email:">{aluno.alunoEmail}</td>
                    <td data-label="Idade:">{aluno.alunoIdade}</td>
                    <td data-label="RM:">{aluno.alunoRM}</td>

                    {/* Botões: */}
                    
                    <td className="last">
                        {/* Modal para Alteração */}

                        <div className='Modal'>
                            <button id='update' onClick={()=>{
                                setOpenModalUpdate(true);
                            }}>
                                Alterar Dados
                            </button>
                            {openModalUpdate && <ModalUpdate closeModalUpdate={setOpenModalUpdate}/>} 
                            <button className='btnDelete' onClick={() =>{
                                setOpenModalDelete(true);
                            }}>
                                Excluir
                            </button>
                            {openModalDelete && <ModalDelete closeModalDelete={setOpenModalDelete}/>} 
                        </div>

                    </td>

                </tr>
                ))}
            
            </tbody>

        </table>
    </div>
  )
}

export default Table