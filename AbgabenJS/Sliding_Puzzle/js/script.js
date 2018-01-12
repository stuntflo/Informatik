var context = document.getElementById('puzzle').getContext('2d');   
var img = new Image();                                             
img.src = './img/slide.jpg';                                         
img.addEventListener('load', drawTiles, false);                     

var solved = false;
var boardSize = document.getElementById('puzzle').width;
var tileCount = 3;
var tileSize = boardSize / 3;                                       

var click = new Object;                                          
click.x = 0;                                                   
click.y = 0;                                                   

var empty = new Object;
empty.x = 0;
empty.y = 0;

var parts;                                                      
setBoard();                                                         

function setBoard()                                                
{
    parts = new Array(tileCount);
    for (var i = 0; i < tileCount; ++i) 
    {
        parts[i] = new Array(tileCount);
        
        for (var j = 0; j < tileCount; ++j) 
        {
            parts[i][j] = new Object;
            parts[i][j].x = (tileCount - 1) - i;
            parts[i][j].y = (tileCount - 1) - j;
        }
    }
    empty.x = parts[tileCount - 1][tileCount - 1].x;
    empty.y = parts[tileCount - 1][tileCount - 1].y;
    solved = false;
}

document.getElementById('puzzle').onclick = function(e)             
{
    click.x = Math.floor((e.pageX - this.offsetLeft) / tileSize);
    click.y = Math.floor((e.pageY - this.offsetTop) / tileSize);
    
    if (distance(click.x, click.y, empty.x, empty.y) == 1) 
    {
        slideTile(empty, click);
        drawTiles();
    }
    if (solved)
    {
        setTimeout(function() {alert("Sliding Puzzle Solved");}, 500);
    }
};

function drawTiles()                                                
{
  context.clearRect ( 0 , 0 , boardSize , boardSize );

    for (var i = 0; i < tileCount; ++i) 
    {
        for (var j = 0; j < tileCount; ++j) 
        {
            var x = parts[i][j].x;
            var y = parts[i][j].y;
            
            if(i != empty.x || j != empty.y || solved == true) 
            {
                context.drawImage(img, x * tileSize, y * tileSize, tileSize, tileSize, i * tileSize, j * tileSize, tileSize, tileSize);
            }
        }
    }
}

function distance(x1, y1, x2, y2)                                   
{
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function slideTile(toLoc, fromLoc) 
{
    if (!solved) 
    {
        parts[toLoc.x][toLoc.y].x = parts[fromLoc.x][fromLoc.y].x;
        parts[toLoc.x][toLoc.y].y = parts[fromLoc.x][fromLoc.y].y;
        parts[fromLoc.x][fromLoc.y].x = tileCount - 1;
        parts[fromLoc.x][fromLoc.y].y = tileCount - 1;
        toLoc.x = fromLoc.x;
        toLoc.y = fromLoc.y;
        checkSolved();
    }
}

function checkSolved() {
  var flag = true;
  for (var i = 0; i < tileCount; ++i) {
    for (var j = 0; j < tileCount; ++j) {
      if (parts[i][j].x != i || parts[i][j].y != j) {
        flag = false;
      }
    }
  }
  solved = flag;
}
