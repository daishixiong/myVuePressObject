### 继承
#### 1、原型链继承
```javascript
    function Parent() {}
    function Child() {}
    Child.prototype = new Parent();
    let instance = new Child();
    缺点:
        1、无法实现多继承
        2、创建子类时， 无法想父类传参  **
        3、原型共享(来自原型对象的所有实例共享)   **
```
#### 2、构造继承
```javascript
    function Child() {
         Parent.call(this);
    }
    let instance = new Child();
    缺点：
        1、实例并不是父类的实例， 只是子类的实例
        2、只能继承父类的实例属性和方法， 不能继承原型属性/方法
        3、无法实现函数复用， 每个子类都有父类实例函数的副本, 影响性能
```
#### 3、实例继承
```javascript
    function Child() {
        var instance = new Parent();
        return instance;
    }
    let instace = new Child();
    特点：
        1、不限制调用方式， new 子类()/ 子类() ， 效果相同
    缺点：
        1、实例是父类的实例， 不是子类的实例
        2、不支持多继承
```
#### 4、拷贝继承
```javascript
     function Child() {
         var animal = new Parent();
         for(var p in animal) {
             animal.prototype[p] = animal[p];
         }
     }
     缺点:
        1、效率较低， 内存占用高
        2、无法获取父类不可枚举的方法
```
#### 5、组合继承 (原型继承 + 构造继承)
```javascript
    function Child() {
       Parent.call(this);
    }
    Child.prototype = new Parent();
    Child.prototype.constructor = Child;
    缺点:
        1、调用了两次父类构造函数，生成了两份实例(子类实例将子类原型上的那份屏蔽了)
```
#### 6、寄生组合继承
```javascript
    function Child() {
     Parent.call(this);
    }
    (function() {
     let Super = function() {};
     Super.prototype = Parent.prototype;
     Child.prototype = new Super();
    })()
    Child.prototype.constructor = Child;
    特点： 完美
```
