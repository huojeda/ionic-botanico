
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;
  private isReady = false;

  constructor(private storage: Storage) {}

  async init() {
    if (!this.isReady) {
      this._storage = await this.storage.create();
      this.isReady = true;
    }
  }

  async set(key: string, value: any) {
    await this.init();
    return this._storage?.set(key, value);
  }

  async get(key: string) {
    await this.init();
    return this._storage?.get(key);
  }

  async remove(key: string) {
    await this.init();
    return this._storage?.remove(key);
  }
}
