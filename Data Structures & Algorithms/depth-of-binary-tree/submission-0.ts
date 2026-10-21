/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
const traverse = (root: TreeNode | null, curDepth: number): number => {
  if (root === null) return curDepth;

  const hasLeft = root.left !== null;
  const hasRight = root.right !== null;

  let maxLeft = 0;
  let maxRight = 0;

  maxLeft = hasLeft
    ? Math.max(traverse(root.left, curDepth), maxLeft)
    : curDepth;

  maxRight = hasRight
    ? Math.max(traverse(root.right, curDepth), maxRight)
    : curDepth;

  return 1 + Math.max(maxLeft, maxRight);
};

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if (root === null) return 0;
        return traverse(root, 0);
    }
}
