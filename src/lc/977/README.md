# 977

## 规则
1. 给定一个从小到大排列的数组，将他的每一项依次平方后再次按照从小到大排列并输出。

## 思路一
1. `reduce` 累加求平方，最后排序。我们有：
    
    ```js
    function reducerHandle(accumulator, current) {
      accumulator.push(current * current);
      return accumulator;
    }

    function sortedSquares(A) {
      return A.reduce(reducerHandle, []).sort((a, b) => (a - b));
    }
    ```

## 思路二
1. 思路一中，先求出平方，最后再排序。考虑到的优化点: `边求平方，边排序`。

2. 考虑到平方后`0`一定最小，数组按照从小到大排列，那么在由`负 - 正`那一项作为中间点，依次往两边计算，此时对于`正`或者`负`的单边来说，后面的平方一定大于前面的。

3. 找到中间点。我们有:

    ```js
    while (A[breakPoint] < 0) {
      breakPoint += 1;
    }
    ```

4. 正负方向分别求和，总是将最小的推入结果数组。我们有:

    ```js
    let i = breakPoint;
    let j = breakPoint - 1;

    while (j >= 0 && i <= A.length) {
      const iSq = A[i] * A[i];
      const jSq = A[j] * A[j];
      if (iSq <= jSq) {
        resultArray.push(iSq);
        i += 1;
      } else {
        resultArray.push(jSq);
        j -= 1;
      }
    }
    ```

5. 处理临界条件。当步骤4循环完成后，存在2种结果。`i`走到了终点，或者`j`走到了终点。需要指出，不论是`i`或者`j`，其剩余的数的平方一定比现有的每一个数的平方都大。

    ```js
    while (i < A.length) {
      resultArray.push(A[i] * A[i]);
      i += 1;
    }

    while (j > 0) {
      resultArray.push(A[j] * A[j]);
      j -= 1;
    }
    ```

