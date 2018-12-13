const LoopLink = require('../src/link/loopLink');

const loopLink = new LoopLink(1);

loopLink.insert({ value: 2, next: null });

console.log(loopLink.getLinkLength());
console.log(loopLink.find(2));
