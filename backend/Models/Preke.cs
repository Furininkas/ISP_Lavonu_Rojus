namespace LavonuRojus.Models;

public class Preke
{
    public int Id { get; set; }
    public string Pavadinimas { get; set; } = "";
    public string? Nuotrauka { get; set; }
    public decimal Kaina { get; set; }
    public string? Aprasas { get; set; }
    public string? Spalva { get; set; }
    public int Likutis { get; set; }
    public string? Kategorija { get; set; }

    public int TiekejasId { get; set; }
    public Tiekejas? Tiekejas { get; set; }
}
