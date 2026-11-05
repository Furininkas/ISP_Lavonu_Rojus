namespace LavonuRojus.Models;

public class SaskaitaFaktura
{
    public int Id { get; set; }
    public DateOnly Data { get; set; }
    public DateOnly ApmokejimoTerminas { get; set; }
    public string ImonesKodas { get; set; } = "";
    public string SfNumeris { get; set; } = "";

    public int UzsakymasId { get; set; }
    public Uzsakymas? Uzsakymas { get; set; }
}
