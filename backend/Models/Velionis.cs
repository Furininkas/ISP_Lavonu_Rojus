namespace LavonuRojus.Models;

public class Velionis
{
    public int Id { get; set; }
    public string Vardas { get; set; } = "";
    public string Pavarde { get; set; } = "";
    public DateOnly? GimimoData { get; set; }
    public DateOnly? MirtiesData { get; set; }
    public DateOnly? LaidojimoData { get; set; }

    public int NaudotojasId { get; set; }
    public Naudotojas? Naudotojas { get; set; }
    public List<Priminimas> Priminimai { get; set; } = new();
    public List<Uzsakymas> Uzsakymai { get; set; } = new();
}
