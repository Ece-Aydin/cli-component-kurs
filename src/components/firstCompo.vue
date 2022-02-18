<template>
    <div id="fComponent">
    <button id="firstB" class="bB" @click="firstActiveButton">First Button. Click and see the action</button>
    <br>
    <br>
    <button id="secondB" class="bB" @click="secondActiveButton">Second Button. Click and see the action</button>
    <br>
    <br>
   <form class="inpt">
    <label>First thing you want to say: </label>
    <input type="text" class="blok" >
    <br>
    <br>
    <label>Second thing you want to say: </label>
    <input type="text" class="blok" > 
    <br>
    <br>
    <button class="bB">Add things</button>
  </form>
  
</div>
</template>

<script>
export default {
    props : [
        'textOne',
        'textTwo'
    ],
        
    methods : {
    firstActiveButton() {
      this.$emit("firstActiveButton");
      alert("Is it working or not");
    },
    secondActiveButton() {
      this.$emit("secondActiveButton");
      alert("Are you working my button");
    }
  },
 
}
</script>

<style >
.bB{
    color: #ff6666;
    background-color: #ffe6cc;
    border-color: #ff4000;
    font-size: 2rem;
    padding: 1rem;
    border-style: inset;
    border-radius: 5px;
    margin-left: 30rem;
}
.inpt{
  font-size: 2rem;
  font-style: oblique;
  color: #004d99;

}
.blok{
    width: 1000px;
    height: 100px;

}

</style>
