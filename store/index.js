// export data that will be stored
import login from "../pages/auth/login";

export const state = () => ({
  plans: [],
  activities: [],
  players: {
    isLoaded:false,
    viewPlayer:{},
    count:0,
    items: []
  },
  services: {
    isLoaded:false,
    items: []
  },
  activityPlayers: {
    count:0,
    items:[]
  },
  servicesIncome: {
    isLoaded:false,
    items: []
  },
  subscriptionsIncome: {
    isLoaded:false,
    items: []
  },
  isActivityPlayerSubscriptionsIncomeLoaded: false,
  totalIncome: 0,
  activityPlayerSubscriptions: {
    count: 0,
    items: []
  },
  playerSubscriptions: {
    count: 0,
    isLoaded:false,
    items: []
  },
  outcome:{
    isLoaded:false,
    total:0,
    items:[]
  },
  admins:{
    isLoaded:false,
    items:[]
  }
})

export const mutations = {
  // Player Section --begin
  setPlayers: function (state, players) {
    if(state.players.items.length !== 0){
      // there some players loaded before in view player
      for(let i=0;i<players.items.length;i++)
        if(players.items[i].id!==state.players.items[state.players.viewPlayer].id)
          state.players.items.push(players.items[i])
    }else{
      state.players.items = players.items
    }
    state.players.count = players.count
    state.players.isLoaded=true

  },
  addPlayer: function (state, player) {
    state.players.items.push(player)
    state.players.count++
  },
  editPlayer: function (state, player) {
    if(state.players.isLoaded){
      for (let i = 0; i < state.players.items.length; i++) {
        if (state.players.items[i].id === player.id) {
          state.players.items.splice(i, 1, player)
          break
        }
      }
    }else{
      state.players.items.push(player)
    }

  },
  setPlayerSubscriptions(state, subscriptions) {
    state.playerSubscriptions.items = subscriptions
  },
  editLastPlayerSubscription(state, subscription){
    const sub = state.playerSubscriptions.items[state.playerSubscriptions.items.length-1]
    sub.beginDate = subscription.beginDate
    sub.endDate = subscription.endDate
    state.playerSubscriptions.items.splice(state.playerSubscriptions.items.length-1, 1, sub)
  },
  setPlayersNumber(state, playerNumber){
    state.players.count = playerNumber
  },

  deletePlayer: function (state, player_id) {
    state.players.items = state.players.items.filter(player => {
      return player.id !== player_id
    })
    state.players.count--
  },
  setViewPlayer(state, player){
    state.players.viewPlayer = state.players.items.findIndex(obj => obj.id ===player.id)
  },
  editViewPlayer(state, player){
    state.players.items.splice(state.players.viewPlayer, 1, player)
  },
  // Player Section --end
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
  activatePlan(state, plan){
    plan.isActivated = true
  },
  deActivatePlan(state, plan){
    plan.isActivated = false
  },

  setActivityPlayers: function (state, activityPlayers) {
    state.activityPlayers.items = activityPlayers.items
    state.activityPlayers.count = activityPlayers.count
  },
  deleteActivityPlayer: function (state, activityPlayer_id) {
    state.activityPlayers.items = state.activityPlayers.items.filter(actPlayer => {
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
    state.activityPlayers.items.push(activityPlayer)
    state.totalIncome += activityPlayer.subscription.price
  },
  editActivityPlayer: function (state, activityPlayer) {
    let holder = state.activityPlayers.items.findIndex((obj => obj.id === activityPlayer.id))
    state.activityPlayers.items[holder].name = activityPlayer.name
    state.activityPlayers.items[holder].phoneNumber = activityPlayer.phoneNumber
    state.activityPlayers.items[holder].id = activityPlayer.id
    state.activityPlayers.items[holder].subscription = activityPlayer.subscription
    state.totalIncome += activityPlayer.subscription.price
  },
  editActivityPlayerSubscriptions(state, subscription){
    let holder = state.s.items.findIndex((obj => obj.id === activityPlayer.id))
  },
  editActivity: function (state, act) {
    let objIndex = state.activities.findIndex((obj => obj.id === act.id))
    state.activities[objIndex].name = act.name
    state.activities[objIndex].coachName = act.coachName
    state.activities[objIndex].coachPhoneNumber = act.coachPhoneNumber
    state.activities[objIndex].price = act.price
    state.activities[objIndex].description = act.description
  },
  setAllActivityPlayersubscriptions: function (state, res) {
    state.activityPlayerSubscriptions.items = res.items
    state.activityPlayerSubscriptions.count = res.count
  },
  setActivityPlayerSubscriptionsIncome: function(state, todaysSubscriptions){
    for(let i = 0; i < todaysSubscriptions.length; ++i){
      state.totalIncome += todaysSubscriptions[i].price
    }
    state.isActivityPlayerSubscriptionsIncomeLoaded = true
  },
  // Activity Player -- End

  // Services Part :

  SetServices: function (state, services) {
    for(let i=0;i<services.length;i++){
      services[i].index = i
    }
    state.services.items = services
    state.services.isLoaded = true
  },
  AddService: function (state, service) {
    service.index = state.services.items.length
    state.services.items.push(service)
  },
  DeleteService: function (state, service) {
    for(let i=service.index+1, arr=state.services.items;i<arr.length;i++){
      arr[i].index--
    }
    state.services.items.splice(service.index, 1)
    //Update the table of income with DELETED Service
    for (let i = 0; i < state.servicesIncome.items.length; i++) {
      if (state.servicesIncome.items[i].service && service.id === state.servicesIncome.items[i].service.id ) {
        state.servicesIncome.items[i].serviceName = state.servicesIncome.items[i].serviceName + '(Deleted)'
        break
      }
    }
  },
  //Service end
  setServicesIncome: function (state, servicesIncome) {
    if(servicesIncome.length>0){
      state.servicesIncome.items = servicesIncome
      for (let i = 0; i < servicesIncome.length; i++) {
        if(!state.servicesIncome.items[i].service ){
          // deleted service
          state.servicesIncome.items[i].serviceName = state.servicesIncome.items[i].serviceName + '(Deleted)'
        } // updating total income
          state.totalIncome += (servicesIncome[i].soldItems * servicesIncome[i].payedMoney)
      }
    }
    state.servicesIncome.isLoaded = true
  },
  buyService: function (state, serviceIncome) {
    let objIndex = state.servicesIncome.items.findIndex((obj => obj.id === serviceIncome.id))
    if(objIndex!==-1){
      state.servicesIncome.items.splice(objIndex, 1, serviceIncome)
    }else{
      state.servicesIncome.items.push(serviceIncome)
    }
    state.totalIncome += serviceIncome.payedMoney
  },
  setSubscriptionsIncome: function (state, todaysSubscriptions) {
    if(todaysSubscriptions.length>0){ // there is subscriptions for today
      const visitedArr = []
      for (let i = 0, arr = todaysSubscriptions; i < arr.length; i++) {
        if (arr[i].plan) {
          // the plan is not deleted :D
          let tmpIncome = 0
          if (visitedArr[arr[i].plan.id] !== undefined) {
            // another subscription of this plan is on the array
            state.subscriptionsIncome.items[visitedArr[arr[i].plan.id]].numberOfSubscriptions++
            state.subscriptionsIncome.items[visitedArr[arr[i].plan.id]].payedMoney += arr[i].payedMoney
            tmpIncome += arr[i].payedMoney
          } else {
            // push subscription to array
            state.subscriptionsIncome.items.push({
              plan: arr[i].plan,
              numberOfSubscriptions: 1,
              payedMoney: arr[i].payedMoney
            })
            visitedArr[arr[i].plan.id] = state.subscriptionsIncome.items.length - 1
            tmpIncome += arr[i].payedMoney
          }
          state.totalIncome += tmpIncome // update totoal income}
        } else {
          // plan is deleted :D
          state.subscriptionsIncome.items.push({
            plan: {
              name: "Deleted Plan"
            },
            numberOfSubscriptions: 1,
            payedMoney: arr[i].payedMoney
          })
          state.totalIncome += arr[i].payedMoney
        }
      }
    }
    state.subscriptionsIncome.isLoaded = true
  },
  addSubscriptionIncome: function (state, subscriptionIncome) {

    for (let i = 0, arr = state.subscriptionsIncome.items; i < arr.length; i++) {
      if (arr[i].plan.id === subscriptionIncome.plan.id) {
        arr[i].numberOfSubscriptions++
        arr[i].payedMoney += subscriptionIncome.payedMoney
        state.totalIncome += subscriptionIncome.payedMoney
        return
      }
    }
    state.subscriptionsIncome.items.push({
      plan: subscriptionIncome.plan,
      numberOfSubscriptions: 1,
      payedMoney: subscriptionIncome.payedMoney
    })
  },

  // player weight area start
  deletePlayerWeight: function (state, playerWeight) {
    const player = state.players.items.find(player => player.id === playerWeight.player.id)
    let playerWeightsArr = player.weights
    for (let i = 0; i < playerWeightsArr.length; i++) {
      if (playerWeightsArr[i].id === playerWeight.id) {
        playerWeightsArr.splice(i, 1)
        break
      }
    }
    player.weights = playerWeightsArr
  },
  addPlayerWeight: function (state, playerWeight) {

    let playerIndex = null
    for (let i = 0; i < state.players.items.length; i++) {
      // this loop to search for the player
      if (state.players.items[i].id === playerWeight.player.id) {
        playerIndex = i
        break;
      }
    }
    delete playerWeight.player
    state.players.items[playerIndex].weights.push(playerWeight)
    const tmpArr = Object.assign([], state.players.items)
    state.players.items = Object.assign([], [])
    state.players.items = Object.assign([], tmpArr)
  },
  editViewPlayerWeight: function (state, playerWeight) {
    for(let i=0, arr =state.players.items[state.players.viewPlayer].weights;i<arr.length;i++){
      if(arr[i].id === playerWeight.id){
        arr.splice(i, 1, playerWeight)
        break;
      }
    }
  },
  // player weight area end

  // outcome area begin --

  setOutcome: function (state, outcomes){
    for(let i=0, arr=outcomes; i<arr.length;i++){
      arr[i].index = i
      state.outcome.total += arr[i].price
    }
    state.outcome.items = outcomes
    state.outcome.isLoaded = true
  },
  addOutcome: function (state, outcome){
    outcome.index = state.outcome.items.length
    state.outcome.total += outcome.price
    state.outcome.items.push(outcome)
  },
  deleteOutcome: function (state, outcome){
    for(let i=outcome.index+1, arr=state.outcome.items;i<arr.length;i++){
      arr[i].index--
    }
    state.outcome.total -= outcome.price
    state.outcome.items.splice(outcome.index, 1)
  },

  // outcome area end --
  //----------------------------------------------------------------------
  //Admins area begin --

  setAdmins: function (state, admins){
    state.admins.items = admins
    state.admins.isLoaded = true
  },
  addAdmin: function (state, admin){
    delete admin.password
    admin = {
      ...admin,
      index : state.admins.items.length
    }
    state.admins.items.push(admin)
  },
  editAdmin: function (state, admin){
    state.admins.items.splice(admin.index, 1, admin)
  },
  deleteAdmin: function (state, admin){
    for(let i=admin.index+1, arr=state.admins.items;i<arr.length;i++){
      arr[i].index--
    }
    state.admins.items.splice(admin.index, 1)
  }

  //Admins area begin --

}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    await dispatch('storeDispatchFunc')
  },

  async storeDispatchFunc({ commit }) {

    try{
      // loading plans
      const plans = await this.$axios.$get('plan/')
      commit('setPlans',plans)
    }catch (err){
      console.log('error on plans load (store/index) :')
      console.log(err)
    }

    try {
      const activities = await this.$axios.$get('activity/')
      commit('SetActivities', activities)

    }catch (err){
     console.log('error on activities load (store/index) :')
          console.log(err)
    }

  },

}


