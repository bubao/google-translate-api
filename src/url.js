/**
 * @Description:
 * @Author: bubao
 * @Date: 2019-12-04 13:23:17
 * @LastEditors: bubao
 * @LastEditTime: 2019-12-04 18:50:35
 */
const Url = require("url");

const parseURL = url => {
	return new Url.URL(url);
};

/**
 * 获取真实url
 * @param {string} url url
 * @param {object} params url参数object
 */
const getTrueURL = (url, params) => {
	const parse = new Url.parse(url, true);
	console.log(parse);
	url = parseURL(url);
	console.log(url.search);
	url.search = new Url.URLSearchParams({
		...parse.query,
		...params
	});
	console.log(url.toString());
	return url.toString();
};

module.exports = { getTrueURL, parseURL };
