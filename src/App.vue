<template>
  <div>
  
  <h1>INTERACTIVE WORKING WITH BUTTONS</h1>
  <p class="texts">{{descriptionOne}}</p>
  <p class="texts">{{descriptionTwo}}</p>
  <!-- <first-compo /> -->
  <firstCompo />
  <second-com /> 
  </div>
</template>

<script>
import firstCompo from './components/firstCompo.vue'
import SecondCom from './components/SecondCom.vue';

export default ({
  components: {
    firstCompo,
    SecondCom,
  },
  data() {
    return{
      descriptionOne : 'Bu kodlar hem deneme hem öğrenme hem de kullanma amaçlı',
      descriptionTwo : 'Önerilen örneği yapıyorum ve öğreniyorum'
    }
  },
  methods : {
    firstActiveButton() {
      this.descriptionOne;
      alert("Is it working or not");
    },
    secondActiveButton() {
      this.descriptionTwo;
      alert("Are you working my dear button");
    }
  }
  
})
</script>


<style>

.texts{
  font-size: 2rem;
  font-style: oblique;
  color: #004d99;
}

</style>