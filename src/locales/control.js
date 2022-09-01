const multiple = require('./world.json');

// Run: node ./src/locales/control.js
const splitedLangs = {};

multiple.forEach(string => {
	for (const lang in string) {
		if (!(lang in splitedLangs)) {
			splitedLangs[lang] = {};
		}

		if (Object.hasOwnProperty.call(string, lang)) {
			splitedLangs[lang][
				Object.hasOwnProperty.call(string, 'name') ? string.name : string.en
			] = string[lang];
		}
	}
});

const fs = require('fs');

for (const lang in splitedLangs) {
	if (lang === 'name') continue;
	const dictstring = JSON.stringify(splitedLangs[lang]);
	fs.writeFile(
		`./src/locales/${lang}.json`,
		dictstring,
		function (err, result) {
			if (err) console.log('error', err);
		}
	);
}
