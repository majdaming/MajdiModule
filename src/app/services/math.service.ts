import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  Somme(a: number, b: number): number {
    return a + b;
  }

}
