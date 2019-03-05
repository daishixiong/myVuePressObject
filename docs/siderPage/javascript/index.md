### 你不知道的javascript!
#### 1、typeOf
|typeof | 运行时类型 |
|-------- | -----:|
|  object |         Null |
| object  |       Object |
| function |      Object |
|  number |      Number |
|  string |  String |
|  boolean |     Boolean |
|  undefined |   Undefined |
|  symbol   |    Symbol |
#### 2、 slice、splice、slipt区别
 #### slice(头下表，尾下表) --- 复制
       ⚠️ 1、不改变原数组，返回新数组。
          2、含头不含尾
 #### splice() --- 删除、替换 原数组
       删除： splice(头坐标，删除个数);
       替换： splice(要删除元素的头坐标，删除几个，插入的内容);
       例：移除数组的第三个元素，并在数组第三个位置添加新元素:
       var fruits = ["Banana", "Orange", "Apple", "Mango"];
       fruits.splice(2,1,"Lemon","Kiwi");    // Banana,Orange,Lemo n,Kiwi,Mango
 #### 分解字符串（爆炸)
          flet a = 'a-b-c-d';
          a.split('-');  //    ['a','b','c','d']
