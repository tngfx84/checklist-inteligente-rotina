using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    // ✅ Lista de tarefas (List + tipagem forte)
    static List<Tarefa> tarefas = new List<Tarefa>
    {
        new Tarefa("manha-01", "Café da manhã + água", "p1"),
        new Tarefa("manha-02", "Treino rápido (20 min)", "p1"),
        new Tarefa("tarde-01", "Enviar relatório", "p1"),
        new Tarefa("noite-01", "Preparar o dia seguinte", "p2")
    };

    // ✅ Dicionário (Dictionary + List<int>) — avaliações por tarefa
    static Dictionary<string, List<int>> avaliacoesPorTarefa = new Dictionary<string, List<int>>();

    static void Main()
    {
        ExibirTitulo();

        while (true)
        {
            ExibirMenu();

            Console.Write("\nEscolha uma opção: ");
            string? opcao = Console.ReadLine();

            switch (opcao)
            {
                case "1":
                    Console.Clear();
                    ExibirTitulo();

                    Console.WriteLine("📋 Lista de tarefas:\n");

                    foreach (var tarefa in tarefas)
                    {
                        Console.WriteLine($"- {tarefa.Id} | [{tarefa.Status}] {tarefa.Titulo} ({tarefa.Prioridade})");
                    }

                    Console.WriteLine();
                    Pausar();
                    break;

                case "2":
                    Console.Clear();
                    ExibirTitulo();

                    Console.WriteLine("✅ Marcar tarefa como feita\n");

                    foreach (var tarefa in tarefas)
                    {
                        Console.WriteLine($"{tarefa.Id} - {tarefa.Titulo} [{tarefa.Status}]");
                    }

                    Console.Write("\nID: ");
                    string? idEscolhido = Console.ReadLine();

                    var tarefaEncontrada = tarefas.FirstOrDefault(t => t.Id == idEscolhido);

                    if (tarefaEncontrada != null)
                    {
                        tarefaEncontrada.Status = "feita";
                        Console.WriteLine($"\n✅ Tarefa '{tarefaEncontrada.Titulo}' marcada como feita!");
                    }
                    else
                    {
                        Console.WriteLine("\n❌ Tarefa não encontrada.");
                    }

                    Console.WriteLine();
                    Pausar();
                    break;

                case "3":
                    Console.Clear();
                    ExibirTitulo();

                    int total = tarefas.Count;
                    int feitas = tarefas.Count(t => t.Status == "feita");
                    int criticasEmAberto = tarefas.Count(t => t.Prioridade == "p1" && t.Status != "feita");

                    int progresso = total == 0 ? 0 : (int)Math.Round((double)feitas / total * 100);

                    Console.WriteLine("📊 Resumo do dia:\n");
                    Console.WriteLine($"Total: {total}");
                    Console.WriteLine($"Concluídas: {feitas}");
                    Console.WriteLine($"Críticas em aberto: {criticasEmAberto}");
                    Console.WriteLine($"Progresso: {progresso}%");

                    Console.WriteLine();
                    Pausar();
                    break;

                case "4":
                    Console.Clear();
                    ExibirTitulo();

                    Console.WriteLine("⭐ Avaliar tarefa (0 a 10)\n");

                    foreach (var tarefa in tarefas)
                    {
                        Console.WriteLine($"{tarefa.Id} - {tarefa.Titulo}");
                    }

                    Console.Write("\nID da tarefa: ");
                    string? idAvaliacao = Console.ReadLine();

                    bool existe = tarefas.Any(t => t.Id == idAvaliacao);
                    if (!existe)
                    {
                        Console.WriteLine("\n❌ Tarefa não encontrada.");
                        Console.WriteLine();
                        Pausar();
                        break;
                    }

                    Console.Write("Nota (0 a 10): ");
                    string? inputNota = Console.ReadLine();

                    if (!int.TryParse(inputNota, out int nota) || nota < 0 || nota > 10)
                    {
                        Console.WriteLine("\n❌ Nota inválida. Use um número de 0 a 10.");
                        Console.WriteLine();
                        Pausar();
                        break;
                    }

                    if (!avaliacoesPorTarefa.ContainsKey(idAvaliacao!))
                    {
                        avaliacoesPorTarefa[idAvaliacao!] = new List<int>();
                    }

                    avaliacoesPorTarefa[idAvaliacao!].Add(nota);

                    Console.WriteLine("\n✅ Avaliação registrada!");
                    Console.WriteLine();
                    Pausar();
                    break;

                case "5":
                    Console.Clear();
                    ExibirTitulo();

                    Console.WriteLine("📈 Média de avaliações por tarefa\n");

                    foreach (var tarefa in tarefas)
                    {
                        Console.WriteLine($"{tarefa.Id} - {tarefa.Titulo}");
                    }

                    Console.Write("\nID da tarefa: ");
                    string? idMedia = Console.ReadLine();

                    if (string.IsNullOrWhiteSpace(idMedia) || !avaliacoesPorTarefa.ContainsKey(idMedia))
                    {
                        Console.WriteLine("\nℹ️ Ainda não há avaliações para essa tarefa.");
                        Console.WriteLine();
                        Pausar();
                        break;
                    }

                    var notas = avaliacoesPorTarefa[idMedia];
                    double media = notas.Average();

                    Console.WriteLine($"\nNotas registradas: {string.Join(", ", notas)}");
                    Console.WriteLine($"Média: {media:F2}");

                    Console.WriteLine();
                    Pausar();
                    break;

                case "0":
                    Console.WriteLine("\nSaindo... 👋");
                    return;

                default:
                    Console.WriteLine("\nOpção inválida. Tente novamente.");
                    Pausar();
                    break;
            }

            Console.Clear();
            ExibirTitulo();
        }
    }

    static void ExibirTitulo()
    {
        Console.WriteLine("========================================");
        Console.WriteLine(" Checklist Inteligente de Rotina (C#)");
        Console.WriteLine(" Fase 4.0 — Console App (curso Alura)");
        Console.WriteLine("========================================\n");
    }

    static void ExibirMenu()
    {
        Console.WriteLine("Menu principal:");
        Console.WriteLine("1) Listar tarefas");
        Console.WriteLine("2) Marcar tarefa como feita");
        Console.WriteLine("3) Mostrar resumo do dia");
        Console.WriteLine("4) Avaliar tarefa");
        Console.WriteLine("5) Ver média de uma tarefa");
        Console.WriteLine("0) Sair");
    }

    static void Pausar()
    {
        Console.WriteLine("Pressione ENTER para voltar ao menu...");
        Console.ReadLine();
    }
}

class Tarefa
{
    public string Id { get; set; }
    public string Titulo { get; set; }
    public string Prioridade { get; set; }
    public string Status { get; set; }

    public Tarefa(string id, string titulo, string prioridade)
    {
        Id = id;
        Titulo = titulo;
        Prioridade = prioridade;
        Status = "pendente";
    }
}
