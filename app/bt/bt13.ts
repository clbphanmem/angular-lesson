import { Component } from "@angular/core";


@Component({
    selector: 'bt13',
    template: `
        <div class="lesson">
            <h3 class="title">Bài 13: Lifecycle Hooks</h3>
            <p class="info">Các ưu tiên khi chạy Hook trong angular2 - Vui lòng F12 để xem Console</p>            
        </div>
    `
})

export class Bt13 {
    ngOnInit() {
        console.log('ngOnInit');
    }
    
    ngOnChanges() {
        console.log('ngOnChanges');
    }
    
    ngDoCheck() {
        console.log('ngDoCheck');
    }
    
    ngOnDestroy() {
        console.log('ngOnDestroy');
    }
    
    ngAfterContentInit() {
        console.log('ngAfterContentInit');
    }
    
    ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
    }
    
    ngAfterViewInit() {
        console.log('ngAfterViewInit');
    }
    
    ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
    }
}