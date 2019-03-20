# 003

## 规则
1. 给定一个字符串，请你找出其中不含有重复字符的`最长子串`的长度。

## 思路一
1. 用一个指针逐个遍历字符串中的每一项，再用一个临时变量存储未重复的字符串。
    
    ```js
    let tempStr = '';
    ...
    for (let i = 0; i < s.length; i += 1) {
      if (tempStr.indexOf(s[i]) === -1) {
        tempStr = tempStr.concat(s[i]);
      }
    }
    ```
2. 当遇到重复的字符时，在tempStr中截取掉重复的字符串并连接到当前的字符串，进行对比。如下:

    ```js

    duplicate = 'd';

    tempStr = 'acdve';

    newStr = 'ved';

    compare(tempStr,newStr)

    ```

3. 将2中长度最长的存在`hashMap`中。我们有：

    ```js
      const strMap = {};
      ...
      const index = tempStr.indexOf(s[i]);
      const str = tempStr.substring(index + 1).concat(s[i]);

      if (str.length > tempStr.length) {
        strMap[str] = str;
        tempStr = str;
      } else if (str.length <= tempStr.length) {
        strMap[tempStr] = tempStr;
        tempStr = str;
      }
    ```

4. 考虑到for循环全部走完后的边界情况，我们有:

    ```js
    for loop{
      ...
    }

    strMap[tempStr] = tempStr;
    ```

5. 此时`strMap`中记录了所有被切割的不存在的重复字符串，遍历得出最长的。我们有:

    ```js
    let finalLength = 0;
    for (const k in strMap) {
      finalLength = Math.max(k.length, finalLength);
    }

    return finalLength;
    ```

## 思路二
1. 思路一中，循环不需要再次优化，其多余的时间为遍历`hashMap`得出最终结论的时间。无需使用`hashMap`去存储，只需要记录下最长的字符串即可。如此，最终循环的复杂度从 `O(n) => O(1)`。我们有:

    ```js
      const index = tempStr.indexOf(s[i]);
      const str = tempStr.substring(index + 1).concat(s[i]);

      if (str.length > tempStr.length) {
        finalStr = finalStr.length > str.length ? finalStr : str;
        tempStr = str;
      } else if (str.length <= tempStr.length) {
        finalStr = finalStr.length > tempStr.length ? finalStr : tempStr;
        tempStr = str;
      }
      ...
      finalStr = finalStr.length > tempStr.length ? finalStr : tempStr;
    ```

