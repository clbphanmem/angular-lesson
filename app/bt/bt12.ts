import { Component } from "@angular/core";
import { Directive, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[myUnless]' })
export class UnlessDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }
  @Input() set myUnless(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}

@Component({
    selector: 'bt12',
    template: `
        <div class="lesson">
            <h3 class="title">Bài 12: Structural Directives</h3>
            <p class="info">Tạo Structural Directives</p>
            <div *myUnless="true">
                <p>Đây là đoạn văn mẫu 1</p>
                <p>Đây là đoạn văn mẫu 1</p>
                <p>Đây là đoạn văn mẫu 1</p>
                <p>Đây là đoạn văn mẫu 1</p>
            </div>                          
            <div *myUnless="false">
                <p>Đây là đoạn văn mẫu 2</p>
                <p>Đây là đoạn văn mẫu 2</p>
                <p>Đây là đoạn văn mẫu 2</p>
                <p>Đây là đoạn văn mẫu 2</p>
            </div>         
        </div>
    `,
    directives: [
        UnlessDirective
    ]
})



export class Bt12 {
    
}