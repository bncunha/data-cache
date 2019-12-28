# DataCache

This is a service to manager data in a cache service

## Instalation

```bash
$ npm install --save ng-data-cache
```

## Quickstart

Inject **NgDataCacheService** into a component or service that you want to use.

```typescript
import { Injectable } from '@angular/core';
import { NgDataCacheService } from 'ng-data-cache';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private cacheService: NgDataCacheService) { }
}
```

## Save new data in cache

Must pass a key and a data to store.

```typescript
this.cacheService.setData('MY_KEY', {name: 'Mario'});
```

## Get data saved

Must pass the same key when was save.

```typescript
this.cacheService.foundData('MY_KEY'); // {name: 'Mario'}
```

## Remove data

Must pass the same key when was save to remove data from cache.

```typescript
this.cacheService.removeData('MY_KEY');
```

## Clean all cache
```typescript
this.cacheService.cleanCache();
```

## All functions
| Function           | Description|
| -------------- | -------------- |
| setData(id: string, data: any): void | Save data in cache in given key. |
| removeData(id: string): void; | Remove data from given key. |
| foundData(id: string): any; | Return data from given key. |
| getCache(): DataCache[]; | Return all values stored in cache |
| cleanCache(): void; | Clean all cache |
