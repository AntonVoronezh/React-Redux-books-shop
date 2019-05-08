import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

export default ({ image, title, author, price }) => {
	return (
		<Card>
			<Image src={image} />
			<Card.Content>
				<Card.Header>{title}</Card.Header>
				<Card.Meta>
					<span className="date">{author}</span>
				</Card.Meta>
			</Card.Content>
			<Card.Content extra>
				<Icon name="rub" />
				{price} руб.
			</Card.Content>
			<Button animated="vertical">
				<Button.Content hidden>Добавить в корзину</Button.Content>
				<Button.Content visible>
					<Icon name="shop" />
				</Button.Content>
			</Button>
		</Card>
	);
};
