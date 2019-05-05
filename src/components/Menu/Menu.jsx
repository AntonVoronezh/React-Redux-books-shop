import React from 'react';
import { Menu } from 'semantic-ui-react';

export default () => {
	return (
		<Menu>
			<Menu.Item name="browse">Browse</Menu.Item>

			<Menu.Menu position="right">
				<Menu.Item name="signup">Sign Up</Menu.Item>

				<Menu.Item name="help"> Help</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};
