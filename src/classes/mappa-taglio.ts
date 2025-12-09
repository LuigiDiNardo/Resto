export class MappaTaglio {

    private taglio?: number;
    private quantita?: number;

    constructor(taglio: number, quantita: number) {
        this.taglio = taglio;
        this.quantita = quantita;
    }

    setTaglio(taglio: number): void {
        this.taglio = taglio;
    }

    getTaglio(): number {
        return this.taglio ? this.taglio : 0;
    }

    setQuantita(quantita: number): void {
        this.quantita = quantita;
    }

    getQuantita(): number {
        return this.quantita ? this.quantita : 0;
    }

    getTotale(): number {
        return this.quantita && this.taglio ? this.quantita * this.taglio : 0;
    }
}