"use strict"
const REDISClient = global.Server.redis
const baiChuan = global.Server.baiChuanIM;

/**
 * 连接
 */
REDISClient.once("connect",async()=>{
  await REDISClient.select(global.Config.redisDB.db2)
  await REDISClient.subscribe("__keyevent@"+global.Config.redisDB.db2+"__:expired");
})

/**
 * 监听消息
 */
REDISClient.on("message",async(channel,msg)=>{
  var str = msg.split("&");
  console.log('str.length===>',str.length);
  console.log('str===>', str);
  /*************rule: key=xxx+"&"+xxx+"&"+xxx******************************/   
  if(str.length === 3){   //商品设置提醒后,定时提醒
    if (str[2] === "xxx"){  //设置提醒
      await xxx(str[0], str[1])
    }
  } else if (str.length === 4){
    if (str[3] === "xxx"){
    }
  }
})

/**
 * xxx
 */
async function xxx(){

}