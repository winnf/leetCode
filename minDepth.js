var minDepth = function(root){
    if(!root) return 0;
    var left = minDepth(root.left);
    var right = minDepth(root.right);
    return 1 + (Math.min(left, right) || Math.max(left, right));
};
