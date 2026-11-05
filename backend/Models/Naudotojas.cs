namespace LavonuRojus.Models;

public class Naudotojas
{
    public int Id { get; set; }
    public string Vardas { get; set; } = "";
    public string Pavarde { get; set; } = "";
    public string Slapyvardis { get; set; } = "";
    public string Slaptazodis { get; set; } = "";
    public DateOnly? GimimoData { get; set; }
    public string ElPastas { get; set; } = "";
    public string? TelefonoNr { get; set; }
    public NaudotojoTipas Tipas { get; set; }
    public string? AsmKodas { get; set; }
    public DateTime SukurimoData { get; set; } = DateTime.UtcNow;
    public bool Busena { get; set; } = true;
    public DateTime? PaskutinioPrisijungimoData { get; set; }
    public string? Adresas { get; set; }

    public List<Velionis> Velioniai { get; set; } = new();
    public List<Uzsakymas> Uzsakymai { get; set; } = new();
}
