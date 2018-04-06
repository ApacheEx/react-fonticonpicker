import React from 'react';

import FontIconPicker from '../../js/FontIconPicker';
import * as iconDefs from '../helpers/iconDefs';

class DocApp extends React.PureComponent {
	state = {
		value1: 57436,
		value2: [],
		value3: 57595,
		value4: [57475, 57476, 57477, 57539, 57662, 57404, 57405, 57408],
	};

	handleChange = (key, value) => {
		const newValue = Array.isArray(value) ? [...value] : value;
		this.setState({ [key]: newValue });
	};

	renderSVG = svg => (
		<svg>
			<use xlinkHref={`#${svg}`} />
		</svg>
	);

	render() {
		return (
			<React.Fragment>
				<div>
					<h2>Append to Body & Single</h2>
					<FontIconPicker
						icons={iconDefs.icomoonIcons}
						search={iconDefs.icomoonIconsSearch}
						onChange={value => this.handleChange('value1', value)}
						appendTo="body"
						value={this.state.value1}
						isMulti={false}
						theme="bluegrey"
					/>
					<p>
						Current value:{' '}
						<i
							data-icomoon={String.fromCodePoint(
								this.state.value1,
							)}
						/>
					</p>
				</div>
				<div>
					<h2>Append to Body & Multi</h2>
					<FontIconPicker
						icons={iconDefs.icomoonIcons}
						search={iconDefs.icomoonIconsSearch}
						onChange={value => this.handleChange('value2', value)}
						appendTo="body"
						value={this.state.value2}
						isMulti
						theme="bluegrey"
					/>
					<p>
						Current values:{' '}
						{this.state.value2.map(value => (
							<i
								key={value}
								data-icomoon={String.fromCodePoint(value)}
							/>
						))}
					</p>
				</div>
				<div>
					<h2>Append to Self & Single</h2>
					<FontIconPicker
						icons={iconDefs.icomoonIcons}
						search={iconDefs.icomoonIconsSearch}
						value={this.state.value3}
						onChange={value => this.handleChange('value3', value)}
						isMulti={false}
					/>
					<p>
						Current value:{' '}
						<i
							data-icomoon={String.fromCodePoint(
								this.state.value3,
							)}
						/>
					</p>
				</div>
				<div>
					<h2>Append to Self & Multi</h2>
					<FontIconPicker
						icons={iconDefs.icomoonIcons}
						search={iconDefs.icomoonIconsSearch}
						value={this.state.value4}
						onChange={value => this.handleChange('value4', value)}
						isMulti
					/>
					<p>
						Current value<strong>s</strong>:{' '}
						{this.state.value4.map(value => (
							<i
								key={value}
								data-icomoon={String.fromCodePoint(value)}
							/>
						))}
					</p>
				</div>
				<div>
					<h2>Implied Search</h2>
					<FontIconPicker
						icons={iconDefs.fontelloIcons}
						value={['icon-th', 'icon-video']}
						onChange={val => val}
						renderUsing="class"
					/>
				</div>
				<div>
					<h2>SVG with Custom Rendered</h2>
					<FontIconPicker
						icons={iconDefs.svgs}
						value={['004-green_lantern', '066-daredevil_glasses']}
						onChange={val => val}
						renderFunc={this.renderSVG}
						theme="indigo"
					/>
				</div>
				<div>
					<h2>Themes</h2>
					{[
						'bluegrey',
						'blue',
						'brown',
						'cyan',
						'deeporange',
						'deeppurple',
						'default',
						'indigo',
						'lightblue',
						'pink',
						'purple',
						'red',
						'teal',
					].map(theme => (
						<FontIconPicker
							key={theme}
							icons={iconDefs.superHeroIcons}
							search={iconDefs.superHeroSearch}
							value={[]}
							onChange={v => v}
							isMulti
							theme={theme}
							renderUsing="class"
							noSelectedPlaceholder={`${theme} theme`}
						/>
					))}
				</div>
			</React.Fragment>
		);
	}
}

export default DocApp;
// export default DocApp;
