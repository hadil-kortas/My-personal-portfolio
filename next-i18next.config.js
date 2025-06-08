/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");
const htmlescaper = require("html-escaper");

/** @type {import("next-i18next").UserConfig} */
const i18nNextConfig = {
	i18n: {
		defaultLocale: "en",
		locales: ["en", "fr", "nl"],
	},
	fallbackLng: "en",

	interpolation: {
		escape: (data) => {
			if (typeof data === "string") {
				return htmlescaper.unescape(htmlescaper.escape(data));
			}
			return data;
		},
		prefix: "{",
		suffix: "}",
	},
	serializeConfig: false,
	localeStructure: "{lng}/{ns}",
	localePath: path.resolve("./public/locales"),
	react: {
		bindI18nStore: "added",
		transKeepBasicHtmlNodesFor: ["br", "b", "strong", "i", "em", "p", "code"],
	},

	/**
	 * Allows to get the latest translation on development
	 * https://github.com/i18next/next-i18next#reloading-resources-in-development
	 */
	reloadOnPrerender: process.env.NODE_ENV === "development",
	debug: !!process.env.DEBUG,
};

module.exports = i18nNextConfig;
