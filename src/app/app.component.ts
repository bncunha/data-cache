import { Component, OnInit } from '@angular/core';
import { NgDataCacheService } from 'projects/ng-data-cache/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'data-cache';

  constructor(
    private cacheService: NgDataCacheService
  ) {}

  ngOnInit() {
    // add 2 items in cache
    this.cacheService.setData('products', [{name: 'Product1'}, {name: 'Product2'}]);
    this.cacheService.setData('user', {userName: 'Jack'});
    console.log(this.cacheService.getCache());
    
    // get specific item
    console.log(this.cacheService.foundData('user'));
    console.log(this.cacheService.foundData('not-found'));
    
    // remove products
    this.cacheService.removeData('products');
    
    // remove all cache
    this.cacheService.cleanCache();
    console.log(this.cacheService.getCache());

  }

}
