import { PolozkaMenu } from './PolozkaMenu';

/**
 * Konkrétní třída pro podmenu (composite)
 */
export class Podmenu extends PolozkaMenu {
    private polozky: PolozkaMenu[] = [];

    constructor(nazev: string) {
        super(nazev);
    }

    public pridejPolozku(polozka: PolozkaMenu): void {
        this.polozky.push(polozka);
    }

    public zobraz(uroven: number = 0): void {
        console.log(`${this.vytvorOdsazeni(uroven)}▶ ${this.nazev}`);
        
        // Rekurzivně zobrazí všechny podřazené položky s větším odsazením
        for (const polozka of this.polozky) {
            polozka.zobraz(uroven + 1);
        }
    }
}
