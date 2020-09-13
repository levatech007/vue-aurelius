const state = {
  claims: [
    {viitenumber: '', heading: 'Test 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec ligula imperdiet, laoreet odio eget, euismod nibh. Etiam fringilla commodo blandit. Duis vitae dignissim ipsum, quis auctor sapien'},
    // {viitenumber: '', heading: 'Test 2', content: 'Integer euismod tortor in nisi aliquet, ut semper enim facilisis. Duis mollis fringilla nisl, quis molestie nisl molestie ut. Ut imperdiet ornare ligula, nec egestas nisi faucibus vel.'},
    // {viitenumber: '', heading: 'Test 3', content: 'Ut venenatis turpis nisi, id imperdiet ipsum eleifend ut. Fusce malesuada id eros at tempor. Cras eu odio aliquet massa imperdiet fringilla. Aliquam erat volutpat.'}
  ]
}

const getters = {
  allClaims: (state) => state.claims
}

const actions = {
  // data call
}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
