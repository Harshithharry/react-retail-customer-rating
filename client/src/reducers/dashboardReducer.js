import {  REQUEST_DATA, RECEIVE_DATA } from '../actions/DashboardAction';



export default (state = {}, action) => {

  switch (action.type) {

    case REQUEST_DATA:
       return { 
         ...state, 
         loading: true 
        };

    case RECEIVE_DATA:
       return { 
         ...state,
         loading: false,  
         json: action.payload, 
         
        };

    default:
       return state;
  }

};

