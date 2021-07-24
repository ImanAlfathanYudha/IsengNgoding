// console.log("Hello world! Hello world! Hello world!");
class Node {
  constructor(element){
    this.element = element
    this.nest = null
  }
}

class Queue {
  constructor(){
    this.ll = new LinkedList()
    this.head = null
  }

  push(element){
    console.log("Tes push ", element)
    this.ll.Add(element)
  }

  pop() {
    console.log("Tes pop ",this.head)
    if (!this.head) {
      return null
    }
    let temp = this.head
    this.head=this.head.next
    this.size=this.size-1
    return temp.element
  }
}

class LinkedList {
  constructor(){
    this.head = null
    this.size = 0
  }

  Add(element) {
    var nodeNew = new Node(element)
    var nodeCurrent
    if (this.head==null){
      this.head=nodeNew
    } else {
      //
      nodeCurrent = this.head
      while(nodeCurrent.next) {
        nodeCurrent=nodeCurrent.next
      }
      nodeCurrent.next=nodeNew
    }
    console.log("Tes nodeNew ",nodeNew)
    this.size=this.size+1
  }

  Print() {
    var nodeCurrent = this.head
    var result = ""
    while(nodeCurrent) {
      result = result + nodeCurrent.element
      nodeCurrent=nodeCurrent.next
      }
      console.log(result)
  }

  Remove() {
    
  }

}


// let ll = new LinkedList()
// ll.Add(1)
// ll.Add(2)
// ll.Print() // print 1, 2
// ll.Add(3)
// ll.Add(4)
// ll.Print() // print 1, 2, 3, 4


// let que = new Queue()
// que.push(1)
// que.push(2)
// console.log(que.pop()) //print 1
// que.push(3)
// console.log(que.pop()) //print 2
// console.log(que.pop()) //print 3
// console.log(que.pop()) //print null