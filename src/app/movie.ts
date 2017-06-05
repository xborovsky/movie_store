export class Movie {
    private id : number;
    private name : string;
    private year : number;
    private pcs : number;
    
    constructor(id : number, name : string, year : number, pcs : number) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.pcs = pcs;
    }

    getId() : number {
        return this.id;
    }

    getName() : string {
        return this.name;
    }

    getYear() : number {
        return this.year;
    }

    getPcs() : number {
        return this.pcs;
    }

    setPcs(pcs : number) : void {
        this.pcs = pcs;
    }
}
