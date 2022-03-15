<template>

<img src="myLogo.png" alt="logom" width="90" height="90">

<form class="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2">
  <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"  aria-label="Search" v-model="search" >
  <i class="fas fa-search" aria-hidden="true"></i>
   <i class="material-icons">search</i>
   <i class="material-icons">mic</i>
   

</form>


</template>

<script>
export default{
    data(){
        return{
            search: "",
            avengers: []
        }
    },
    computed: {
    filteredAvenger() {
      return this.avengers.filter(avenge => {
        return (
          avenge.toLowerCase().includes(this.search.toLowerCase()) ||
          avenge.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    }
  }
}
</script>



<style lang="scss">

img{
    margin-left: 750px;
    border: 1px;
    border-style: solid;
    
}

</style>