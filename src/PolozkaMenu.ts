/**
 * Abstraktní třída pro všechny položky menu
 */
export abstract class PolozkaMenu {
    public nazev: string;

    constructor(nazev: string) {
        this.nazev = nazev;
    }

    /**
     * Abstraktní metoda pro zobrazení - každý potomek ji implementuje
     */
    public abstract zobraz(uroven?: number): void;

    /**
     * Pomocná metoda pro vytvoření odsazení
     */
    protected vytvorOdsazeni(uroven: number): string {
        return ' '.repeat(uroven * 4);
    }
}
