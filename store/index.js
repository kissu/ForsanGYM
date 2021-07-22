// export data that will be stored
export const state = () => ({
  plans: [],
  activities: [],
  players: [],
  services: [],
  activityPlayers: [],
})

export const mutations = {
  setPlans: function (state, plans) {
    state.plans = plans
  },
  setPlayers: function (state, players) {
    state.players = players
  },
  addPlan: function (state, plan) {
    state.plans.push(plan)
  },
  deletePlan: function (state , plan_id) {
    state.plans = state.plans.filter(plan => {
      return plan.id !== plan_id
    })
  },
  setActivityPlayers: function(state, activityPlayers){
    state.activityPlayers = activityPlayers
  },
  SetActivities: function (state, newActivities){
    state.activities = newActivities
  },
  addActivity: function(state, activity){
    state.activities.push(activity)
  },
  deleteActivity: function(state, activity_id){
    state.activities = state.activities.filter(activity =>{
      return activity.id !== activity_id
    })
  },
  addNewActivityPlayer: function(state, activityPlayer){
    state.activityPlayers.push(activityPlayer)
  }
}

