const colors = require('colors');

function numUniqueEmails(emails) {
  const { length } = emails;
  const emailMap = {};
  for (let i = 0; i < length; i += 1) {
    let tempEmail = '';
    const currentEmail = emails[i];

    // 以 @ 为界限 拆成两半
    const address = currentEmail.substring(0, currentEmail.indexOf('@'));
    const domain = currentEmail.substring(currentEmail.indexOf('@'));

    // 完成对应的规则
    const plusRules = address.substring(0, currentEmail.indexOf('+') < 0 ? currentEmail.indexOf('@') : currentEmail.indexOf('+'));
    const dotRules = plusRules.replace(/\./g, '');
    // 组合
    tempEmail = tempEmail.concat(dotRules, domain);

    emailMap[tempEmail] = tempEmail;
  }
  return Object.entries(emailMap).length;
}

const testCase = ['testemail@leetcode.com', 'testemail1@leetcode.com', 'testemail+david@lee.tcode.com'];
const length = numUniqueEmails(testCase);

console.log(colors.blue(length));
