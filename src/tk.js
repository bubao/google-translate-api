/**
 * @Description:  tk值
 * @Author: bubao
 * @Date: 2019-12-04 11:41:38
 * @LastEditors: bubao
 * @LastEditTime: 2019-12-04 18:38:34
 */
const b = function(a, b) {
	let c;
	for (let d = 0; d < b.length - 2; d += 3) {
		c = b.charAt(d + 2);
		c = c >= "a" ? c.charCodeAt(0) - 87 : Number(c);
		c = b.charAt(d + 1) === "+" ? a >>> c : a << c;
		a = b.charAt(d) === "+" ? (a + c) & 4294967295 : a ^ c;
	}
	return a;
};

const tk = function(a, TKK) {
	const e = TKK.split(".");
	const h = Number(e[0]) || 0;
	const g = [];
	let d = 0;
	for (let f = 0; f < a.length; f++) {
		let c = a.charCodeAt(f);
		let x =
			c < 128
				? (g[d++] = c)
				: (c < 2048
						? (g[d++] = (c >> 6) | 192)
						: ((c & 64512) === 55296 &&
						  f + 1 < a.length &&
						  (a.charCodeAt(f + 1) & 64512) === 56320
								? ((c =
										65536 +
										((c & 1023) << 10) +
										(a.charCodeAt(++f) & 1023)),
								  (g[d++] = (c >> 18) | 240),
								  (g[d++] = ((c >> 12) & 63) | 128))
								: (g[d++] = (c >> 12) | 224),
						  (g[d++] = ((c >> 6) & 63) | 128)),
				  (g[d++] = (c & 63) | 128));
		x = x + "";
	}
	a = h;
	for (d = 0; d < g.length; d++) {
		a += g[d];
		a = b(a, "+-a^+6");
	}
	a = b(a, "+-3^+b+-f");
	a ^= Number(e[1]) || 0;
	a < 0 && (a = (a & 2147483647) + 2147483648);
	a %= 1e6;

	return a.toString() + "." + (a ^ h);
};

module.exports = tk;
module.exports.b = b;
