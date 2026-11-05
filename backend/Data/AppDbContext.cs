using LavonuRojus.Models;
using Microsoft.EntityFrameworkCore;

namespace LavonuRojus.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Naudotojas> Naudotojai => Set<Naudotojas>();
    public DbSet<Velionis> Velioniai => Set<Velionis>();
    public DbSet<Priminimas> Priminimai => Set<Priminimas>();
    public DbSet<Tiekejas> Tiekejai => Set<Tiekejas>();
    public DbSet<Paslauga> Paslaugos => Set<Paslauga>();
    public DbSet<Preke> Prekes => Set<Preke>();
    public DbSet<Uzsakymas> Uzsakymai => Set<Uzsakymas>();
    public DbSet<PaslaugosUzsakymas> PaslaugosUzsakymai => Set<PaslaugosUzsakymas>();
    public DbSet<PrekesUzsakymas> PrekesUzsakymai => Set<PrekesUzsakymas>();
    public DbSet<SaskaitaFaktura> SaskaitosFaktura => Set<SaskaitaFaktura>();
    public DbSet<Marsrutas> Marsrutai => Set<Marsrutas>();

    protected override void OnModelCreating(ModelBuilder b)
    {
        b.Entity<Naudotojas>().Property(x => x.Tipas).HasConversion<string>();
        b.Entity<Uzsakymas>().Property(x => x.Busena).HasConversion<string>();
        b.Entity<Uzsakymas>().HasOne(x => x.Saskaita).WithOne(x => x.Uzsakymas)
            .HasForeignKey<SaskaitaFaktura>(x => x.UzsakymasId);
    }
}
