var islandPerimeter = function(grid){
    var res = 0,
        rows = grid.length,
        cols = grid[0].length;

    for(var i=0; i<rows; i++){
        for(var j=0; j<cols; j++){
            if(grid[i][j] == 1){
                var count = 0;
                if(i+1<rows && grid[i+1][j] == 1) count++;
                if(i-1>=0 && grid[i-1][j] == 1) count++;
                if(j+1<cols && grid[i][j+1] == 1) count++;
                if(j-1>=0 && grid[i][j-1] == 1) count++;

                res += 4-count;
            }
        }
    }
    return res;
};
