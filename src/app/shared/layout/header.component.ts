import { Component } from '@angular/core';

@Component({
    selector: 'app-layout-header',
    templateUrl: './header.component.html',
    styles: [`
        a {font: 100% Helvetica, sans-serif;color: #2b2b2b;text-decoration: none;margin:5%; }
        header { width: 100%;border-bottom: 2px solid #2b2b2b;}
        nav { margin: 1.4%;}`
    ]
})

export class HeaderComponent {
 
}
   