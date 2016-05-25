import { Component } from "@angular/core";
import { Jsonp, URLSearchParams } from '@angular/http';

@Component({
    selector: 'bt11',
    template: `
        <div class="lesson">
            <h3 class="title">Bài 11: Tìm hiểu Http Client - JSONP</h3>
            <p class="info">Cách dùng Http Client - JSONP trong Angular 2</p>
            <div>
                <p>Tên: {{ person?.name }}</p>
                <p>Công việc: {{ person?.job }}</p>
                <p>Công ty: {{ person?.company }}</p>
                <p>Phương thức: {{ person?.method }}</p>
                
                <button (click)="getJSONP()" >JSONP</button>
            </div>                                   
        </div>
    `
})



export class Bt11 {
    private url: string = 'http://localhost/aj2/angular-lesson/api/jsonp';
    person: any = {};
    constructor(private _jsonp: Jsonp) {

    }

    getJSONP() {
        let params = new URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');

        return this._jsonp
            .get(this.url, { search: params })
            .map(request => request.json())
            .subscribe((data) => {
                this.person = data;
            });
    }
}