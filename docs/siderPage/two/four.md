### 算法
#### 冒泡排序
- 思路分析: 一共两层循环, 最外层循环 r 控制每一行的遍历， 内层循环 j 控制两个相邻数之间的对比，每遍历完一行会把最大的放置最后面,
所以每遍历完一行，下一次就要少对比一次， 所以 j < arr.length -r(r 是从1开始的);

```javascript
let sort = function(arr) {
    for(let r = 1; r < arr.length; r++) {
        for (let j = 0; j < arr.length-r; j ++) {
            let temp = null;
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
```
#### 快速排序
- 思路分析:
```javascript
let qsort = function(arr) {
    let baseValue = Match.floor(arr.length/2);
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (+baseValue < arr[i]) {
            right.push(arr[i]);
        }
        else {
            left.push(arr[i]);
        }
    }
    return qsort(left).concat(baseValue, qsort(right)));
}
```
#### 二分法排序
- 思路分析:
```javascript
let sort = function(arr) {
    for(let r = 0; r < arr.length-1; r++) {
        for (let j = 0; j < arr.length-r; j ++) {
            let temp = null;
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
```


