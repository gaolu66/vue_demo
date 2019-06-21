import {reqTopics} from '../api/index'
import { RECEIVE_TOPICS } from './mutation-types'

export default {
  async getTopics({commit, state}){
    const {page, size} = state
    const result = await reqTopics(page, size)
    if (result.code===200) {
      const topicsResult = result.data.result
      commit(RECEIVE_TOPICS, {topicsResult})
    }
  }
}