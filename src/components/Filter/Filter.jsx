import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

export default ({ activeItem, changeActiveItemFilterCB }) => {
	const handleItemClick = item => {
		changeActiveItemFilterCB(item);
	};

	return (
		<Menu secondary>
			<Menu.Menu>
				<Menu.Item name="all" active={activeItem === 'all'} onClick={handleItemClick.bind(null, 'all')}>
					Все
				</Menu.Item>
				<Menu.Item
					name="byPriceExpansive"
					active={activeItem === 'byPriceExpansive'}
					onClick={handleItemClick.bind(null, 'byPriceExpansive')}
				>
					По цене (дорогие)
				</Menu.Item>
				<Menu.Item
					name="byPriceCheap"
					active={activeItem === 'byPriceCheap'}
					onClick={handleItemClick.bind(null, 'byPriceCheap')}
				>
					По цене (дешевые)
				</Menu.Item>
				<Menu.Item
					name="byAutor"
					active={activeItem === 'byAutor'}
					onClick={handleItemClick.bind(null, 'byAutor')}
				>
					По автору
				</Menu.Item>
				<Menu.Item>
		<Input placeholder='Поиск по книгам' icon='search'/>
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};
