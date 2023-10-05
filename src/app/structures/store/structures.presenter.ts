import { BehaviorSubject } from "rxjs";

export class StructuresPresenter {

  private _pedidos = new BehaviorSubject<any>(null);
  public readonly pedidos$ = this._pedidos.asObservable();


  setPedidos(payload: any | null) {
    this._pedidos.next(payload)
  }

}
