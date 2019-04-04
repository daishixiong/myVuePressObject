### this
- this优先级
```javascript
    let a = { name: '呵呵' }
    function foo() {
      console.log(this.name)
    }
    foo.bind(a)() // => '呵呵'
```
<a>
    <img src='../../assets/img/this.png'/>
</a>
