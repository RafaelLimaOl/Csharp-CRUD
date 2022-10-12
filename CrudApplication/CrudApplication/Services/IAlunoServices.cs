using CrudApplication.Models;

namespace CrudApplication.Services
{
    public interface IAlunoServices
    {
        Task<IEnumerable<Aluno>> GetAlunos();
        Task<Aluno> GetAluno(int Id);
        Task<IEnumerable<Aluno>> GetAlunoByName(string AlunoNome);
        Task CreateAluno(Aluno aluno);
        Task UpdateAluno(Aluno aluno);
        Task DeleteAluno(Aluno aluno);
    }
}
