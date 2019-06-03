import LinkedList from '../LinkedList'

describe('测试链表',() =>{
  it('创建一个空列表',() =>{
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
  })
})