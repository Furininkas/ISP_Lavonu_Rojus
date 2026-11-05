namespace LavonuRojus.Models;

public class Priminimas
{
    public int Id { get; set; }
    public DateOnly Data { get; set; }
    public string AtminimoPavadinimas { get; set; } = "";
    public DateOnly AtminimoData { get; set; }
    public string? Tekstas { get; set; }
    public bool Busena { get; set; }

    public int VelionisId { get; set; }
    public Velionis? Velionis { get; set; }
}
