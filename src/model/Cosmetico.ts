import { Produto } from "./Produto";

export class Cosmético extends Produto {
    
    private _fragancia: string;


	constructor(id: number, nome: string, tipo: number, preco: number, fragancia: string) {
        super(id, nome, tipo, preco);
		this._fragancia = fragancia;
	}

	public get fragancia(): string {
		return this._fragancia;
	}

	public set fragancia(nome: string) {
		this._fragancia = nome;
	}

    public visualizar(): void {
        super.visualizar()
        console.log("Fragancia: " + this._fragancia);
    }

}