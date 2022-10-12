// Imports: 

import React, {useState} from 'react';

import Table from './Components/Tables/Table';
import Modal from './Components/Modal/Modal';
import './App.css';

function App() {

  // Modal: 

  const [openModal, setOpenModal] = useState(false);

  // Código HTML:

  return (

    <div className="App">

      <div className="App-header">

        <h1>Cadastro de aluno: </h1>

       {/* Modal React.js */}
        <div className='Modal'>
          <button id="adicionar" onClick={()=>{
            setOpenModal(true);
          }}>
            Adicionar um Novo Aluno
          </button>
          {openModal && <Modal closeModal={setOpenModal}/>}
          
        </div>
        <Table/>
      </div>

      
    </div>
  );
}

export default App;
