# Menu systém - Composite Pattern

## Použitý návrhový vzor: Composite (Kompozit)

### Proč tento vzor?

Composite pattern byl zvolen, protože řeší problém hierarchických struktur, kde potřebujeme pracovat s jednotlivými objekty i se skupinami objektů stejným způsobem. Pro menu systém je ideální, protože:

1. **Jednotné rozhraní** - Akční položky i podmenu (obsahující další položky) se zobrazují stejnou metodou `zobraz()`

2. **Rekurzivní struktura** - Menu může obsahovat další podmenu libovolné hloubky, což přesně odpovídá stromové struktuře Composite vzoru

3. **Flexibilita** - Snadné přidávání nových položek nebo celých podmenu bez změny existujícího kódu

4. **Zjednodušení kódu** - Klientský kód nemusí rozlišovat mezi jednoduchou položkou a podmenu - obojí se zobrazí voláním `zobraz()`

### Popis vzoru

Composite pattern je strukturální návrhový vzor, který umožňuje skládat objekty do stromových struktur a následně s nimi pracovat, jako by to byly jednotlivé objekty. Hlavní komponenty:

- **PolozkaMenu** - Abstraktní třída (Component) definující společné rozhraní
- **AkcniPolozka** - Konkrétní třída (Leaf) reprezentující konečnou akci
- **Podmenu** - Konkrétní třída (Composite) obsahující seznam podřízených položek

Když zavoláme `zobraz()` na podmenu, automaticky se rekurzivně zobrazí všechny vnořené položky se správným odsazením.
