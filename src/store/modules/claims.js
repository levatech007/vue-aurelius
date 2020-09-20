import axios from 'axios'

const state = {
    claim: {}
};

const getters = {
    currentClaim: state => state.claim
};

const actions = {
    async fetchClaim({commit}){
      const response = await axios.get("http://localhost:3000/claim");
      commit("setClaim", response.data)
      console.log(response)
    }
};

const mutations = {
    setClaim: (state, claim) => (
        state.claim = claim
    )
};

export default {
    state,
    getters,
    actions,
    mutations
}
