/**
 * @Description:
 * @Author: bubao
 * @Date: 2019-12-04 12:02:21
 * @LastEditors: bubao
 * @LastEditTime: 2019-12-04 18:52:51
 */
const PromiseRequest = require("self-promise-request");
const config = require("../config/config");
const url = require("./url");
const getttk = require("./tk");
// const languages = require("./languages");
const request = PromiseRequest.init().request;

class Translate {
	constructor() {
		this.tkk = null;
		this.uri =
			"http://translate.google.com/translate_a/single?client=t&sl=zh-CN&tl=en&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&pc=1&otf=1&ssel=6&tsel=3&kc=0&tk=" +
			"tk" +
			"&q=" +
			"zh";
	}

	async getTTK() {
		const { body } = await request({
			uri: "https://translate.google.cn/",
			headers: {
				"user-agent":
					"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
			}
		});
		const RegExpStr = /tkk:'(.*?)?'/;
		const TKK = RegExpStr.exec(body)[1];
		console.log(TKK);
		return TKK;
	}

	async translate(text, tkk) {
		// if (!this.tkk) {
		tkk = await this.getTTK();
		// }
		const etext = encodeURI(text);
		const tk = getttk(etext, tkk);
		console.log(tk);
		const uri = url.getTrueURL(config.uri, { tk, q: text });
		console.log(uri);
		const { body, error } = await request({
			uri,
			headers: {
				"user-agent":
					"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
			}
		});
		return body;
	}
}

module.exports = Translate;
