/**
 * 线性表的顺序存储结构
 *
 * 在内存中开辟一片空间，然后将数据元素依次存放到这块内存中
 */
class List {

  /**
   * 注意，在这里会单独存放length属性，
   * 因为在实际情况中，"data“并没有一个length属性去读取
   */

  constructor() {
    this.data = [];
    this.length = 0;
  }

  /**
   * 基于位置获取元素
   *
   * 因为直接记录了元素的地址，所以获取元素实际上是很快的
   * 获取元素的时间复杂度是O(1)!
   */
  
  getAtIndex(index) {
    return this.data[index];
  }

  insert(index, item) {
    this.data.splice(index, 0, item);
  }

  remove(item) {
    this.data = this.data.filter(current => current !== item);
  }

  search(item) {
    const foundIndex = this.data.indexOf(item);
    if(~foundIndex) {
      return foundIndex;
    }

    return null;
  }

}

export default List;