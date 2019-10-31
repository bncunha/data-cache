import { Injectable } from '@angular/core';
import { DataCache } from './entities/DataCache.util';

@Injectable({
  providedIn: 'root'
})
export class NgDataCacheService {

  private cache: DataCache[] = [];

  constructor() { }

  setData(id: string, data: any) {
    this.cache[id] = data;
  }

  removeData(id: string) {
    delete this.cache[id];
  }

  foundData(id: string) {
    return this.cache[id];
  }

  getCache() {
    return this.cache;
  }

  cleanCache() {
    this.cache = [];
  }
}
