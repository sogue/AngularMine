import { Component } from '@angular/core';
import { Board } from './game/board';
import { Cell } from './game/cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mine';
  board = new Board(23, 11);

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);

    if (result === 1) {
      alert('no bomb ' + cell.row + " " + cell.column + "");
    }
    else if (result === -1) {
      alert('bomb ' + cell.row + " " + cell.column + "");
      this.board.showBombs();
    }
  }
}
