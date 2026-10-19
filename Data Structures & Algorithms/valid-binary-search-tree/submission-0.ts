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

const NODE_MIN_VAL = -1000000000;
const NODE_MAX_VAL = 1000000000;
const isValidTreeNode = (node: unknown): node is TreeNode => {
  if (
    typeof node !== "object" ||
    typeof node === "undefined" ||
    node === null
  ) {
    return false;
  }
  return true;
};
const traverse = (node: TreeNode, min: number, max: number): boolean => {
  const nodeVal = node.val;
  if (nodeVal >= max || nodeVal <= min) return false;

  const rootNode = isValidTreeNode(node) ? node : null;
  const leftNode = isValidTreeNode(rootNode?.left) ? rootNode.left : null;
  const rightNode = isValidTreeNode(rootNode?.right) ? rootNode?.right : null;

  const hasRoot = rootNode !== null;
  const hasLeft = leftNode !== null;
  const hasRight = rightNode !== null;
  let isRightValid = true;
  let isLeftValid = true;
  if (hasLeft) {
    isLeftValid = traverse(leftNode, min, rootNode?.val ?? NODE_MAX_VAL);
  }
  if (hasRight) {
    isRightValid = traverse(rightNode, rootNode?.val ?? NODE_MIN_VAL, max);
  }
  return isLeftValid && isRightValid;
};
class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
   isValidBST(root: TreeNode | null): boolean {
    const rootNode = isValidTreeNode(root) ? root : null;
    const leftNode = isValidTreeNode(rootNode?.left) ? rootNode.left : null;
    const rightNode = isValidTreeNode(rootNode?.right) ? rootNode?.right : null;
    return traverse(rootNode, NODE_MIN_VAL, NODE_MAX_VAL);
  }
}

