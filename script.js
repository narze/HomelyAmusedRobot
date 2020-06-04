Vue.component("button-counter", {
  data: () => {
    return { count: 0 }
  },
  template: '<button @click="count++">{{ count }} 👏 claps</button>'
})

let app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!"
  }
})
