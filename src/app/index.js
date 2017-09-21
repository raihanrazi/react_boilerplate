import React from 'react';
import { render } from 'react-dom';

import Item from './components/Item'
import {Body} from './components/Body'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          itemName: "House",
          itemCost: 5000000,
          itemRequirement: true
        },
        {
          itemName: "Car",
          itemCost: 500000,
          itemRequirement: true
        },
        {
          itemName: "Boat",
          itemCost: 50000,
          itemRequirement: false
        },
      ]
    }
  }


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
          <div className="col-xs-10 col-xs-offset-1">
            {this.state.items.map((item, i) =>
              <Item
                key={i}
                id={i}
                initialItemName={item.itemName}
                initialItemCost={item.itemCost}
                itemRequirement={item.itemRequirement}
                updateName={this._onUpdateName.bind(this)}
                greet={this._onGreet}
                >
              </Item>)}
            {this.state.items.map((item, i) =>
              <Body
                key={i}
                itemName={item.itemName}
                >
              </Body>)}
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, window.document.getElementById("app"));
