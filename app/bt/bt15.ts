import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'bt15',
    template: `
        <div class="lesson">
            <h3 class="title">Bài 15: Template Syntax</h3>
            <p class="info">Các cú pháp trong Template Syntax</p>
            <p [innerHTML]="'You\\'re welcome'" #test>Không có chi</p>
            <input type="text" [disabled]="bool" />
            <button (click)="toggle()">Enable or Disable</button>
            <p>{{ test.innerHTML }}</p>
            <form (submit)="alert()">
                <button type="submit">Submit</button>
            </form>
        </div>
    `
})

export class Bt15 {
    bool: boolean = true;
    toggle() {
        this.bool = !this.bool;
        document.title = this.bool ? 'Hiệu hóa' : 'Vô hiệu hóa';
    }
    
    alert() {
        alert('OK');
    }
}