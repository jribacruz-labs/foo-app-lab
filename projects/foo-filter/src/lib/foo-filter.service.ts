import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooFilterService {

  constructor() { }

  sayHello(){
    console.log("Hello Foo Filter!!!!");
  }
}
