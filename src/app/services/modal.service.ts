import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalStateSubject = new Subject();

  constructor() { }

  getModalStateObservable() {
    return this.modalStateSubject.asObservable();
  }

  showModal(id: string) {
    this.modalStateSubject.next({show:true,id});
  }

  hideModal(id: string) {
    this.modalStateSubject.next({show:false,id});
   }
}
