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
  public width = 0;
  public height = 0;
  board = new Board(this.width, this.height);

  createBoard() {
    this.board = new Board(this.width, this.height);
  }

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);

    if (result === 1) {
      alert('No Bomb at (' + cell.row + "," + cell.column + ")");
    }
    else if (result === -1) {
      alert('Bomb at (' + cell.row + "," + cell.column + ")");
      this.board.showBombs();
    }
  }
}
