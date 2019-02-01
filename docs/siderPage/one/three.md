###  Vuex

>请求方式：GET
>
>path: api/priv/byCompany
>
#### 请求参数
|参数名             |参数类型 |必传    |缺省值  |描述    |
|              :-   | -----:  | -----: | -----: | :----- |
| apikey            | string  | y      |        | 身份   |
| hospitalCodes     | array   | y      |        |医院编码，对应组织结构里面structOutCode|

#### 错误返回示例
```
{
   code: 400,
   status: 200,
   message: "医院编码不能为空"
}
```

#### 正常返回示例
```
{
 "detail": [{
  "id": 85,
  "clinicId": "775",
  "parentId": 12,
  "clinicName": "宠颐生石家庄锅氏健康路分院",
  "clinicShortname": "宠颐生石家庄锅氏健康路",
  "brand": "宠颐生",
  "brandId": 3,
  "subBrand": "",
  "brandCode": "CX0093",
  "clinicStatus": true,
  "clinicType": "未知",
  "createTime": "2017-10-01 00:00:00",
  "province": "河北省",
  "city": "石家庄",
  "address": "建设大街与健康路交叉口东行100米路南钓鱼台名邸底商",
  "dean": "",
  "deanNumber": "",
  "innerContactor": "",
  "innerContactorPhone": "",
  "hospitalPhone": "",
  "hasMedcine": false,
  "hasMeirong": false,
  "hasLingshou": false,
  "system": "小暖",
  "systemId": 9512,
  "addTime": "2017-10-09 15:37:51",
  "lastModify": "2018-04-03 15:15:55"
 }],
 "code": 0,
 "status": 200,
 "message": "请求成功"
}
```