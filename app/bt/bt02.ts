import { Component } from "@angular/core";

@Component({
    selector: 'bt02',
    template: `
        <div class="lesson">
            <h3 class="title">Bài 2: Two-way binding</h3>
            <p class="info">Nhập và thay đổi Input</p>
            <p>
                <input type="text" [(ngModel)]="data" />
            </p>
            <p>Dữ liệu nhận: {{ data }}</p>
        </div>
    `
})

export class Bt02 {
    
}