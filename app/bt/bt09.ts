import { Component } from "@angular/core";

@Component({
    selector: 'bt09',
    template: `
        <div class="lesson">
            <h3 class="title">Bài 9: Tìm hiểu Pipe</h3>
            <p class="info">Cách dùng Pipe trong Angular 2</p>               
            <p>Birthday: {{ birthday | date }}</p>     
            <p>Currency: {{ currency | currency }}</p>                             
        </div>
    `
})



export class Bt09 {
    birthday = new Date(2017,1,1);
    currency: number = 5000000;
}