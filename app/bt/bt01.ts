import { Component } from "@angular/core";


@Component({
    selector: 'bt01',
    template: `
        <div class="lesson">
            <h3 class="title">Bài 1: Hello World</h3>
            <p class="info">Hiển thị nội dung "Hello World" ra màn hình</p>
            <p>{{ 'Hello World' }}</p>
        </div>
    `
})

export class Bt01 {
    
}