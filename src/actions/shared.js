import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { setAuthedUsers } from "./authedUser";

const AUTHED_ID = 'dan_abramov'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then((users, tweets) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(setAuthedUsers(AUTHED_ID))
      }) 
  }
}