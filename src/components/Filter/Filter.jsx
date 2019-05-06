import React from 'react';
import { Menu } from 'semantic-ui-react';

export default props => {
    debugger
	return (
		<Menu secondary>
			<Menu.Menu>
				<Menu.Item name="all">Все</Menu.Item>
				<Menu.Item name="byPriceExpansive"> По цене (дорогие)</Menu.Item>
				<Menu.Item name="byPriceCheap"> По цене (дешевые)</Menu.Item>
				<Menu.Item name="byAutor"> По автору</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};