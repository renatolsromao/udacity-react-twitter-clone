import { combineReducers } from "redux";
import authedUsers from './authedUser'
import tweets from './tweets'
import users from './users'

export default combineReducers({
  authedUsers,
  users,
  tweets,
})