import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DadosService {

  public dados = [
    ['Junho', 1],
    ['Julho', 1],
    ['Agosto', 1],
    ['Setembro', 1]
  ]

  constructor() { }

  setarDados(junho: number, julho: number, agosto: number, setembro: number): void {
    this.dados[0][1] = junho;
    this.dados[1][1] = julho;
    this.dados[2][1] = agosto;
    this.dados[3][1] = setembro;
  }

  obterDados(): Observable<any> {
		return new Observable(observable => {
			observable.next(this.dados);
			observable.complete();
		});
	}
}
