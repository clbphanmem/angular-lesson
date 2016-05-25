import { Component } from "@angular/core";
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';

// import { Bt01 } from './bt/bt01';
// import { Bt02 } from './bt/bt02';
// import { Bt03 } from './bt/bt03';
// import { Bt04 } from './bt/bt04';
import { Bt01, Bt02, Bt03, Bt04, Bt05, Bt06, Bt07, Bt08, Bt09, Bt10, Bt11 } from './bt';

@Component({
    selector: 'app',
    template: `
        <h1>Các bài học Angular 2</h1>
        <bt01></bt01>
        <hr/>
        <bt02></bt02>
        <hr/>
        <bt03></bt03>
        <hr/>
        <bt04></bt04>
        <hr/>
        <bt05></bt05>
        <hr/>
        <bt06></bt06>
        <hr/>
        <bt07></bt07>
        <hr/>
        <bt08></bt08>
        <hr/>
        <bt09></bt09>
        <hr/>
        <bt10></bt10>
        <hr/>
        <bt11></bt11>
    `,
    directives: [
        Bt01,
        Bt02,
        Bt03,
        Bt04,
        Bt05,
        Bt06,
        Bt07,
        Bt08,
        Bt09,
        Bt10, 
        Bt11
    ],
    providers: [
        HTTP_PROVIDERS,
        JSONP_PROVIDERS
    ]
})

export class AppComponent {
    ngAfterViewInit() {
        window.scrollTo(0,document.body.scrollHeight);
    }
}