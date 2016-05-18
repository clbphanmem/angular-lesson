import { Component } from "@angular/core";


@Component({
    selector: 'child',
    template: `
    
    `
})

export class Child {
    counter: number = 0;
    private intervalId: number = 0;
    
    start() {
        this.intervalId = setInterval(() => this.count(), 1000);
    }
    
    stop() {
        clearInterval(this.intervalId);
    }
    
    private count() {
        this.counter++;
    }
}

@Component({
    selector: 'bt08',
    template: `
        <div class="lesson">
            <h3 class="title">Bài 8: Tìm hiểu Component nâng cao phần 2</h3>
            <p class="info">Cách dùng lại các phương thức từ Component con</p>               
            <child #counter></child>           
            <div>
                <p>Counter: {{ counter.counter }}</p>
                <button (click)="counter.start()">Start</button>
                <button (click)="counter.stop()">Stop</button>
            </div> 
        </div>
    `,
    directives: [
        Child
    ]
})



export class Bt08 {

}