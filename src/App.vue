<template>
  <div id="app1" >
    <h2>MY COUNTRY EXAMPLE</h2>
    <search-part  />
    <!-- <country-part /> -->

  </div>
</template>

<script>
import SearchPart from "@/components/SearchPart"
// import CountryPart from "@/components/CountryPart"
// import axios from "axios"


export default {
  components:{
     SearchPart,
    //  CountryPart,
    
  },

    data() {
      return {
        posts: [],
        errors: [],
        country : '',
    
        
      }
    },
    methods: {
      // getPosts() {
      //   axios
      //     .get("https://restcountries.com/v3.1/name/country")
      //     .then(response => {
      //       console.log(response.data)
      //       console.log(response.config)
      //       console.log(response.status)
      //       console.log(response.statusText)
      //     })
      //     .catch(error => {
      //       console.error(error)
      //     })


      // },

},



}
</script>

<style lang="scss">

h2{
  margin-left: 600px;
  color: #33ccff;
  font-family: Garamond;

}

</style>