import { PolozkaMenu } from './PolozkaMenu';

/**
 * Konkrétní třída pro akční položku menu (list)
 */
export class AkcniPolozka extends PolozkaMenu {
    private akce: () => void;

    constructor(nazev: string, akce: () => void) {
        super(nazev);
        this.akce = akce;
    }

    public zobraz(uroven: number = 0): void {
        console.log(`${this.vytvorOdsazeni(uroven)}→ ${this.nazev}`);
    }

    public spust(): void {
        this.akce();
    }
}
