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
    checkCell(cell:Cell)
    {
        if(cell.state !== 0 )
        {
          return;  
        }
        else if (cell.mine)
        {
            this.showCoor(cell);

        }
        else 
        {
            cell.state = 1;
            
        }
    }

    showCoor(cell:Cell)
    {
        console.log(cell.row + " " + cell.column);
    }
}