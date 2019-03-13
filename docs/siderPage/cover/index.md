###  包罗万象
#### 1、vue中 如何监听 对象的某一具体属性值的变化？
```javascript
      例如: 监听 form 中的 list 的变化
      let from = {list: [], name: ''};
      组件中加入配置项:
      export default {
          computed:{
              list() {
                  return this.form.list;
              }
          },
          watch: {
              list(val) {
                  // this.form的list 变化了
                  console.log('我是this.form.list的值', val);
              }
          }
      };
```
#### 2、input框 搜狗中文输入法bug 兼容
```javascript
     var node = document.querySelector('#person');
     var cpLock = false;
     node.addEventListener('compositionstart', function() {
         cpLock = true;
         console.log('键盘输入开始的时候');
     });
     node.addEventListener('compositionend', function() {
         cpLock = false;
         if (!cpLock) console.log(this.value, '选中中文文字的时候');
     });
     node.addEventListener('input', function() {
         if (!cpLock) console.log(this.value, 'input值发生变化的时候');
     });
```
