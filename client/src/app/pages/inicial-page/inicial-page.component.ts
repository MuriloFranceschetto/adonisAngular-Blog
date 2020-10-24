import {Component, OnInit} from '@angular/core';

export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
}

@Component({
    selector: 'app-inicial-page',
    templateUrl: './inicial-page.component.html',
    styleUrls: ['./inicial-page.component.scss']
})
export class InicialPageComponent implements OnInit {

    constructor() {
    }

    tiles: Tile[] = [
        {text: 'One', cols: 2, rows: 4, color: 'lightblue'},
        {text: 'Two', cols: 2, rows: 4, color: 'lightgreen'},
        {text: 'Three', cols: 2, rows: 4, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 4, color: '#DDBDF1'},
    ];

    ngOnInit(): void {
    }

}
