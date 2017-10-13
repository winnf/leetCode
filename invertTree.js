var invertTree = function(node){
    if (!node);
    var right = invertTree(node.right);
    var left = invertTree(node.left);

    if(left){ node.left = right; };
    if(right) { node.right = left; };
    return node;
};
