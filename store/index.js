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
  deletePlayer: function (state , player_id) {
    state.players = state.players.filter(player => {
      return player.id !== player_id
    })
  },
  addPlayer:function (state, player){
    this.state.players.push(player)
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
  },
  editActivity: function(state, act){
    console.log("Hi");
    let objIndex = state.activities.findIndex((obj => obj.id == act.id))
    state.activities[objIndex].name = act.name,
    state.activities[objIndex].coachName = act.coachName,
    state.activities[objIndex].coachPhoneNumber = act.coachPhoneNumber,
    state.activities[objIndex].price = act.price,
    state.activities[objIndex].description = act.description
  },
  // Services Part :
  SetServices:function (state, services){
    state.services = services
  },
  AddService:function (state, service){
    state.services.push(service)
  },
  DeleteService:function (state, service_id){
    state.services = state.services.filter(service=>{
      return service.id !== service_id
    })
  },
}

