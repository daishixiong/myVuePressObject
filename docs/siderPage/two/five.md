### 设计模式
定义: 说白了就是, 编程中的 套路。
#### 装饰者模式
当前例子中: bigMan 充当了一个装饰者的身份, 对Man进行了装饰， 衍生出 superMan类。

好处: 1、Man2与superMan 两个实例相互独立， 不会互相耦合(区别于 继承)。

缺点: 多层装饰比较复杂。

使用场景: 1、扩展一个类的功能。 2、动态增加功能，动态撤销。
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
当前例子中: 王婆(wangpo)充当了了代理, 如果西门庆 想要认识 潘金莲， 就必须要通过 王婆(媒婆)去牵线， 这样一来， 王婆就能拥有 想要与 潘金莲一样的技能，
比如: happyByMan(勾引男人) 。。。

咋一看， 代理模式与 上面提到的 装饰者模式 挺相像的。

区别: 装饰者模式是增强对象功能（穿不同的衣服），代理模式是控制代理的对象，但不对其做功能增加

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
