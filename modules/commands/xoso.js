module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "LVBang",
  description: "Random ảnh loli khi sai lệnh",
  commandCategory: "Hình ảnh",
  usages: "noprefix",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://bao2711.up.railway.app/').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `Lệnh không tồn tại\nVui lòng bấm ${global.config.PREFIX}help để xem danh sách lệnh hiện có 🐣`,
            attachment: fs.createReadStream(__dirname + `/cache/sailenh.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sailenh.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/sailenh.${ext}`)).on("close", callback);
      })
}
