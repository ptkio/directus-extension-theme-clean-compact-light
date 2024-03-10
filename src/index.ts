import { defineTheme } from '@directus/extensions-sdk';
import './style.scss';
export default defineTheme({
	id: 'clean-light',
	name: 'Clean Light Theme',
	appearance: 'light',
	rules: {
		form: {
			field: {
				input: {
					height: '40px',
					padding: '0 10px',
				},
			},
			rowGap: '25px',
		},
		borderWidth: '1px',
		borderRadius: '5px',
	},
});
