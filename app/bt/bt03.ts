import { Component } from "@angular/core";

@Component({
    selector: 'bt03',
    template: `
        <div class="lesson">
            <h3 class="title">Bài 3: Hiển thị dữ liệu từ Component</h3>
            <p class="info">Hiển thị dữ liệu và thiết đặt dữ liệu mặc định</p>
            <p class="person">
                <span>Họ tên: {{ person.name }}</span>
                <span>Tuổi: {{ person.age }}</span>
                <span>Công việc: {{ person.info.job }}</span>
                <span>Đẹp trai: {{ person.info.handsome ? 'Có' : 'Không' }}</span>
            </p>
        </div>
    `
})

export class Bt03 {
    person: any = {
        name: 'Andy Vũ',
        age: 30,
        info: {
            job: 'Lao công',
            handsome: true
        }
    }
}