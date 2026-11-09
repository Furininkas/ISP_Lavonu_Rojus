namespace LavonuRojus.Models;

public class Paslauga
{
    public int Id { get; set; }
    public string Pavadinimas { get; set; } = "";
    public string? Aprasymas { get; set; }
    public string? Tipas { get; set; }
    public decimal Kaina { get; set; }
    public string? Vieta { get; set; }
    public int TrukmeMin { get; set; }
    public bool Busena { get; set; } = true;
    public int TiekejasId { get; set; }
    public Tiekejas? Tiekejas { get; set; }
}
