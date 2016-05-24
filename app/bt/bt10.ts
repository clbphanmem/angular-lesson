import { Component } from "@angular/core";
import { Http, Response } from '@angular/http';

@Component({
    selector: 'bt10',
    template: `
        <div class="lesson">
            <h3 class="title">Bài 10: Tìm hiểu Http Client</h3>
            <p class="info">Cách dùng Http Client trong Angular 2</p>
            <div>
                <p></p>
                <button>GET Json</button>
            </div>                                   
        </div>
    `    
})



export class Bt10 {
    private url: string = 'http://localhost/aj2/angular-lesson/api/angular?name=Andy';
    constructor(private _http: Http) {
        _http.get(this.url)
        .map((res: Response) => res.json())
        .subscribe((data) => {
            console.log(data);
        });
    }
}