export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';


export const requestData = () => ({
  type: REQUEST_DATA,
});


export const receiveData = (payload) => ({
  type: 'RECEIVE_DATA',
  payload
});

export function fetchData() {
  return function (dispatch) {
    dispatch(requestData());
    return fetch(`http://localhost:3001/measures?shoppingChannel=instore`)
      .then(
        response => response.json(),
        // error => console.log('An error occurred.', error),
      )
      .then((response) => {
        dispatch(receiveData(response));
      },
      );
  };
}


