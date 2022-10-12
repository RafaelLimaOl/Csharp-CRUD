using CrudApplication.Models;
using Microsoft.EntityFrameworkCore;

namespace CrudApplication.Context
{
    public class AppDbContext : DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        
        { }

        public DbSet<Aluno> Aluno { get; set; }

        // Inserção Manual de Dados:

        /*
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Aluno>().HasData(
                new Aluno
                {
                    Id = 1,
                    AlunoNome = "Fulano da Silva",
                    AlunoEmail = "fulano@gmail.com",
                    AlunoIdade = 22,
                    AlunoRM = 22156
                },
                new Aluno
                {
                    Id = 2,
                    AlunoNome = "Mariazinha",
                    AlunoEmail = "mariazinha@gmail.com",
                    AlunoIdade = 23,
                    AlunoRM = 12321
                }
            );
        }
        */
    }
}
