import { Component } from "@angular/core";

@Component({
    selector: 'bt05',
    template: `
        <div class="lesson">
            <h3 class="title">Bài 5: Tìm hiểu về Attribute Directives trong Angular 2</h3>
            <p class="info">Sử dụng khi cần can thiệp vào các Element mong muốn</p>
            <p [style.color] = "'red'">Đoạn văn bản mẫu</p>
            <p [style.color] = "defaultColor" >Đoạn văn bản mẫu</p>
            <p [style.text-transform] = "'capitalize'">Đoạn văn bản mẫu</p>
            <p [style.color] = "defaultColor"  [style.text-transform] = "'capitalize'">Đoạn văn bản mẫu</p>
            <p [class.two] = "true">Đoạn văn bản mẫu</p>
            <p [class.three] = "false">Đoạn văn bản mẫu</p>  
            <p [class.one] = "bool">Đoạn văn bản mẫu</p>   
        </div>
    `,
    styles: [
        `
        .one {
            color: pink;
        }
        
        .two {
            color: blue;
        }
        
        .three {
            color: green;
        }
        `
    ]
})

export class Bt05 {
    defaultColor: string = "orange";
    bool: boolean = true;
}