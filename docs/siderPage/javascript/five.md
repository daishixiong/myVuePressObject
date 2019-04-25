### 设计模式
- 定义: 说白了就是, 编程中的 套路。
#### 单例模式
- 理解: 单体模式提供了一种将代码组织为一个逻辑单元的手段，这个逻辑单元中的代码可以通过单一变量进行访问。
- 定义: 单体模式是一个用来划分命名空间并将一批属性和方法组织在一起的对象, 如果它可以被实例化，那么它只能被实例化一次。
- 好处:
    - 可以用来划分命名空间，减少全局变量的数量。
    - 使用单体模式可以使代码组织的更为一致，使代码容易阅读和维护。
    - 可以被实例化，且实例化一次。
```javascript
    // 单体模式
    var Singleton = function(name) {
        this.name = name;
        this.instance = null;
    };
    Singleton.prototype.getName = function() {
        return this.name;
    };
    // 获取实例对象
    function getInstance(name) {
        if(!this.instance) {
            this.instance = new Singleton(name);
        }
        return this.instance;
    };
    // 测试单体模式的实例
    var a = getInstance("aa");
    var b = getInstance("bb");
    // 因为实例只实例化一次故
    console.log(a === b); // true
```
#### 命令模式
- 定义: 命令模式中的命令指的是一个执行某些特定事情的指令
- 理解: 有时候需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道请求的操作是什么，此时希望用一种松耦合的方式来设计程序代码;使得请求发送者和请求接受者消除彼此代码中的耦合关系。

#### 装饰者模式
- 当前例子中: bigMan 充当了一个装饰者的身份, 对Man进行了装饰， 衍生出 superMan类。

- 好处: 1、Man2与superMan 两个实例相互独立， 不会互相耦合(区别于 继承)。

- 缺点: 多层装饰比较复杂。

- 使用场景: 1、扩展一个类的功能。 2、动态增加功能，动态撤销。
```javascript
    function Man(name = 'manyun', age = 18) {
        this.name = name;
        this.age = age;
    }

    Man.prototype = {
        song() {
            console.log('唱歌');
        },
        dance() {
            console.log('跳舞');
        },
        mao() {
            console.log('长毛');
        }
    }
    // 装饰器
    function bigMan(target) {
        this.song = function() {
            console.log('bigMan.song');
            target.song();
            target.dance();
        }
    }
    let superMan = new bigMan(new Man());
    superMan.song();
    let Man2 = new Man();
    Man2.cry = function() {
        console.log('我不会crying!!');
    }
    Man2.song();
    Man2.dance();
    Man2.mao();
    Man2.cry();
```
#### 代理模式
- 当前例子中: 王婆(wangpo)充当了了代理, 如果西门庆 想要认识 潘金莲， 就必须要通过 王婆(媒婆)去牵线， 这样一来， 王婆就能拥有 想要与 潘金莲一样的技能，
比如: happyByMan(勾引男人) 。。。

咋一看， 代理模式与 上面提到的 装饰者模式 挺相像的。

- 区别: 装饰者模式是增强对象功能（穿不同的衣服），代理模式是控制代理的对象，但不对其做功能增加
```javascript
    function PanJinLian() {}
    PanJinLian.prototype = {
        happyByMan() {
            console.log('与男人调情');
        },
        happyByEye() {
            console.log('勾引男人');
        }
    }

    function WangPo(user) {
        this.user = user;
    }
    WangPo.prototype = {
        happyByMan() {
            console.log('我是王婆');
            this.user.happyByMan();
        }
    }

    let wangpo = new WangPo(new PanJinLian());
    wangpo.happyByMan();


    class PanJinLian {
        constructor() {
        }
        happyByMan() {
            console.log('与男人调情');
        }
        happyByEye() {
            console.log('勾引男人');
        }
    }

    class WangPo {
        constructor(user) {
            this.user = user;
        }
        happyByMan() {
            console.log('我是王婆');
            this.user.happyByMan();

        }
    }

    //let wangpo = new WangPo(new PanJinLian());
     let wangpo = new WangPo();
     wangpo.happyByMan.apply(new PanJinLian());
```
