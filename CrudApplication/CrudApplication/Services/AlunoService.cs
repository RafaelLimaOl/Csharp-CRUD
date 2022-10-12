using CrudApplication.Context;
using CrudApplication.Models;
using Microsoft.EntityFrameworkCore;

namespace CrudApplication.Services
{
    public class AlunoService : IAlunoServices
    {

        private readonly AppDbContext _context;
        public AlunoService(AppDbContext context)
        {
            _context = context;
        }

        // Método para Selecionar o Aluno:
        public async Task<IEnumerable<Aluno>> GetAlunos()
        {
            try
            {
                return await _context.Aluno.ToListAsync();
            }
            catch
            {
                throw;
            }
        }

        // Retorno De alunos pelo ID:

        public async Task<Aluno> GetAluno(int Id)
        {

            var aluno = await _context.Aluno.FindAsync(Id);
            return aluno;

        }

        // Retorno de Alunos pelo Nome:

        public async Task<IEnumerable<Aluno>> GetAlunoByName(string AlunoNome)
        {
            IEnumerable<Aluno> alunos;

            if (!string.IsNullOrWhiteSpace(AlunoNome))
            {
                alunos = await _context.Aluno.Where(x => x.AlunoNome.Contains(AlunoNome)).ToListAsync();
            }
            else{
                alunos = await GetAlunos();
            }
            return alunos;
        }


        // Método CREATE(Criar):

        public async Task CreateAluno(Aluno aluno)
        {
            _context.Aluno.Add(aluno);
            await _context.SaveChangesAsync();
        }

        // Método UPDATE(Atualizar):

        public async Task UpdateAluno(Aluno aluno)
        {
            _context.Entry(aluno).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        // Método DELETE(Deletar):

        public async Task DeleteAluno(Aluno aluno)
        {
            _context.Aluno.Remove(aluno);
            await _context.SaveChangesAsync();
        }
    }
}
