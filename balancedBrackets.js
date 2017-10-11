//linear time complexity
var balancedBrackets = function(str){
    var myStack = [];
    var open = { '{': '}', '[': ']', '(':')' };
    var closed = { '}': true, ']': true, ')': true };

    for (var i=0; i<str.length; i++){
        var chr = str[i];
        if (open[chr]){
            myStack.push(chr);
        } else if (closed[chr]){
            if (open[myStack.pop()] !== chr){
                return false;
            }
        }
    }
    return myStack.length === 0;
};
