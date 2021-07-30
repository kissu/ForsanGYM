// export data that will be stored
export const state = () => ({
  plans: [],
  activities: [],
  players: [],
  services: [],
  activityPlayers: [],
  servicesIncome: [],
  plansIncome:[],
  totalIncome: 0,
})

export const mutations = {
  // Player Section --begin
  setPlayers: function (state, players) {
    state.players = players
    console.log(state.players);
  },
  addPlayer: function (state, player) {
    state.players.push(player)
  },
  editPlayer: function (state, player) {
    let tmpArr=null
    for (let i = 0; i < state.players.length; i++) {
      if (state.players[i].id === player.id) {
        state.players[i] = player
        tmpArr = state.players
        state.players = Object.assign([], [])
        break
      }
    }
    state.players = tmpArr

  },
  // Player Section --end
  deletePlayer: function (state, player_id) {
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
  deletePlan: function (state, plan_id) {
    state.plans = state.plans.filter(plan => {
      return plan.id !== plan_id
    })
  },
  setActivityPlayers: function (state, activityPlayers) {
    state.activityPlayers = activityPlayers
  },
  deleteActivityPlayer: function(state, activityPlayer_id){
    state.activityPlayers = state.activityPlayers.filter(actPlayer => {
      return actPlayer.id !== activityPlayer_id
    })
  },
  SetActivities: function (state, newActivities) {
    state.activities = newActivities
  },
  addActivity: function (state, activity) {
    state.activities.push(activity)
  },
  deleteActivity: function (state, activity_id) {
    state.activities = state.activities.filter(activity => {
      return activity.id !== activity_id
    })
  },
  addNewActivityPlayer: function (state, activityPlayer) {
    state.activityPlayers.push(activityPlayer)
  },
  editActivityPlayer: function(state, activityPlayer){
    let holder = state.activityPlayers.findIndex( (obj => obj.id === activityPlayer.id))
    state.activityPlayers[holder].name = activityPlayer.name
    state.activityPlayers[holder].id = activityPlayer.id
    state.activityPlayers[holder].subscription = activityPlayer.subscription
  },
  editActivity: function (state, act) {
    let objIndex = state.activities.findIndex((obj => obj.id === act.id))
    state.activities[objIndex].name = act.name
      state.activities[objIndex].coachName = act.coachName
      state.activities[objIndex].coachPhoneNumber = act.coachPhoneNumber
      state.activities[objIndex].price = act.price
      state.activities[objIndex].description = act.description
  },
  // Services Part :
  SetServices: function (state, services) {
    state.services = services
  },
  AddService: function (state, service) {
    if (!state.services.length)
      state.services = [service]
    else
      state.services.push(service)
  },
  DeleteService: function (state, service_id) {
    state.services = state.services.filter(service => {
      return service.id !== service_id
    })
    state.services = Object.assign([], state.services)

    //Update the table of income with DELETED Service
    for(let i=0;i<state.servicesIncome.length;i++){
      if(service_id === state.servicesIncome[i].service.id){
        state.servicesIncome[i].service.name = state.servicesIncome[i].service.name+'\n(DELETED)'
        break
      }
    }
    state.servicesIncome = Object.assign([], state.servicesIncome)
  },
  //Service end
  setServicesIncome: function (state, servicesIncome) {
    state.servicesIncome = servicesIncome
  },
  buyService: function (state, service) {
    let objIndex = state.servicesIncome.findIndex((obj => obj.id === service.id))
    if (objIndex === -1)
      state.servicesIncome.push(service)

    else {
      state.servicesIncome[objIndex] = service
      //reAssign to force a change
      state.servicesIncome = Object.assign([],state.servicesIncome )
    }
  },
  setPlansIncome: function (state, plansInceom) {
    state.plansIncome = plansInceom
  },
  updatePlanIncome: function (state, planIncome) {
    let planIndex = -1
    for (let i = 0; i < state.plansIncome.length; i++) {
      if (state.plansIncome[i].id === planIncome.id) {
        planIndex = i
        break
      }
    }
    if (planIndex === -1) {
      state.plansIncome.push(planIncome)
    } else {
      state.plansIncome[planIncome] = planIncome
    }
  },
  calculateIncome: function (state) {
    let totalIncome = 0;
      for (let i = 0, serviceIncomeArr = state.servicesIncome; i < serviceIncomeArr.length; ++i) {
        totalIncome += (serviceIncomeArr[i].service.price * serviceIncomeArr[i].soldItems);
      }
      for (let i = 0, planIncomeArr = state.plansIncome; i < planIncomeArr.length; ++i) {
        totalIncome += (planIncomeArr[i].plan.price * planIncomeArr[i].numberOfPlayers);
      }
    state.totalIncome = totalIncome
  },

  // player weight area start
  deletePlayerWeight: function (state, playerWeight){
    const player = state.players.find(player => player.id === playerWeight.player.id)
    let playerWeightsArr = player.weights
    for(let i=0;i<playerWeightsArr.length;i++){
      if(playerWeightsArr[i].id === playerWeight.id){
        playerWeightsArr.splice(i, 1)
        break
      }
    }
    player.weights = playerWeightsArr
  },
  addPlayerWeight: function (state, playerWeight){

    let playerIndex = null
    for(let i=0;i<state.players.length;i++){
      // this loop to search for the player
      if(state.players[i].id === playerWeight.player.id){
        playerIndex = i
        break;
      }
    }
    state.players[playerIndex].weights.push(playerWeight)
    const tmpArr = Object.assign([],state.players)
    state.players = Object.assign([], [])
    state.players = Object.assign([],tmpArr)
  },
  editPlayerWeight: function (state, playerWeight){
    const player = state.players.find(player => player.id === playerWeight.player_id)
    let tmpArr = null
    for(let i=0;i<player.weights.length;i++){
      if(player.weights[i].id === playerWeight.id){
        playerWeight.player_id = undefined
        player.weights[i] = playerWeight
        tmpArr = Object.assign([],state.players)
        state.players = Object.assign([],[])
        break
      }
    }
    state.players = tmpArr

  }
  // player weight area end

}
