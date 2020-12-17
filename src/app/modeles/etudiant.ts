export class Etudiant {
    public get ufr(): string {
      return this._ufr;
    }
    public set ufr(value: string) {
      this._ufr = value;
    }
    public get prenom(): string {
      return this._prenom;
    }
    public set prenom(value: string) {
      this._prenom = value;
    }
    public get nom(): string {
      return this._nom;
    }
    public set nom(value: string) {
      this._nom = value;
    }
    public get id(): string {
      return this._id;
    }
    public set id(value: string) {
      this._id = value;
    }
    constructor(
      private _id: string,
      private _nom: string,
      private _prenom: string,
      private _ufr: string
    ) {}
  }