import * as React from 'react';

if (!Date.now) {
	Date.now = () => new Date().getTime();
}

interface t {
	i?: number;
}

const timeSince = (when: number) => {
	return Date.now() - when;
};

const getYearsSince = (epoch: number) => {
	epoch = epoch * 1000;
	const getMonthDays = (mo: number) => {
		const t31: number[] = [0, 2, 4, 6, 8, 10];
		return t31.includes(mo) ? 31 : mo === 1 ? 28 : 30;
	};

	const date = new Date(timeSince(epoch));
	const mo = date.getUTCMonth();
	let days = (date.getUTCFullYear() - 1970) * 365;
	for (let i = 0; i <= mo; i++) days = days + getMonthDays(i);
	days = days + date.getUTCDay();
	days = days + date.getUTCHours() / 24;
	days = days + date.getUTCMinutes() / 60 / 24;
	days = days + date.getUTCSeconds() / 60 / 60 / 60;
	return days / 365;
};

export default class TimeSince extends React.Component<
	{
		/**
		 * @name time
		 * @description UNIX timestamp to get years since
		 * @type {number}
		 */
		time: number;

		/**
		 * @name precision
		 * @description The precision of the number
		 * @type {number}
		 * @default 1
		 */
		precision?: number;

		/**
		 * @name className
		 * @description Additional ClassNames
		 * @type {string}
		 * @default ''
		 */
		className?: string;

		/**
		 * @name style
		 * @description An array of styles
		 * @type {React.CSSProperties}
		 * @default {}
		 */
		style?: React.CSSProperties;
	},
	t
> {
	text: string = '';
	timer: any;

	constructor(props: any) {
		super(props);
		this.state = {
			i: 0,
		};
	}

	getText() {
		const x = (this.props.precision || 1) * 1000000000;
		return (Math.floor(getYearsSince(this.props.time) * x) / x).toString();
	}
	tick() {
		this.text = this.getText();
		this.setState({
			i: (this.state.i || 0) + 1,
		});
		this.forceUpdate();
	}

	componentDidMount() {
		this.timer = setInterval(() => this.tick(), 100);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		const v = (
			<span
				className={`${
					this.props.className ? this.props.className + ' ' : ''
				}YearsSinceEl YearsSinceElement 0J3Elements-YearsSince`}
				style={this.props.style || {}}
			>
				{this.text}
			</span>
		);

		return v;
	}
}
if (module) module.exports = TimeSince;
