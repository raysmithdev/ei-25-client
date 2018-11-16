import { API_BASE_URL } from '../config'

const fetchUserSuccess = (user) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    user
  }
}

// async

export const fetchUser = () => {
  return (dispatch) => {
    console.log(API_BASE_URL);

    // https://api-demo-ei-25.herokuapp.com/user
    // inside we can async operations
    fetch(`${API_BASE_URL}/user`)
    .then(res => res.json())
    .then(data => dispatch(fetchUserSuccess(data)))
    .catch(error => console.log(error))
  }
}
