import React from 'react';
import { Menu } from 'semantic-ui-react';

export default () => {
	return (
		<Menu>
			<Menu.Item name="browse">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFBCU7SIBvnFfTT1mq5sKSiGJcjYKbAOYJio71iNsMn_OG6pgJIA"
					alt="dd"
				/>
			</Menu.Item>

			<Menu.Menu position="right">
				<Menu.Item name="signup">Итого</Menu.Item>

				<Menu.Item name="help"> Корзина</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};
