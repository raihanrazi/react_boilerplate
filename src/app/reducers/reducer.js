const reducer = (state = {
  items: [
    {
      id: 0,
      itemName: "House",
      itemCost: 350000,
    },
    {
      id: 1,
      itemName: "Car",
      itemCost: 25000,
    },
    {
      id: 2,
      itemName: "Boat",
      itemCost: 50000,
    },
  ]
}, action) => {
  switch (action.type) {
    case "UPDATE_COST":
      var newData = state.items.map(data => {
                  if(data.id == action.id)
                     return Object.assign({}, data, {itemCost: data.itemCost + action.payload})
                  return data
              });

      // var stateCopy = Object.assign({}, state);
      // newData = stateCopy.items[action.id].itemCost + action.payload;

      state = {
        ...state,
        items: newData
      };
      break;
    case "UPDATE_NAME":
    var newData = state.items.map(data => {
                if(data.itemName == 'Boat')
                   return Object.assign({}, data, {itemName:action.payload})
                return data
            });

    state = {
      ...state,
      items: newData
    };
    break;
  }
  return state;
};

export default reducer;
