class Item extends React.Component {
	render() {
		return React.createElement(this.props.type, { key: this.props.key, style: {liStyle} }, this.props.item)
	}
}
const Item_Fac = React.createFactory(Item)

class IngredientsList extends React.Component {
	render() {
		return React.createElement("ul", {"className": "ingredients"},
			this.props.items.map((ingredient, i) =>
				React.createElement(Item_Fac, {item: ingredient, type: 'li', key: i}, null),
			)
		)
	}
}

class InstructionList extends React.Component {
	render() {
		return 	React.createElement("div", null,
			React.createElement("h2", null, "Cooking Instructions"),
			this.props.instructions.map((step, i) =>
				React.createElement(Item_Fac, {item: step, type: 'p', key: i}, null),
			)
		)
	}
}