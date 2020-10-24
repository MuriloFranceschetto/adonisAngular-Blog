import {Component, OnInit} from '@angular/core';

export interface Tile {
    cols: number;
    rows: number;
    text: string;
    border: string;
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
        {text: 'One', cols: 4, rows: 1, border: '1px solid white'},
        {text: 'Two', cols: 2, rows: 4, border: '1px solid white'},
        {text: 'Three', cols: 2, rows: 4, border: '1px solid white'},
        {text: 'Four', cols: 2, rows: 4, border: '1px solid white'},
        {text: 'Four', cols: 2, rows: 4, border: '1px solid white'},
        {text: 'Four', cols: 2, rows: 4, border: '1px solid white'},
        {text: 'Four', cols: 2, rows: 4, border: '1px solid white'},
        {text: 'Four', cols: 2, rows: 4, border: '1px solid white'},
        {text: 'Four', cols: 2, rows: 4, border: '1px solid white'},
        {text: 'Four', cols: 2, rows: 4, border: '1px solid white'},
    ];

    ngOnInit(): void {
    }

}
