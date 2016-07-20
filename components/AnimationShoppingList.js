import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AnimationShoppingList extends Component {
  constructor() {
    super();

    this.state = {
      items: [
        {id: 1, name: 'Milk'},
        {id: 2, name: 'Yogurt'},
        {id: 3, name: 'Juice'},
        {id: 4, name: 'IceCream'}
      ]
    };

    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    if (evt.key === 'Enter') {
      const newItem = {id: Date.now(), name: evt.target.value};
      const newItems = this.state.items.concat(newItem);

      evt.target.value = '';
      this.setState({items: newItems});
    }
  }

  handleRemove(i) {
    const newItems = this.state.items;

    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    let shoppingItems = this.state.items.map((item, i) => (
      <div
        key={item.id}
        className="item"
        onClick={() => this.handleRemove(i)}
      >
      {item.name}
      </div>
    ));

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          transitionAppear={true}
          transitionAppearTimeout={300}
        >
          {shoppingItems}
        </ReactCSSTransitionGroup>
        <input
          type="text"
          value={this.state.newItem}
          onKeyDown={this.handleChange}
        />
      </div>
    );
  }
}

export default AnimationShoppingList;
