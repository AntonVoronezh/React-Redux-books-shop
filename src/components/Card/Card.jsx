import React from 'react';
import { Menu, Popup } from 'semantic-ui-react';

export default ({list, deleteFromCardCB}) => {
	return (
		<React.Fragment>
			<Menu.Item name="signup">Итого</Menu.Item>
			<Menu.Item name="help"> Корзина ({list.length})</Menu.Item>
		</React.Fragment>
	);
};

// <Popup
// trigger={<Button icon>Click me or Hover me</Button>}
// header='Movie Search'
// content='Multiple events can trigger a popup'
// on={['hover', 'click']}
// />