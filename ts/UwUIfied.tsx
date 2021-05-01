// idk why you'd use this but here it is

import * as React from 'react';

export const uwuify = (str: string) => {
	let r = [[,]];
	r.push([/[rl]/gi, 'w']);
	r.push([/youw/gi, 'ur']);
	r.push([/you/gi, 'u']);
	r.push([/awe(?![a-z])/gi, 'r']);
	r.push([/ove/gi, 'uv']);
	r.push([/(n)([aeiou])/gi, '$1y$2']);
	for (var pair in r) {
		str = str.replace(r[pair][0], r[pair][1]);
	}
	return str;
};

export const uwuFaces = [
	':3',
	'(^Â³^)',
	'uwu',
	'UwU',
	'owo',
	'OwO',
	':////',
	';-;;;',
	'>.<',
	'(ꈍᴗꈍ)',
	'^•ﻌ•^',
	'(ˆ ﻌ ˆ)♡',
	':3',
	':3', // important enough to have twice
	'ʘwʘ',
	'rawr x3',
	'nyaa~~',
	'/(^•ω•^)',
];

export const uwuifyWithFaces = (
	input:
		| string
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal
) => {
	let uwuText = uwuify(input.toString());

	const facecount = Math.max(
		1,
		Math.round(uwuText.length / 10) * Math.random()
	);
	for (var i = facecount; i > 0; i--) {
		const pivot = Math.floor(Math.random() * uwuText.length);
		uwuText =
			uwuText.substring(0, pivot) +
			(uwuText.substring(pivot) + ' ').replace(
				' ',
				' ' + uwuFaces[Math.floor(Math.random() * uwuFaces.length)] + ' '
			);
	}

	return uwuText;
};

export default class UwUIfy extends React.Component {
	// Static Methods
	static uwuify = uwuify;
	static uwuifyWithFaces = uwuifyWithFaces;
	static uwuFaces = uwuFaces;

	// Render Func
	render() {
		const a = (
			<div className={`UwUifyEl 0J3Elements-UwUify`}>
				{uwuifyWithFaces(this.props.children)}
			</div>
		);
		return a;
	}
}
