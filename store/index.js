// export data that will be stored
export const state = () => ({
  plans: [],
  activities: [],
  players: [],
  services: [],
  activityPlayers: [],
  servicesIncome: [],
})

export const mutations = {
  // Player Section --begin
  setPlayers: function (state, players) {
    state.players = Object.create(players)
    console.log(state.players)
  },
  addPlayer:function (state, player){
    state.players.push(player)
  },
  editPlayer:function (state, player){
    // state.players[state.players.findIndex(Player=>{
    //   return Player.id === player.id
    // })] = player
    for(let i=0;i<state.players.length;i++){
      if(state.players[i].id === player.id){
        state.players[i] = player
        break
      }
    }

  },
  // Player Section --end
  deletePlayer: function (state , player_id) {
    state.players = state.players.filter(player => {
      return player.id !== player_id
    })
  },
  setPlans: function (state, plans) {
    state.plans = plans
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
    //Service end
  setServicesIncome: function(state, servicesIncome){
    state.servicesIncome = servicesIncome
  }
}
