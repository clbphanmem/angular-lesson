import { Component, Input, Output, EventEmitter } from "@angular/core";

/**
 * Child Component
 */
@Component({
    selector: 'child',
    template: `
        <div>This is Child View</div>
        <div>Dữ liệu từ Parent: {{ parentVal }}</div>
    `
})



class Child {
    @Input() parentVal: string;
    @Output() childNode = new EventEmitter();
    constructor() {
        // Không emit trong Constructor
        //this.childNode.emit('Child Value');
    }
    
    ngOnInit() {
        this.childNode.emit('Child Value');
    }
}

/**
 * Parent Component
 */
@Component({
    selector: 'parent',
    template: `
        <div>This is Parent View</div>
        <div>Dữ liệu từ Child: {{ childVal }}</div>
        <br/>
        <child [parentVal]="parentVal" (childNode)="childGet($event)"></child>
        
    `,
    directives: [
        Child
    ]
})


class Parent {
    parentVal: string = 'Parent Value';
    childVal: any;
    
    constructor() {
        
    }
    childGet(val?) {
        this.childVal = val;
    }
    
    
}

@Component({
    selector: 'bt07',
    template: `
        <div class="lesson">
            <h3 class="title">Bài 7: Tìm hiểu Component nâng cao</h3>
            <p class="info">Cách truyền dữ liệu qua các Component parent, child trong Angular 2</p>
            <parent></parent>
            
        </div>
    `,
    directives: [
        Parent        
    ]
})



export class Bt07 {

}