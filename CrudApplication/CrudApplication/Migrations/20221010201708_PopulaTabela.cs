using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CrudApplication.Migrations
{
    public partial class PopulaTabela : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Alunos",
                columns: new[] { "Id", "AlunoEmail", "AlunoIdade", "AlunoNome", "AlunoRM" },
                values: new object[] { 1, "fulano@gmail.com", 22, "Fulano da Silva", 22156 });

            migrationBuilder.InsertData(
                table: "Alunos",
                columns: new[] { "Id", "AlunoEmail", "AlunoIdade", "AlunoNome", "AlunoRM" },
                values: new object[] { 2, "mariazinha@gmail.com", 23, "Mariazinha", 12321 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Alunos",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Alunos",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
