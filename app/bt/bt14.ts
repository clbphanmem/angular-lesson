import { Component } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";


@Component({
    selector: 'bt14',
    template: `
        <div class="lesson">
            <h3 class="title">Bài 14: Tương tác với API</h3>
            <p class="info">Tương tác với API trong khóa học Training</p>         
            <div>
                
                <input type="text" [(ngModel)]="category.name" />
                <button (click)="create(category)">Tạo</button>
            </div>   
        </div>
    `
})

export class Bt14 {
    public category: any = {};
    constructor(
        private _http: Http
    ) {}
    
    create(category: any) {        console.log(category);
        let body = JSON.stringify(category);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        
        this._http.post('http://localhost/aj2/angular-lesson/api/category/create', body, options)
            .map(res => res.json())
            .subscribe(res => {
                console.log(res);
            });
    }
}