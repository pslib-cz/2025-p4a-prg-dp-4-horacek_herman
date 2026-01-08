import { AkcniPolozka } from './AkcniPolozka';
import { Podmenu } from './Podmenu';

// Ukázka použití
function main(): void {
    // Vytvoření hlavního menu
    const hlavniMenu = new Podmenu('Hlavní Menu');

    // Přidání akčních položek
    hlavniMenu.pridejPolozku(new AkcniPolozka('Nová hra', () => console.log('Spouštím novou hru...')));
    hlavniMenu.pridejPolozku(new AkcniPolozka('Načíst hru', () => console.log('Načítám hru...')));

    // Vytvoření podmenu Nastavení
    const nastaveni = new Podmenu('Nastavení');
    nastaveni.pridejPolozku(new AkcniPolozka('Hlasitost', () => console.log('Nastavuji hlasitost...')));
    
    // Vnořené podmenu v Nastavení
    const grafika = new Podmenu('Grafika');
    grafika.pridejPolozku(new AkcniPolozka('Rozlišení', () => console.log('Měním rozlišení...')));
    grafika.pridejPolozku(new AkcniPolozka('Kvalita textur', () => console.log('Měním kvalitu textur...')));
    grafika.pridejPolozku(new AkcniPolozka('V-Sync', () => console.log('Přepínám V-Sync...')));
    
    nastaveni.pridejPolozku(grafika);
    nastaveni.pridejPolozku(new AkcniPolozka('Ovládání', () => console.log('Nastavuji ovládání...')));

    hlavniMenu.pridejPolozku(nastaveni);

    // Další podmenu s hlubším vnořením
    const profil = new Podmenu('Profil');
    const statistiky = new Podmenu('Statistiky');
    statistiky.pridejPolozku(new AkcniPolozka('Celkový čas', () => console.log('Zobrazuji celkový čas...')));
    statistiky.pridejPolozku(new AkcniPolozka('Úspěchy', () => console.log('Zobrazuji úspěchy...')));
    profil.pridejPolozku(statistiky);
    profil.pridejPolozku(new AkcniPolozka('Editovat profil', () => console.log('Edituji profil...')));
    hlavniMenu.pridejPolozku(profil);

    hlavniMenu.pridejPolozku(new AkcniPolozka('Ukončit', () => console.log('Ukončuji aplikaci...')));

    // Zobrazení celého menu jedním voláním
    console.log('=== NAVIGAČNÍ SYSTÉM ===\n');
    hlavniMenu.zobraz();
}

// Export pro použití jako knihovna
export { PolozkaMenu } from './PolozkaMenu';
export { AkcniPolozka } from './AkcniPolozka';
export { Podmenu } from './Podmenu';

// Spuštění demo při přímém spuštění
if (require.main === module) {
    main();
}
