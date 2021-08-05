// export data that will be stored
export const state = () => ({
  plans: [],
  activities: [],
  players: [],
  services: [],
  activityPlayers: [],
  servicesIncome: [],
  subscriptionsIncome:[],
  totalIncome: 0,
  activityPlayerSubscriptions: {
    count: 0,
    items: []
  },
})

export const mutations = {
  // Player Section --begin
  setPlayers: function (state, players) {
    state.players = players
  },
  addPlayer: function (state, player) {
    state.players.push(player)
  },
  editPlayer: function (state, player) {
    let playerNew=Object.assign({}, player)
    playerNew.subscription=Object.assign({}, player.subscription)
    playerNew.subscription.plan=Object.assign({}, player.subscription.plan)
    playerNew.weights=Object.assign([], player.weights)

    for (let i = 0; i < state.players.length; i++) {
      if (state.players[i].id === playerNew.id) {
        state.players.splice(i, 1, playerNew)
        break
      }
    }

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

  //  ActivityPlayers -- start

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
  setAllActivityPlayersubscriptions: function(state, res){
    state.activityPlayerSubscriptions.items = res
  },
  // Activity Player -- End
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
    for(let i=0;i<servicesIncome.length;i++){
      state.totalIncome += (servicesIncome[i].soldItems*servicesIncome[i].service.price)  // updating total income
    }
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
    state.totalIncome += service.service.price
  },
  setSubscriptionsIncome: function (state, todaysSubscriptions) {

    for(let i=0;i<state.plans.length;i++){
      let tmpIncome = 0
      let tmpSubscription = {
        plan:state.plans[i],
        numberOfSubscriptions:0,
        payedMoney:-1}
      for(let j=0;j<todaysSubscriptions.length;j++){
        if(todaysSubscriptions[j].plan.id === tmpSubscription.plan.id){
          tmpSubscription.numberOfSubscriptions++;
          if(tmpSubscription.payedMoney === -1){
            tmpSubscription.payedMoney = todaysSubscriptions[j].payedMoney
          }

        }

      }
      tmpIncome=(tmpSubscription.payedMoney*tmpSubscription.numberOfSubscriptions)
      state.subscriptionsIncome.push(tmpSubscription)
      state.totalIncome += tmpIncome  // updating total income
    }


  },
  updateSubscriptionsIncome: function (state, subscriptionIncome) {

    for(let i=0;i<state.subscriptionsIncome.length;i++){
      if(state.subscriptionsIncome[i].plan.id === subscriptionIncome.plan.id){
        state.subscriptionsIncome[i].numberOfSubscriptions++
        state.subscriptionsIncome[i].payedMoney = subscriptionIncome.payedMoney
        state.totalIncome += subscriptionIncome.payedMoney // updating total income
        break
      }
    }

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

  },
  // player weight area end

}
