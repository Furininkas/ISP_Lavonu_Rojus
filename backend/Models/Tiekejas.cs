namespace LavonuRojus.Models;

public class Tiekejas
{
    public int Id { get; set; }
    public string Pavadinimas { get; set; } = "";
    public string? Adresas { get; set; }
    public string? ImonesKodas { get; set; }
    public string? TelefonoNr { get; set; }
    public string? ElPastas { get; set; }

    public List<Preke> Prekes { get; set; } = new();
    public List<Paslauga> Paslaugos { get; set; } = new();
}
