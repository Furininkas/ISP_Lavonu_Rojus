namespace LavonuRojus.Models;

public class Uzsakymas
{
    public int Id { get; set; }
    public DateOnly Data { get; set; }
    public decimal Suma { get; set; }
    public decimal Pvm { get; set; }
    public UzsakymoBusena Busena { get; set; } = UzsakymoBusena.Naujas;
    public string? Pastabos { get; set; }
    public decimal? Biudzetas { get; set; }

    public int NaudotojasId { get; set; }
    public Naudotojas? Naudotojas { get; set; }
    public int VelionisId { get; set; }
    public Velionis? Velionis { get; set; }

    public SaskaitaFaktura? Saskaita { get; set; }
    public List<PaslaugosUzsakymas> Paslaugos { get; set; } = new();
    public List<PrekesUzsakymas> Prekes { get; set; } = new();
    public List<Marsrutas> Marsrutai { get; set; } = new();
}
