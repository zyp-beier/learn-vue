// export default {
// //   data () {
// //     return{
// //       age:20,
// //       // name: 'zhaoyinping',
// //       job: '前端'
// //     }
// //   },
// //   methods: {
// //     addAge() {
// //       this.age++
// //     },
// //     name() {
// //       this.name = 'mixins.js'
// //     }
// //   }
// // };

export default function(config) {
  return {
    created() {
      console.log(config);
    }
  }
}
