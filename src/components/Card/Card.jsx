import React from 'react';
import { Menu, Popup, List, Image } from 'semantic-ui-react';

export default ({ list, total, deleteFromCardCB }) => {
	const listCard = list.map(b => {
        return (
            <List.Item>
            <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
            <List.Content>
              <List.Header as='a'>Rachel</List.Header>
              <List.Description>
                Last seen watching{' '}
                <a>
                  <b>Arrested Development</b>
                </a>{' '}
                just now.
              </List.Description>
            </List.Content>
          </List.Item> 
        )
    });

	return (
		<React.Fragment>
			<Menu.Item name="signup">Итого {total} руб.</Menu.Item>
			<Popup
				trigger={<Menu.Item name="help"> Корзина ({list.length})</Menu.Item>}
				header="Movie Search"
				content={<List />}
				on={['hover', 'click']}
			/>
		</React.Fragment>
	);
};

{
	/* <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
      <List.Content>
        <List.Header as='a'>Rachel</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Arrested Development</b>
          </a>{' '}
          just now.
        </List.Description>
      </List.Content>
    </List.Item> */
}
