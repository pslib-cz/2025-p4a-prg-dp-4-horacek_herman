using System;
using System.Collections.Generic;

// Abstraktní třída pro všechny položky menu
public abstract class PolozkaMenu
{
    public string Nazev { get; set; }

    protected PolozkaMenu(string nazev)
    {
        Nazev = nazev;
    }

    // Abstraktní metoda pro zobrazení - každý potomek ji implementuje
    public abstract void Zobraz(int uroven = 0);

    // Pomocná metoda pro vytvoření odsazení
    protected string VytvorOdsazeni(int uroven)
    {
        return new string(' ', uroven * 4);
    }
}

// Konkrétní třída pro akční položku menu (list)
public class AkcniPolozka : PolozkaMenu
{
    private Action akce;

    public AkcniPolozka(string nazev, Action akce) : base(nazev)
    {
        this.akce = akce;
    }

    public override void Zobraz(int uroven = 0)
    {
        Console.WriteLine($"{VytvorOdsazeni(uroven)}→ {Nazev}");
    }

    public void Spust()
    {
        akce?.Invoke();
    }
}

// Konkrétní třída pro podmenu (composite)
public class Podmenu : PolozkaMenu
{
    private List<PolozkaMenu> polozky = new List<PolozkaMenu>();

    public Podmenu(string nazev) : base(nazev)
    {
    }

    public void PridejPolozku(PolozkaMenu polozka)
    {
        polozky.Add(polozka);
    }

    public override void Zobraz(int uroven = 0)
    {
        Console.WriteLine($"{VytvorOdsazeni(uroven)}▶ {Nazev}");
        
        // Rekurzivně zobrazí všechny podřazené položky s větším odsazením
        foreach (var polozka in polozky)
        {
            polozka.Zobraz(uroven + 1);
        }
    }
}

// Ukázka použití
class Program
{
    static void Main()
    {
        // Vytvoření hlavního menu
        var hlavniMenu = new Podmenu("Hlavní Menu");

        // Přidání akčních položek
        hlavniMenu.PridejPolozku(new AkcniPolozka("Nová hra", () => Console.WriteLine("Spouštím novou hru...")));
        hlavniMenu.PridejPolozku(new AkcniPolozka("Načíst hru", () => Console.WriteLine("Načítám hru...")));

        // Vytvoření podmenu Nastavení
        var nastaveni = new Podmenu("Nastavení");
        nastaveni.PridejPolozku(new AkcniPolozka("Hlasitost", () => Console.WriteLine("Nastavuji hlasitost...")));
        
        // Vnořené podmenu v Nastavení
        var grafika = new Podmenu("Grafika");
        grafika.PridejPolozku(new AkcniPolozka("Rozlišení", () => Console.WriteLine("Měním rozlišení...")));
        grafika.PridejPolozku(new AkcniPolozka("Kvalita textur", () => Console.WriteLine("Měním kvalitu textur...")));
        grafika.PridejPolozku(new AkcniPolozka("V-Sync", () => Console.WriteLine("Přepínám V-Sync...")));
        
        nastaveni.PridejPolozku(grafika);
        nastaveni.PridejPolozku(new AkcniPolozka("Ovládání", () => Console.WriteLine("Nastavuji ovládání...")));

        hlavniMenu.PridejPolozku(nastaveni);

        // Další podmenu s hlubším vnořením
        var profil = new Podmenu("Profil");
        var statistiky = new Podmenu("Statistiky");
        statistiky.PridejPolozku(new AkcniPolozka("Celkový čas", () => Console.WriteLine("Zobrazuji celkový čas...")));
        statistiky.PridejPolozku(new AkcniPolozka("Úspěchy", () => Console.WriteLine("Zobrazuji úspěchy...")));
        profil.PridejPolozku(statistiky);
        profil.PridejPolozku(new AkcniPolozka("Editovat profil", () => Console.WriteLine("Edituji profil...")));
        hlavniMenu.PridejPolozku(profil);

        hlavniMenu.PridejPolozku(new AkcniPolozka("Ukončit", () => Console.WriteLine("Ukončuji aplikaci...")));

        // Zobrazení celého menu jedním voláním
        Console.WriteLine("=== NAVIGAČNÍ SYSTÉM ===\n");
        hlavniMenu.Zobraz();
    }
}
