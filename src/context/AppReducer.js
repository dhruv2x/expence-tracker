//Reducer -> currentState and action
//It defines what to perform

export default (state,action)=>{
    //Here based on action type we have to performe action
    
    switch(action.type) {
        case 'DELETE_TRANSACTION':
          return {
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
          }
        case 'ADD_TRANSACTION':
          return {
            ...state,
            transactions: [action.payload, ...state.transactions]
          }
        default:
          return state;
      }
}