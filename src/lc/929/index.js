const colors = require('colors');

function numUniqueEmails(emails) {
  const { length } = emails;
  const emailMap = {};
  for (let i = 0; i < length; i += 1) {
    const currentEmail = emails[i];
    let tempEmail = '';
    let tempWord = '';
    let meetPlus = false;
    let meetDomain = false;
    for (let j = 0; j < currentEmail.length; j += 1) {
      if (currentEmail[j] === '@') { meetDomain = true; }

      if (currentEmail[j] === '+') { meetPlus = true; }

      tempWord = currentEmail[j];

      // 域名之前遇到了点，那么点被忽略
      if (currentEmail[j] === '.' && !meetDomain) { tempWord = ''; }

      // 域名之前遇到了加号，那么加号到域名之前的东西都被忽略
      if (meetPlus && !meetDomain) { tempWord = ''; }

      if (tempWord !== '') { tempEmail = tempEmail.concat(tempWord); }
    }
    emailMap[tempEmail] = tempEmail;
  }
  return Object.entries(emailMap).length;
}

const testCase = ['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com'];
const length = numUniqueEmails(testCase);

console.log(colors.blue(length));
