import React from 'react';
import { render } from 'react-dom';

import Item from '../components/Item';
import { Body } from '../components/Body';

import { _updateCost } from '../actions/updateCost';

import { connect } from 'react-redux';

class App extends React.Component {
_onGreet(){
    alert('This is in the parent component being passed to the child component through props.')
    // in child component this should be accessed through this.props
  }

  _onUpdateName(id, updatedName){
    var stateCopy = Object.assign({}, this.state);
    stateCopy.items[id].itemName = updatedName;
    this.setState(stateCopy);
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {console.log(this.props.log)}
          <div className="col-xs-10 col-xs-offset-1">
            {this.props.items.map((item, i) =>
              <Item
                key={i}
                id={i}
                initialItemName={item.itemName}
                initialItemCost={item.itemCost}
                updateName={this._onUpdateName.bind(this)}
                updateCost={this.props.updateCost}
                >
              </Item>)}
            {this.props.items.map((item, i) =>
              <Body
                key={i}
                itemName={item.itemName}
                greet={this._onGreet}
                >
              </Body>)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    items: state.reducer.items,
    log: state.reducer
  };
}

const mapDispatchToProp = (dispatch) => {
  return {
    updateCost: (id) => {
      dispatch(_updateCost(id))
    }
  };
}

export default connect(mapStateToProp, mapDispatchToProp)(App);
