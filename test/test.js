/**
 * @Description:
 * @Author: bubao
 * @Date: 2019-12-04 17:28:32
 * @LastEditors: bubao
 * @LastEditTime: 2019-12-04 18:36:22
 */
const Translate = require("../src/index");

const translate = new Translate();

translate.translate("你好").then(console.log);
// const request = require("self-promise-request").init().request;

// request({
// 	uri: "https://translate.google.cn/"
// 	// headers: {
// 	// 	"user-agent":
// 	// 		"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
// 	// }
// }).then(console.log);
