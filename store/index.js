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
  },
  addPlayer: function (state, player) {
    state.players.push(player)
  },
  editPlayer: function (state, player) {
    // state.players[state.players.findIndex(Player=>{
    //   return Player.id === player.id
    // })] = player
    for (let i = 0; i < state.players.length; i++) {
      if (state.players[i].id === player.id) {
        state.players[i] = player
        break
      }
    }
    state.players = Object.assign([], state.players)
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
  editActivity: function (state, act) {
    let objIndex = state.activities.findIndex((obj => obj.id == act.id))
    state.activities[objIndex].name = act.name,
      state.activities[objIndex].coachName = act.coachName,
      state.activities[objIndex].coachPhoneNumber = act.coachPhoneNumber,
      state.activities[objIndex].price = act.price,
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
  }
}
