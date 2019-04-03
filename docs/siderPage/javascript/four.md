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
- 思路分析: 取数组中的一个值作为 初始基准值(baseValue),  将数组中其余值， 依次与当前基准值(baseValue)进行比较，小的放在left数组中,
大的放在right数组中, 如此 将新的left/right传入 又会有新的baseValue， 反复递归调用， 最后将 left和baseValue和right依次 concat起来即可！
```javascript
let qsort = function(arr) {
    if (arr.length <= 1) {
         return arr;
    }
    let baseValue = arr.splice(Math.floor(arr.length/2), 1);
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
    return qsort(left).concat(baseValue, qsort(right));
}
```
#### 插入排序
- 思路分析:
```javascript
     var insersort = function(arr) {
         for(i=1;i<10;i++) {
             temp = arr[i];
             j = i;
             while(j > 0 && arr[j-1] > temp) {
                 arr[j] = arr[j-1];
                 j--;
             }
             arr[j] = temp;
         }
         return arr;
     }
```

[//]: 二分法排序
[//]: 思路分析:
[//]: javascript


