import { Component } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'bt10',
    template: `
        <div class="lesson">
            <h3 class="title">Bài 10: Tìm hiểu Http Client</h3>
            <p class="info">Cách dùng Http Client trong Angular 2</p>
            <div>
                <p>Tên: {{ person?.name }}</p>
                <p>Công việc: {{ person?.job }}</p>
                <p>Công ty: {{ person?.company }}</p>
                <p>Phương thức: {{ person?.method }}</p>
                
                <button (click)="getJson()" >GET</button>
                <button (click)="postJson()" >POST</button>
                <button (click)="putJson()" >PUT</button>
                <button (click)="patchJson()" >PATCH</button>
                <button (click)="deleteJson()" >DELETE</button>
            </div>                                   
        </div>
    `
})



export class Bt10 {
    private url: string = 'http://localhost/aj2/angular-lesson/api/angular';
    person: any = {};
    constructor(private _http: Http) {

    }

    // Restful API
    getJson() {
        this._http.get(this.url)
            .map((res: Response) => res.json())
            .subscribe((data) => {
                this.person = data;
            });
    }

    postJson() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this._http.post(this.url, '', options)
            .map((res: Response) => res.json())
            .subscribe((data) => {
                this.person = data;
            });
    }

    putJson() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        this._http.put(this.url, '', options)
            .map((res: Response) => res.json())
            .subscribe((data) => {
                this.person = data;
            });
    }

    patchJson() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        this._http.patch(this.url, '', options)
            .map((res: Response) => res.json())
            .subscribe((data) => {
                this.person = data;
            });
    }

    deleteJson() {                
        this._http.delete(this.url)
            .map((res: Response) => res.json())
            .subscribe((data) => {
                this.person = data;
            });
    }
}