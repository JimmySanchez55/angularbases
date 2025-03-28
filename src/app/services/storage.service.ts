import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storageKey = 'sesion';

  islogin = signal<boolean>(
    (JSON.parse(localStorage.getItem(this.storageKey)!) as boolean) || false
  );

  syncStorage = effect(() => {
    localStorage.setItem(this.storageKey, JSON.stringify(this.islogin()));
  });

  login() {
    return this.islogin.set(true);
  }

  removeItem(): void {
    return this.islogin.set(false);
  }
}
