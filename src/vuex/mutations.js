import {RECEIVE_TOPICS} from './mutation-types'

export default {
  [RECEIVE_TOPICS](state, {topicsResult}){
    state.topicsResult = topicsResult
  }
}