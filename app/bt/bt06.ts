import { Component, Directive, Input, ElementRef } from "@angular/core";

@Directive({
    selector: '[myHighlight]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HighlightDirective {
    private color: string = 'yellow';
    @Input('myHighlight') highLightContent: string;
    
    @Input() set defaultColor(color: string) {       
        this.color = color || this.color;
    }
    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = this.color;
        // Ví dụ trước khi dùng ngOnInit
        // setTimeout(() => {
        //     if (this.highLightContent) {
        //     el.nativeElement.innerHTML = this.highLightContent;
        // }
        // console.log(this.highLightContent);
        // }, 1000);
    }

    onMouseEnter() { this.highlight("yellow"); }
    onMouseLeave() { this.highlight(null); }
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
    
    ngOnInit() {
        if (this.highLightContent) {
            this.el.nativeElement.innerHTML = this.highLightContent;
        }
    }




}

@Component({
    selector: 'bt06',
    template: `
        <div class="lesson">
            <h3 class="title">Bài 6: Custom Attribute Directives</h3>
            <p class="info">Sử dụng khi cần can thiệp vào các Element mong muốn</p>
            <p [myHighlight] = "'Hello World'" [defaultColor]="'red'">Đoạn văn bản mẫu</p>
        </div>
    `,
    directives: [
        HighlightDirective
    ]
})

export class Bt06 {

}