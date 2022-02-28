<template>
  <div id="rootComponent">
    <h2 class="heading">Divided</h2>
    <divided-comp v-on:sendLog="transactions"  v-on:sendReg="tran"/>
    <form-comp  v-on:sendForm="transac" />

  </div>
</template>

<script>
import DividedComp from './components/DividedComp.vue'
import FormComp from './components/FormComp.vue'
export default({
  components : {
    DividedComp,
    FormComp
  },
  methods : {
    transactions(){
      console.log("İlk componentini aldın <3. Bu log in butonu");
    },
    tran(){
      console.log("ikinci componentini aldın. Bu register butonu ");
    },
    transac(){
      console.log("üçüncü componentini aldın. Bu form <3 ");
    }

  }
})
</script>


<style lang="scss">

// $butonColor : #00e6e6;
// .butons{
//     color: $butonColor;
// }

</style>