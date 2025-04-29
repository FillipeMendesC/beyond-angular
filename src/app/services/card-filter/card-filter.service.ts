import { Injectable } from '@angular/core';
import { userFilter } from '../../models/user-filter.type';

@Injectable({
  providedIn: 'root'
})
export class CardFilterService {

  getUserFilter(){
    return [{
      id: 1, nome: "teste", pais: "Brasil", ano: 2077, continente: "America", viaChegada: "Avião", desembarque: "GRU"
    }] as userFilter[]
  }
}
