import React from 'react';
import { Menu, Popup, List, Image, Button } from 'semantic-ui-react';

export default ({ list, total, deleteFromCardCB }) => {
	const listCard = list.map(b => {
		return (
			<List.Item>
				<Image avatar src={b.image} />
				<List.Content>
					<List.Header as="a">{b.title}</List.Header>
					<List.Description>{b.author}</List.Description>
				</List.Content>
			</List.Item>
		);
	});

	return (
		<React.Fragment>
			<Menu.Item name="signup">Итого {total} руб.</Menu.Item>
			<Popup
				trigger={<Menu.Item name="help"> Корзина ({list.length})</Menu.Item>}
				content={<List>{listCard}</List>}
			/>
		</React.Fragment>
	);
};


