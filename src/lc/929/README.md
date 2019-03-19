# 929

## 思路一
1. 规则
    1. 在遇到`@`之前，`.`直接被忽略
    2. 在遇到`@`之前，`+`到`@`之间的所有内容都被忽略
    3. 在遇到`@`之后，`+`和`.`被视为普通字符串，不做任何处理

2. 方案
    1. 将单个电子邮件拆解成单个字符串，用指针逐个遍历。
    2. 用一个临时变量来存储本次遍历完单个电子邮件地址后得到的邮件地址。我们有：

        ```js
        let tempEmail = '';
        ```

    3. 上述规则的生效临界点在是否遇到`@`,可以用一个临时变量来记录该状态。我们有：

        ```js
        let meetDomain = false;
        ...
        if(currentEmail[j] === '@' ){
         meetDomain = true;
        }
        ```

    4. 如果遇到了`.`, 我们有:

        ```js
        if (currentEmail[j] === '.' && !meetDomain) { tempWord = ''; }
        ```

    5. 如果遇到了`+`, 因为`+`~`@`之间都要被忽略，可以用一个临时变量来记录需要被忽略的状态，我们有：

        ```js
        let meetPlus = false;
        ...
        if (currentEmail[j] === '+') { meetPlus = true; }
        ...
        // 域名之前遇到了加号，那么加号到域名之前的东西都被忽略
        if (meetPlus && !meetDomain) { tempWord = ''; }
        ```

    6. `tempEmail`应该记录下不为空的字符

        ```js
        if (tempWord !== '') { tempEmail = tempEmail.concat(tempWord); }
        ```
    7. 遍历完成后的电子邮件地址可以记录在一个`map`里，key和value都是它的本身。最后直接获取该`map`的key长度即可获得结果。
        ```js
        const {length} = Object.entries(emailMap);
        ```
    8. 时间复杂度为: `O(n * C)`,其中`n`为数组长度,`C`为单个电子邮件地址长度

## 思路二
1. 以`@`为界限分割所有的email，如此，所有的规则只需要作用于`address`,我们有:
    
    ```js
    const address = currentEmail.substring(0, currentEmail.indexOf('@'));
    const domain = currentEmail.substring(currentEmail.indexOf('@'));
    ```

2. 用正则替换掉所有的点(规则1)，切割掉`+`到`@`之间的所有字符串(规则2)，我们有：
    
    ```js
    const plusRules = address.substring(0, currentEmail.indexOf('+') < 0 ? currentEmail.indexOf('@') : currentEmail.indexOf('+'));
    const dotRules = plusRules.replace(/\./g, '');
    ```
3. 最后组合。
    
    ```js
    tempEmail = tempEmail.concat(dotRules, domain);
    ```

4. 算法复杂度为： `O(n * C)`,其中`n`为数组长度,`C`为单个电子邮件地址长度。
