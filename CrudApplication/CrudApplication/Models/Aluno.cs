using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CrudApplication.Models
{

    [Table("Alunos")]
    public class Aluno
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string AlunoNome { get; set; } = String.Empty;

        [Required]
        [EmailAddress]
        [MaxLength(50)]
        public string AlunoEmail { get; set; } = String.Empty;

        [Required]
        public int AlunoIdade { get; set; }

        [Required]
        public int AlunoRM { get; set; }


    }
}
