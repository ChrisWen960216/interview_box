class SeqList {
  constructor(array) {
    this.list = array || [];
  }

  insert(index, number) {
    const { length } = this.list;
    // 超出当前长度的位置
    if (length < index) { return false; }
    // 非法的位置
    if (index < 0) { return false; }
    let i = length;
    while (i > index) {
      this.list[i] = this.list[i - 1];
      i -= 1;
    }
    this.list[i] = number;
    return this.list;
  }

  print() {
    console.log(this.list);
  }
}

const A = new SeqList([1, 2, 3, 4]);
A.insert(4, 10);
A.print();
