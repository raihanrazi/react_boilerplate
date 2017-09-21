import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super();
    this.state = {
      itemName: props.initialItemName,
      itemCost: props.initialItemCost,
      itemRequirement: props.itemRequirement
    }

    this._updateCost = this._updateCost.bind(this)
  }

  _updateCost() {
    this.setState({
      itemCost: this.state.itemCost + 10000
    })
  }

  _onChangeHandler(e) {
    this.setState({
      itemName: e.target.value
    })
  }

  _updateName() {
    this.props.updateName(this.props.id, this.state.itemName);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li><a href="#">{this.state.itemName}</a></li>
              <li><a href="#">${this.state.itemCost}</a></li>
              <li><a href="#">{this.state.itemRequirement}</a></li>
            </ul>
            <input
              type="text"
              value={this.state.itemName}
              onChange={(e) => this._onChangeHandler(e)}
            />
            <button onClick={this._updateName.bind(this)} className="btn btn-primary">Update Name</button>
            <button onClick={this._updateCost} className="btn btn-primary">Update Cost</button>
            <button onClick={this.props.greet} className="btn btn-secondary">Greet</button>
          </div>
        </div>
      </nav>
    );
  }
}
