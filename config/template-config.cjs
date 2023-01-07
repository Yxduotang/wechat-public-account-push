/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '亲爱的, 早上好',
    desc: `
      又是元气满满的一天 ૮ ・ﻌ・ა 
{{first.DATA}} 

城市：{{keyword1.DATA}} 
今天天气：{{keyword2.DATA}} 
最低气温：{{keyword3.DATA}} 
最高气温：{{keyword4.DATA}}
舒适指数：{{keyword10.DATA}}
穿衣指南：{{keyword9.DATA}}

今天是我们恋爱的第{{keyword5.DATA}}天
距离宝宝的生日还有{{keyword6.DATA}}天
距离我的生日还有{{keyword7.DATA}} 天

每日寄言：{{keyword8.DATA}} 
{{remark.DATA}}
ʕ•̫͡•ʔ•̫͡•ཻʕ•̫͡•ʔ•͓͡•ʔʕ•̫͡•ʔ•̫͡•ཻʕ•̫͡•ʔ•͓͡•ʔʕ•̫͡•ʔ•̫͡•ཻʕ•̫͡•ʔ
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
