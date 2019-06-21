import state from './state'
export default {
  topics(){
    let topics = []
    const {topicsResult} = state
    for (let i = 0; i < topicsResult.length; i++) {
      topics.push(topicsResult[i].topics)
    }
    console.log(topics.flat())
    return topics.flat()
  } 
}