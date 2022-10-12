using CrudApplication.Context;
using CrudApplication.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Utiliza��o dos Servicos para os M�todos CREATE, READ, UPDATE, DELETE:

builder.Services.AddScoped<IAlunoServices, AlunoService>();

// Conex�o com o Banco de Dados:

builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(
    builder.Configuration.GetConnectionString("ConnectionDb")
));


var app = builder.Build();

// Utilzia��o do Cors para a Conex�o do FrontEnd com o BackEnd:

app.UseCors(options => options.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
