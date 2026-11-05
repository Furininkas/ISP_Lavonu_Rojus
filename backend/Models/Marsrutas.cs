namespace LavonuRojus.Models;

public class Marsrutas
{
    public int Id { get; set; }
    public string PradziosAdresas { get; set; } = "";
    public string PabaigosAdresas { get; set; } = "";
    public double PradziosPlatuma { get; set; }
    public double PradziosIlguma { get; set; }
    public double PabaigosPlatuma { get; set; }
    public double PabaigosIlguma { get; set; }
    public double Atstumas { get; set; }
    public int NumatomaTrukme { get; set; }

    public int UzsakymasId { get; set; }
    public Uzsakymas? Uzsakymas { get; set; }
}
