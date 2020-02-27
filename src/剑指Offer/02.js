// 实现单例模式

let instance = null;

class Person {
  constructor(name) {
    this.name = name;
    if (!instance) { instance = this; }
    return instance;
  }
}

console.log(new Person('Name'));
console.log(new Person('Hello'));
