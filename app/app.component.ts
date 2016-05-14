import { Component } from "@angular/core";
// import { Bt01 } from './bt/bt01';
// import { Bt02 } from './bt/bt02';
// import { Bt03 } from './bt/bt03';
// import { Bt04 } from './bt/bt04';
import { Bt01, Bt02, Bt03, Bt04, Bt05, Bt06 } from './bt';

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
    `,
    directives: [
        Bt01,
        Bt02,
        Bt03,
        Bt04,
        Bt05,
        Bt06
    ]
})

export class AppComponent {
    
}