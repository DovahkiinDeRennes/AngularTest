import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private pseudoSubject = new BehaviorSubject<string>('');
  pseudo$ = this.pseudoSubject.asObservable();

  setPseudo(pseudo: string) {
    this.pseudoSubject.next(pseudo);
  }

}
