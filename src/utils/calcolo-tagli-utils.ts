import { MappaTaglio } from "src/classes/mappa-taglio";


export class CalcoloTagliUtils {

    readonly tagli: number[] = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05];

    calcolaTagliEResto(totale: any, pagato: any): [number, MappaTaglio[]] {
        let resto = Number((pagato - totale).toFixed(2));
        let mappa: MappaTaglio[] = [];
        let quantita;
        let restoTaglio = resto;
        for (let taglio of this.tagli) {
            quantita = Math.floor(restoTaglio / taglio);
            mappa.push(new MappaTaglio(taglio, quantita));
            if (quantita > 0) {
                restoTaglio = restoTaglio % taglio;
            };
        }
        return [resto, mappa];
    }
}