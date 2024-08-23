function InventoryItem({ name, type, quantity = 0, price = 0 }) {
	return (
		<div>
			<h2>
				{name} ({type})
			</h2>
			{quantity < 5 ?
				<Message>
					<p>Item stock is low! Remaining stock: {quantity}</p>
				</Message>
				: null}
			{quantity * price > 1000 ?
				<Message>
					<p>Total item stock value exceeds threshold! Item stock value: {quantity * price}</p>
				</Message>
				: null}
		</div>
	);
}
