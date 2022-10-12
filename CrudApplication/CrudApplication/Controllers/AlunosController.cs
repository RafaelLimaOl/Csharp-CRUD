using CrudApplication.Models;
using CrudApplication.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CrudApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlunosController : ControllerBase
    {

        private IAlunoServices _alunoServices;

        public AlunosController(IAlunoServices alunoServices)
        {
            _alunoServices = alunoServices;
        }

        // Consulta de Todos os Dados:

        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Aluno>>> GetAlunos()
        {
            try
            {
                var alunos = await _alunoServices.GetAlunos();
                return Ok(alunos);
            }
            catch
            {
                return BadRequest("Request Inválido ou Houve algum problema");
            }
        }

        // Consulta dos Dados Através Nome do Aluno:

        [HttpGet("AlunoName")]

        public async Task<ActionResult<IAsyncEnumerable<Aluno>>> 
            GetAlunoByAlunoNome([FromQuery] string AlunoNome)
        {
            try
            {
                var alunos = await _alunoServices.GetAlunoByName(AlunoNome);

                if (alunos.Count() == 0)
                {
                    return NotFound($"Não Existe o nome Aluno com o seguinte Critério: {AlunoNome}");
                }
                return Ok(alunos);
            }
            catch
            {
                return BadRequest("Request Inválido ou Houve algum problema");
            }
        }

        // Consulta dos Dados Através ID do Aluno:

        [HttpGet("{Id:int}", Name = "GetAluno")]

        public async Task<ActionResult<Aluno>>
        GetAlunoByAluno(int Id)
        {
            try
            {
                var alunos = await _alunoServices.GetAluno(Id);

                if (alunos == null)
                {
                    return NotFound($"O Aluno com o ID: {Id}, Não foi encontrado");
                }
                return Ok(alunos);
            }
            catch
            {
                return BadRequest("Request Inválido ou Houve algum problema");
            }
        }

        // Método para Postar um novo Aluno:

        [HttpPost]
        public async Task<ActionResult> Create(Aluno alunos)
        {
            try
            {   
                /*
                   Há um Erro Nesta parte do Código:
                   Toda vez que é criado um novo usuário um erro 500 (Internal Server Error) acontece!
                   Descrevendo essa mensagem:
                   System.InvalidOperationException: No route matches the supplied values.

                   Mas ao selecionar a Tabela através do Método Get. O novo aluno é criado, mesmo com esse erro.
                */

                await _alunoServices.CreateAluno(alunos);
                return CreatedAtRoute(nameof(GetAlunos), new { id = alunos.Id }, alunos);
    
            }
            catch
            {
                return BadRequest("Houve algum problema em criar um Novo Aluno!");
            }
        }

        // Método para Alterar os Dados De um Aluno:

        [HttpPut("{Id:int}")]
        public async Task<ActionResult> Edit(int Id, [FromBody] Aluno aluno)
        {
            try
            {
                if (aluno.Id == Id)
                {
                    await _alunoServices.UpdateAluno(aluno);
                    return Ok($"O Aluno com o ID:{Id}, foi alterado com Sucesso!");
                }
                else
                {
                    return BadRequest("Aluno não encontrado!");
                }
            }
            catch
            {
                return BadRequest("Não foi possível Alterar os Dados");
            }
        }

        [HttpDelete("{Id:int}")]
        public async Task<ActionResult> Delete(int Id)
        {
            try
            {
                var aluno = await _alunoServices.GetAluno(Id);
                if (aluno != null)
                {
                    await _alunoServices.DeleteAluno(aluno);
                    return Ok($"O Aluno com o ID:{Id}, foi Deletado com Sucesso!");
                }
                else
                {
                    return BadRequest("Aluno não encontrado!");
                }
            }
            catch
            {
                return BadRequest("Não foi possível Deletar os Dados do Aluno");
            }
        }
    }
}
