import React from 'react';
import { Menu } from 'semantic-ui-react';

export default ({list, deleteFromCardCB}) => {
	return (
		<React.Fragment>
			<Menu.Item name="signup">Итого</Menu.Item>
			<Menu.Item name="help"> Корзина ({list.length})</Menu.Item>
		</React.Fragment>
	);
};
