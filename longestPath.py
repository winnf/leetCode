def height(node):
    #finds the maximum depth of the tree
    if node is None:
        return 0
    return 1+max(height(node.left), height(node.right))

def longestPath(root):
    #when tree is empty
    if root is None:
        return 0
    leftPath = height(root.left)
    rightPath = height(root.right)
    leftLongest = longestPath(root.left)
    rightLongest = longestPath(root.right)

    return max(leftPath + rightPath + 1, max(leftLongest, rightLongest))

#time complexity = O(n^2)
#to optimize, could find the height in the longestPath directly by passing it as an argument
#that optimized solution would have a time complexity of O(n)
