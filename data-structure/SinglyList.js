/**
 * 单链表
 *  https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571
 *  https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392
 *  https://juejin.im/post/5aa299c1518825557b4c5806
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Array:          0: 12    1: 99    2: 37
 * Linked List:    head → 12 → 99 → 37 → ∅
 *
 * 多了一个头指针，指向头结点的地址。无论链表是否为空，头指针均不为空
 */

class SinglyList {
  constructor() {
    this._length = 0;
    this.head = null; // 头结点
  }

  /**
   * 读取第i个元素
   * 1.声明一个结点p指向链表的头结点，初始化j从1开始
   * 2.当j<i时，遍历链表，让P的指针向后移动，不断指向下一个结点，j++
   * 3.若到链表末尾p为空，则第i个元素不存在
   * 4.查找成功，返回结点p的数据
   */
  getElem(index) {
    let thisNode = this.head;
    let j = 1;
    while (thisNode && j < index) {
      thisNode = thisNode.next;
      j++
    }
    if (!thisNode || j > i) {
      throw Error('wrong!')
    }
    return thisNode;
  }

  /**
   * 查找元素
   */
  find(data) {
    let thisNode = this.head;
    while(thisNode) {
      if (thisNode.data === data) {
        return thisNode
      }
      thisNode = thisNode.next
    }
    return thisNode // when undefined
  }
}
