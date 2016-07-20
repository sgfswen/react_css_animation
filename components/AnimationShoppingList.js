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

/*
애니메이션을 적용하려는 자식요소는 ReactCSSTransitionGroup 요소로 래핑해야 한다.

ReactCSSTransitionGroup props
	transitionName ( 실제 애니메이션 정의를 포함하는 CSS 클래스 이름으로 매핑된다 )
	transitionEnterTimeout, transitionLeaveTimeout ( 밀리초 단위 지속 시간)

	enter >
	이벤트가 발생하면 example-enter 추가 하고 항목 렌더링 함.
	이후 example-enter-active className 추가 됨.
	이후 지정한 시간 지나면 사라짐.

	leave >
	이벤트가 발생하면 example-leave 추가 하고 항목 렌더링 함.
	이후 example-leave-active className 추가 되고 항목은 시간 이후 제거 됨..
	이후 지정한 시간 지나면 사라짐.

	초기 마운팅 애니메이션 appear >
	기본값은 false
	초기 마운팅 될 때 애니메이션 적용.

*/

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
