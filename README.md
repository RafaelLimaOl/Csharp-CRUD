# <h1 align="center">🔗 C# CRUD</h1>

<p align="center">Um projeto CRUD utilizando C# para o BackEnd e React para o FrontEnd!</p>

# Tópicos:

<p align="center">
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#pre_req">Pré-Requisitos</a> • 
 <a href="#licenca">Licença</a> •
 <a href="#screen">Screen Shots</a> •
 <a href="#status">Status do Projeto</a> 
</p>

<h1 align="center" id="tecnologias"> 💻 Tecnologias Utilizadas: </h1>

<img src="https://img.shields.io/static/v1?label=React&message=FrontEnd&color=61DAFB&style=for-the-badge&logo=ghost"/> <img src="https://img.shields.io/static/v1?label=Node.JS&message=Packets Manege&color=339933&style=for-the-badge&logo=ghost"/> <img src="https://img.shields.io/static/v1?label=Axios&message=HTTP Request&color=5A29E4&style=for-the-badge&logo=ghost"/> <img src="https://img.shields.io/static/v1?label=C Sharp&message=BakEnd&color=239120&style=for-the-badge&logo=ghost"/> <img src="https://img.shields.io/static/v1?label=.NET&message=FrameWord&color=512BD4&style=for-the-badge&logo=ghost"/>  <img src="https://img.shields.io/static/v1?label=SQL server&message=Banco de Dados&color=CC2927&style=for-the-badge&logo=ghost"/> 

- React: Para a parte visual do Site,  
- Node.JS: Para a instalação de Dependências do projeto, 
- Axios:  Para as requisições HTTP, 
- C# : Para a criação do FrontEnd,
- .Net: C# FrameWork,
- SQL server: Banco de Dados

<h1 align="center" id="pre_req">⚠Pré - Requisitos⚠</h1>
<p align="center">Para executar esse projeto é necessário ter as Seguintes Ferramentas Instaladas: </p>

 <span align="center"><a href="https://nodejs.org/en/download/">Node.JS</a></span>
 <p>E um editor de código da sua preferência</p>

```bash

# Com o seu editor de código aberto, abra o terminal e Digite o seguinte comando:
$ git clone https://github.com/RafaelLimaOl/Csharp-CRUD.git

# Entre na paste correspondente ao FrontEnd:
$ cd Client
$ cd crud-csharp

# Instale as dependências do Node:
$ npm install

# Por fim execute a aplicação:
$ npm start

```
<p>Por padrão o localhost terá o porte 3000 por tanto a aplicação ficará no seguinte <a href="http://localhost:3000">Endereço</a></p>

<p>Execução do BackEnd</p>
<p>Caso o seu editor de código consiga executar entre na pasta correspondente ao BankEnd</p>

``` bash

# Exemplo Visual Studio Code com .NET
$ cd CrudApplication
$ dotnet run

```

<p>Caso o editor de código não consiga executar. Baixe o Visual Studio</p>

<p>Com a aplicação Aberta no Visual Studio</p>
<p>Abra o arquivo appsettings.json</p>
<p>Insira o caminho para a conexão do Banco de Dados:</p>

```
  "ConnectionStrings": {
    "ConnectionDb": "Server=*O nome da Conexão presente no SQL Server*; Database=*Nome do Banco de Dados*; Trusted_Connectio=True; ",
    // No campo DataBase aconselhável utilizar o nome AlunoDb
  }
```

<p>Execute a o seguinte comando no Terminal</p>

```
Update-Database
```

<h1 align="center" id="licenca">License</h1>
<a href="https://github.com/RafaelLimaOl/Csharp-CRUD/blob/main/LICENSE.md"><img src="https://img.shields.io/static/v1?label=LICENSE&message=Link &color=5A29E4&style=for-the-badge&logo=ghost"/></a>


<h1 id="screen">Screen Shots</h1>

- Tela Principal

![screenshot01](https://user-images.githubusercontent.com/115644899/195409464-54c58e5a-b21b-47e9-91d6-39fba296bd68.png)

- Mobile Screen::

![screenshot02](https://user-images.githubusercontent.com/115644899/195409843-cbb0dd0d-6b56-460f-a7d5-a2f624045ab7.png)

<h1>Modais</h1>

- Criar Aluno:

![screenshot04](https://user-images.githubusercontent.com/115644899/195410159-d77cbd91-b5e7-499c-b89d-e9e1ee32be5e.png)

- Editar Aluno:

![screenshot03](https://user-images.githubusercontent.com/115644899/195410128-aaa5bcfb-8824-4213-a3fd-a95408bc85ac.png)

- Deletar

![screenshot05](https://user-images.githubusercontent.com/115644899/195410184-758b7d00-28c4-4619-8c8b-b3e0369a2d53.png)

<h2 align="center" id="status">🛠Projeto Finalizado🛠</h2>
