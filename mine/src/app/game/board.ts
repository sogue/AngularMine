import { Cell } from "./cell";

export class Board {
    cells: Cell[][] = [];
    constructor (width: number, height: number){
    for(let y = 0; y<height;y++)
    {
        this.cells[y] = [];    

        for(let x = 0; x<width;x++) 
        {
            this.cells[y][x] = new Cell(y,x);  

                if(y % 2 == 1 && x % 2 == 1)
                {
                    this.cells[y][x].mine = true;  
                }
        }
    }
    }

    checkCell(cell:Cell) : number
    {
        if(cell.state !== 0 )
        {
          return 1;  
        }
        else if (cell.mine)
        {
            return -1;  
        }
        else 
        {
            cell.state = 1;
            return 1;  
        }
    }

    showBombs() {
        for (const row of this.cells) {
          for (const cell of row) {
            if (cell.state === 0) {
                cell.state = 1;
                }
            }
        }
    }
}