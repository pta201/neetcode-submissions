/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if (!list1) return list2;
        if (!list2) return list1;
        let cur1 = list1;
        let cur2 = list2;
        const dummy = new ListNode();
        let result = dummy;

        while (cur1 && cur2) {
            if (cur1?.val <= cur2?.val) {
                result.next = cur1;
                cur1 = cur1.next;
            } else {
                result.next = cur2;
                cur2 = cur2.next;
            }
            result = result.next;
        }

        if (cur1) {
            result.next = cur1;
        } else {
            result.next = cur2;
        }

        return dummy.next;
    }
}
