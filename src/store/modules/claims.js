const state = {
  todos: [
    {
      "todo": { "time":"11/14/1019 @ 11.33pm", "descr":"Maksekokkulepe muudetud", "user":"EVA" },
      "comment": ""
    },
    {
      "todo": { "time":"11/14/1019 @ 11.33pm", "descr":"Maksekokkulepe", "user":"EVA" },
      "comment": ""
    },
    {
      "todo": { "time":"11/14/1019 @ 11.33pm", "descr":"Email võlglasele", "user":"EVA" },
      "comment":"Emaili teks siia"
    },
    {
      "todo": { "time":"11/14/1019 @ 11.33pm", "descr":"Kliendi kommentaar", "user":"TEST" },
      "comment":"Uus claim"
    },
    {
      "todo": { "time":"11/14/1019 @ 11.33pm",  "descr":"Aktiivne", "user":"EVA" },
      "comment":""
    },
    {
      "todo": { "time":"11/14/1019 @ 11.33pm", "descr":"Aktiivne",  "user":"EVA" },
      "comment":""
    },
    {
      "todo": { "time":"11/14/1019 @ 11.33pm", "descr":"Lisati telefon 555-5555", "user":"TEST" },
      "comment":""
    },
    {
      "todo": { "time":"11/14/1019 @ 11.33pm", "descr":"Lisati email", "user":"EVA" },
      "comment":""
    },
    {
      "todo": { "time":"11/14/1019 @ 11.33pm", "descr":"RR Päring", "user":"EVA" },
      "comment":"Aadress Main St.123"
    }
  ]
}

const getters = {
  allTodos: (state) => state.todos
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
