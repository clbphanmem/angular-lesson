import { Component, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'showData'
})

export class showDataPipe implements PipeTransform {
    transform(value: any, arg: string = 'short') {        
        if (arg == 'short') {
            return value.name;
        } else {
            let html = '<p>Tên: ' + value.name + '</p>';
            html += '<p>Công việc: ' + value.job + '</p>';
            return html;
        }
    }
}

@Component({
    selector: 'bt09',
    template: `
        <div class="lesson">
            <h3 class="title">Bài 9: Tìm hiểu Pipe</h3>
            <p class="info">Cách dùng Pipe trong Angular 2</p>               
            <p>Birthday: {{ birthday | date:format | uppercase }}<button (click)="toggleFormat()">Toggle</button></p>     
            <p>Currency: {{ currency | currency:'VND' }}</p>
            <div [innerHTML]="data | showData:'full'">                
            </div>                           
        </div>
    `,
    pipes: [
        showDataPipe
    ]
})



export class Bt09 {
    toggle: boolean = true;
    
    birthday = new Date(2017,1,1);
    currency: number = 5000000;
    data: any = {
        name: 'Andy Vũ',
        job: 'Lao công'
    };
    
    get format() {
        return this.toggle ? 'shortDate' : 'fullDate';
    }
    
    toggleFormat() {
        this.toggle = !this.toggle;
    }
}