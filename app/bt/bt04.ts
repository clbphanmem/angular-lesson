import { Component } from "@angular/core";

@Component({
    selector: 'bt04',
    template: `
        <div class="lesson">
            <h3 class="title">Bài 4: Tìm  các  sự kiện trong Angular 2</h3>
            <p class="info">Tìm hiểu cơ bản về các sự kiện thường sử dụng</p>
            <p class="person">
                <span>Họ tên: {{ person.name }}</span>
                <span>Tuổi: {{ person.age }}</span>
                <span>Công việc: {{ person.info.job }}</span>
                <span>Đẹp trai: {{ person.info.handsome ? 'Có' : 'Không' }}</span>
            </p>
            <button (click)="clickToChange()">Click</button>
            <button (mouseover)="clickToChange()">Hover</button>
            <input type="text" (keyup)="clickToChange()" />
            <p>Bắt sự kiện từ biến toàn cục $event</p>
            <input type="text" (keyup)="getEvent($event)" /><br/>
            <input type="text" (keyup.enter)="getEvent($event)" (blur)="getEvent($event)" /> (Enter & Blur)
            <p>Dữ liệu nhận: {{ value }}</p>
        </div>
    `
})

export class Bt04 {
    toggle = false;
    value: string = '';
    person: any = {
        name: 'Andy Vũ',
        age: 30,
        info: {
            job: 'Lao công',
            handsome: true
        }
    };

    clickToChange() {        
        if (!this.toggle) {
            this.person.name = 'Kenny Huy';
            this.person.age = 31;
            this.person.info = {
                job: 'CEO',
                handsome: false
            }
        } else {
            this.person = {
                name: 'Andy Vũ',
                age: 30,
                info: {
                    job: 'Lao công',
                    handsome: true
                }
            };
        }
        this.toggle = !this.toggle;
    }
    
    getEvent(event: any) {
        this.value = event.target.value;
    }
}