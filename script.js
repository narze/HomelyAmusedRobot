Vue.component("button-counter", {
  data: () => {
    return { count: 0 }
  },
  template: '<button @click="count++"><slot /> claps {{ count }} times 👏</button>'
})

let app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!"
  }
})
