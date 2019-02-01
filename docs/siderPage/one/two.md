###  Vue

>请求方式：GET
>
>path: api/priv/byCompany
>
#### 请求参数
|参数名             |参数类型 |必传    |缺省值  |描述    |
|              :-   | -----:  | -----: | -----: | :----- |
| apikey            | string  | y      |        | 身份   |
| systemCode        | string  | y      |        |系统编码|
| structCompanyCode | string  | y      |        |系统编码|

#### 错误返回示例
```
{
   code: 400,
   status: 200,
   message: "系统编码不能为空"
}
```
#### 正常返回示例
```
{
  dataPriv: [
    "YCDBDQ",
    "YCYY",
    "YCZLS"
  ],
  funcPriv: [
    "01"
  ],
  code: 0,
  status: 200,
  message: "请求成功"
}
```
