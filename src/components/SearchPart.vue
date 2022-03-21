<template>

<img src="myLogo.png" alt="logom" width="90" height="90">

<form class="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2" @submit.prevent>
  <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"  aria-label="Search" 
   v-model="search"   v-on:keyup.enter="sendCountry"   />
  <i class="fas fa-search" aria-hidden="true" > </i>
   <i class="material-icons">search</i>
   <i class="material-icons">mic</i>
  <button @click="filteredList" v-for="post in filteredList" v-bind:key="post">Search</button>
  
</form>


</template>

<script>

export default{
    data(){
        return{
            search: '',  
            postList : ['https://restcountries.com/v3.1/name/country']             
        }
    },

    methods:{
      sendCountry(){
        this.$emit;
        console.log(this.search)
      },
          filteredList() {
      return this.postList.filter(post => {
        return post.toLowerCase().includes(this.search.toLowerCase())

        
      })
    }
      
},



}

</script>

<style lang="scss">
img{
    margin-left: 750px;
    border: 1px;
    border-style: solid;
    
}

</style>


