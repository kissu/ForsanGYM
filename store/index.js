// export data that will be stored
export const state = () => ({
  plans: [],
  activities: [],
  players: [],
  services: [],
})

export const mutations = {
  setPlans: function (state, plans) {
    state.plans = plans
  }
}

