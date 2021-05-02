// idk why you'd use this but here it is

import * as React from 'react';

const uwuify = (
	sttr:
		| string
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal
) => {
	let str: string = sttr.toString();
	let r = [[,]];
	r.push([/[rl]/gi, 'w']);
	r.push([/youw/gi, 'ur']);
	r.push([/you/gi, 'u']);
	r.push([/awe(?![a-z])/gi, 'r']);
	r.push([/ove/gi, 'uv']);
	r.push([/(n)([aeiou])/gi, '$1y$2']);
	for (const pair in r) {
		str = str.replace(r[pair][0], r[pair][1]);
	}
	str = str.split('this').join('dis');
	return str;
};

const uwuFaces = [
	'(^Â³^)',
	'uwu',
	'UwU',
	'owo',
	'OwO',
	'>.<',
	'(ꈍᴗꈍ)',
	'^•ﻌ•^',
	'(ˆ ﻌ ˆ)♡',
	':3',
	':3',
	':3', // important enough to have 3 times
	'ʘwʘ',
	'rawr x3',
	'nyaa~~',
	'/(^•ω•^)',
	'x3',
	'rawr~',
];

const uwuifyWithFaces = (
	input:
		| string
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal
) => {
	let uwuFaces = UwUIfy.uwuFaces;
	let uwuText = uwuify(input.toString());

	const facecount = Math.max(
		1,
		Math.round(uwuText.length / 10) * Math.random()
	);
	for (let i = facecount; i > 0; i--) {
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

export default class UwUIfy extends React.Component<{
	/**
	 * @name useEmojis
	 * @description Use Emojis
	 * @type {boolean}
	 * @default true
	 */
	useEmojis: boolean;
}> {
	// Static Methods
	static uwuify = uwuify;
	static uwuifyWithFaces = uwuifyWithFaces;
	static uwuFaces = uwuFaces;

	// Render Func
	render() {
		const dontUseEmojis =
			typeof undefined == typeof this.props.useEmojis
				? true
				: this.props.useEmojis;
		const a = (
			<div className={`UwUifyEl 0J3Elements-UwUify`}>
				{(dontUseEmojis ? uwuifyWithFaces : uwuify)(this.props.children)}
			</div>
		);
		return a;
	}
}
