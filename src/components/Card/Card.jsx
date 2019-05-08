import React from 'react';
import { Menu } from 'semantic-ui-react';

export default state => {
	return (
		<React.Fragment>
			<Menu.Item name="signup">Итого</Menu.Item>
			<Menu.Item name="help"> Корзина</Menu.Item>
		</React.Fragment>
	);
};
