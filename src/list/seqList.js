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

  delete(number) {
    const { length } = this.list;
    const index = this.list.indexOf(number);
    if (index < 0) { return false; }
    if (index === 0) {
      this.list.shift();
      return this.list;
    } if (index === (length - 1)) {
      this.list.pop();
      return this.list;
    }
    for (let i = index; i < length; i += 1) {
      if (!this.list[i + 1]) {
        this.list.pop();
        return this.list;
      }
      this.list[i] = this.list[i + 1];
    }
    return this.list;
  }

  getLength() {
    return this.list.length;
  }

  isBlank() {
    if (this.list.length === 0) { return true; }
    return false;
  }

  search(number) {
    return this.list.indexOf(number);
  }

  print() {
    console.log(this.list.toString());
  }
}

module.exports = SeqList;
