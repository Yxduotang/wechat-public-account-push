/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx542e02addc1fe024',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '622498e5fe4b81656d8abad24f75cbb3',

  PROVINCE: '河南',
  CITY: '洛阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '婧宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'owbFF6uRatQ_tJZ1doZmaOVKq0zA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Y3LRX-OAO36uWLGob4QiGfY8lI0VOtNTpg6FqrI93HY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-02',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '北鼻', year: '2000', date: '06-02',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '哥哥', year: '2001', date: '09-09',
        },
        {
          type: '节日', name: '相识纪念日', year: '2019', date: '01-31',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-01-31' },
      ],
    },
  ],

}

module.exports = USER_CONFIG

