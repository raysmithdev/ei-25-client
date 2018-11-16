const initialState = {
  name: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
      return Object.assign({}, state, {
        name: action.user.name
      })

      // return {
      //   ...state,
      //   name: action.user.name
      // }

    default:
        return state
  }

  // if() {
  //
  // } else if() {
  //
  // } else {
  //
  // }
}

export default userReducer
