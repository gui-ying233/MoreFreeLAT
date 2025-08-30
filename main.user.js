// ==UserScript==
// @name         洛杉矶时报查看更多
// @namespace    https://github.com/gui-ying233/MoreFreeLAT
// @version      1.0.0
// @description  去除洛杉矶时报的订阅提示并显示更多内容（不一定能完全显示）以及去除选取限制
// @author       鬼影233
// @license      MIT
// @match        https://www.latimes.com/*
// @icon         https://www.nytimes.com/favicon.ico
// @supportURL   https://github.com/gui-ying233/MoreFreeLAT/issues
// ==/UserScript==

(() => {
	"use strict";
	document.head.appendChild(
		Object.assign(document.createElement("style"), {
			textContent:
				'modality-custom-element{display:none}body{overflow:initial!important}body.met-panel-open{user-select:initial;-moz-user-select:initial;-webkit-user-select:initial;-ms-user-select:initial}',
		})
	);
})();
