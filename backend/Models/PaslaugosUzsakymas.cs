namespace LavonuRojus.Models;

public class PaslaugosUzsakymas
{
    public int Id { get; set; }
    public int Kiekis { get; set; }
    public decimal Nuolaida { get; set; }
    public decimal VienetoKaina { get; set; }
    public DateOnly VykdymoData { get; set; }
    public string? PradziosLaikas { get; set; }
    public string? Vieta { get; set; }

    public int UzsakymasId { get; set; }
    public Uzsakymas? Uzsakymas { get; set; }
    public int PaslaugaId { get; set; }
    public Paslauga? Paslauga { get; set; }
}
