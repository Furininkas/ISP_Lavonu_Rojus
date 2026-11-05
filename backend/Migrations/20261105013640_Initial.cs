using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace LavonuRojus.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Naudotojai",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Vardas = table.Column<string>(type: "text", nullable: false),
                    Pavarde = table.Column<string>(type: "text", nullable: false),
                    Slapyvardis = table.Column<string>(type: "text", nullable: false),
                    Slaptazodis = table.Column<string>(type: "text", nullable: false),
                    GimimoData = table.Column<DateOnly>(type: "date", nullable: true),
                    ElPastas = table.Column<string>(type: "text", nullable: false),
                    TelefonoNr = table.Column<string>(type: "text", nullable: true),
                    Tipas = table.Column<string>(type: "text", nullable: false),
                    AsmKodas = table.Column<string>(type: "text", nullable: true),
                    SukurimoData = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Busena = table.Column<bool>(type: "boolean", nullable: false),
                    PaskutinioPrisijungimoData = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    Adresas = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Naudotojai", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tiekejai",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Pavadinimas = table.Column<string>(type: "text", nullable: false),
                    Adresas = table.Column<string>(type: "text", nullable: true),
                    ImonesKodas = table.Column<string>(type: "text", nullable: true),
                    TelefonoNr = table.Column<string>(type: "text", nullable: true),
                    ElPastas = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tiekejai", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Velioniai",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Vardas = table.Column<string>(type: "text", nullable: false),
                    Pavarde = table.Column<string>(type: "text", nullable: false),
                    GimimoData = table.Column<DateOnly>(type: "date", nullable: true),
                    MirtiesData = table.Column<DateOnly>(type: "date", nullable: true),
                    LaidojimoData = table.Column<DateOnly>(type: "date", nullable: true),
                    NaudotojasId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Velioniai", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Velioniai_Naudotojai_NaudotojasId",
                        column: x => x.NaudotojasId,
                        principalTable: "Naudotojai",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Paslaugos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Pavadinimas = table.Column<string>(type: "text", nullable: false),
                    Aprasymas = table.Column<string>(type: "text", nullable: true),
                    Tipas = table.Column<string>(type: "text", nullable: true),
                    Kaina = table.Column<decimal>(type: "numeric", nullable: false),
                    Vieta = table.Column<string>(type: "text", nullable: true),
                    TrukmeMin = table.Column<int>(type: "integer", nullable: false),
                    Busena = table.Column<bool>(type: "boolean", nullable: false),
                    Nuotrauka = table.Column<string>(type: "text", nullable: true),
                    TiekejasId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Paslaugos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Paslaugos_Tiekejai_TiekejasId",
                        column: x => x.TiekejasId,
                        principalTable: "Tiekejai",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Prekes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Pavadinimas = table.Column<string>(type: "text", nullable: false),
                    Nuotrauka = table.Column<string>(type: "text", nullable: true),
                    Kaina = table.Column<decimal>(type: "numeric", nullable: false),
                    Aprasas = table.Column<string>(type: "text", nullable: true),
                    Spalva = table.Column<string>(type: "text", nullable: true),
                    Likutis = table.Column<int>(type: "integer", nullable: false),
                    Kategorija = table.Column<string>(type: "text", nullable: true),
                    TiekejasId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Prekes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Prekes_Tiekejai_TiekejasId",
                        column: x => x.TiekejasId,
                        principalTable: "Tiekejai",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Priminimai",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Data = table.Column<DateOnly>(type: "date", nullable: false),
                    AtminimoPavadinimas = table.Column<string>(type: "text", nullable: false),
                    AtminimoData = table.Column<DateOnly>(type: "date", nullable: false),
                    Tekstas = table.Column<string>(type: "text", nullable: true),
                    Busena = table.Column<bool>(type: "boolean", nullable: false),
                    VelionisId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Priminimai", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Priminimai_Velioniai_VelionisId",
                        column: x => x.VelionisId,
                        principalTable: "Velioniai",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Uzsakymai",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Data = table.Column<DateOnly>(type: "date", nullable: false),
                    Suma = table.Column<decimal>(type: "numeric", nullable: false),
                    Pvm = table.Column<decimal>(type: "numeric", nullable: false),
                    Busena = table.Column<string>(type: "text", nullable: false),
                    Pastabos = table.Column<string>(type: "text", nullable: true),
                    Biudzetas = table.Column<decimal>(type: "numeric", nullable: true),
                    NaudotojasId = table.Column<int>(type: "integer", nullable: false),
                    VelionisId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Uzsakymai", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Uzsakymai_Naudotojai_NaudotojasId",
                        column: x => x.NaudotojasId,
                        principalTable: "Naudotojai",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Uzsakymai_Velioniai_VelionisId",
                        column: x => x.VelionisId,
                        principalTable: "Velioniai",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Marsrutai",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    PradziosAdresas = table.Column<string>(type: "text", nullable: false),
                    PabaigosAdresas = table.Column<string>(type: "text", nullable: false),
                    PradziosPlatuma = table.Column<double>(type: "double precision", nullable: false),
                    PradziosIlguma = table.Column<double>(type: "double precision", nullable: false),
                    PabaigosPlatuma = table.Column<double>(type: "double precision", nullable: false),
                    PabaigosIlguma = table.Column<double>(type: "double precision", nullable: false),
                    Atstumas = table.Column<double>(type: "double precision", nullable: false),
                    NumatomaTrukme = table.Column<int>(type: "integer", nullable: false),
                    UzsakymasId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Marsrutai", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Marsrutai_Uzsakymai_UzsakymasId",
                        column: x => x.UzsakymasId,
                        principalTable: "Uzsakymai",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PaslaugosUzsakymai",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Kiekis = table.Column<int>(type: "integer", nullable: false),
                    Nuolaida = table.Column<decimal>(type: "numeric", nullable: false),
                    VienetoKaina = table.Column<decimal>(type: "numeric", nullable: false),
                    VykdymoData = table.Column<DateOnly>(type: "date", nullable: false),
                    PradziosLaikas = table.Column<string>(type: "text", nullable: true),
                    Vieta = table.Column<string>(type: "text", nullable: true),
                    UzsakymasId = table.Column<int>(type: "integer", nullable: false),
                    PaslaugaId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaslaugosUzsakymai", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PaslaugosUzsakymai_Paslaugos_PaslaugaId",
                        column: x => x.PaslaugaId,
                        principalTable: "Paslaugos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PaslaugosUzsakymai_Uzsakymai_UzsakymasId",
                        column: x => x.UzsakymasId,
                        principalTable: "Uzsakymai",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PrekesUzsakymai",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Kiekis = table.Column<int>(type: "integer", nullable: false),
                    Nuolaida = table.Column<decimal>(type: "numeric", nullable: false),
                    UzsakymasId = table.Column<int>(type: "integer", nullable: false),
                    PrekeId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PrekesUzsakymai", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PrekesUzsakymai_Prekes_PrekeId",
                        column: x => x.PrekeId,
                        principalTable: "Prekes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PrekesUzsakymai_Uzsakymai_UzsakymasId",
                        column: x => x.UzsakymasId,
                        principalTable: "Uzsakymai",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SaskaitosFaktura",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Data = table.Column<DateOnly>(type: "date", nullable: false),
                    ApmokejimoTerminas = table.Column<DateOnly>(type: "date", nullable: false),
                    ImonesKodas = table.Column<string>(type: "text", nullable: false),
                    SfNumeris = table.Column<string>(type: "text", nullable: false),
                    UzsakymasId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SaskaitosFaktura", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SaskaitosFaktura_Uzsakymai_UzsakymasId",
                        column: x => x.UzsakymasId,
                        principalTable: "Uzsakymai",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Marsrutai_UzsakymasId",
                table: "Marsrutai",
                column: "UzsakymasId");

            migrationBuilder.CreateIndex(
                name: "IX_Paslaugos_TiekejasId",
                table: "Paslaugos",
                column: "TiekejasId");

            migrationBuilder.CreateIndex(
                name: "IX_PaslaugosUzsakymai_PaslaugaId",
                table: "PaslaugosUzsakymai",
                column: "PaslaugaId");

            migrationBuilder.CreateIndex(
                name: "IX_PaslaugosUzsakymai_UzsakymasId",
                table: "PaslaugosUzsakymai",
                column: "UzsakymasId");

            migrationBuilder.CreateIndex(
                name: "IX_Prekes_TiekejasId",
                table: "Prekes",
                column: "TiekejasId");

            migrationBuilder.CreateIndex(
                name: "IX_PrekesUzsakymai_PrekeId",
                table: "PrekesUzsakymai",
                column: "PrekeId");

            migrationBuilder.CreateIndex(
                name: "IX_PrekesUzsakymai_UzsakymasId",
                table: "PrekesUzsakymai",
                column: "UzsakymasId");

            migrationBuilder.CreateIndex(
                name: "IX_Priminimai_VelionisId",
                table: "Priminimai",
                column: "VelionisId");

            migrationBuilder.CreateIndex(
                name: "IX_SaskaitosFaktura_UzsakymasId",
                table: "SaskaitosFaktura",
                column: "UzsakymasId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Uzsakymai_NaudotojasId",
                table: "Uzsakymai",
                column: "NaudotojasId");

            migrationBuilder.CreateIndex(
                name: "IX_Uzsakymai_VelionisId",
                table: "Uzsakymai",
                column: "VelionisId");

            migrationBuilder.CreateIndex(
                name: "IX_Velioniai_NaudotojasId",
                table: "Velioniai",
                column: "NaudotojasId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Marsrutai");

            migrationBuilder.DropTable(
                name: "PaslaugosUzsakymai");

            migrationBuilder.DropTable(
                name: "PrekesUzsakymai");

            migrationBuilder.DropTable(
                name: "Priminimai");

            migrationBuilder.DropTable(
                name: "SaskaitosFaktura");

            migrationBuilder.DropTable(
                name: "Paslaugos");

            migrationBuilder.DropTable(
                name: "Prekes");

            migrationBuilder.DropTable(
                name: "Uzsakymai");

            migrationBuilder.DropTable(
                name: "Tiekejai");

            migrationBuilder.DropTable(
                name: "Velioniai");

            migrationBuilder.DropTable(
                name: "Naudotojai");
        }
    }
}
