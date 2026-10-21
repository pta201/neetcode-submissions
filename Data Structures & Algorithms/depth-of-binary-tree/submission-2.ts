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
const traverse = (root: TreeNode | null): number => {
  if (root === null) return 0;
  return 1 + Math.max(traverse(root.left), traverse(root.right));
};


class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if (root === null) return 0;
        return traverse(root);
    }
}
