<template>

<img src="myLogo.png" alt="logom" width="90" height="90">

<form  @submit.prevent>
  <input  type="text" placeholder="Search"  aria-label="Search" 
    v-model.trim="search"  @keyup="getAll"  />
  <i class="fas fa-search" aria-hidden="true" > </i>
   <i class="material-icons">search</i>
   <i class="material-icons">mic</i>
   <br>
   <br>
    <ul>
          <li v-for="obje in people" :key="obje.name.common">
            {{ obje.name.common }}
          </li>
    </ul>
  
</form>


</template>

<script>

export default{
  name: "CountryComponent",
    data(){
        return{
            search: "",  
            people: [],
                      
        }
    },
    mounted() {
    console.log("Component mounted.");
  },

    methods:{
      // sendCountry(){
      //   this.$emit;
      //   console.log(this.search)
      // },
      getAll() {
      fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(res => {
          console.log(res)
          if (this.search) {
            this.people = res.filter(people =>
              people.name.common.toLowerCase().includes(this.search.toLowerCase())
              
              
            );
          }
           else {
            this.people = res;
            console.log(res)
          }
        });
    }
             
      
},

 created() {
    this.getAll();
  }



}

</script>

<style lang="scss">
img{
    margin-left: 750px;
    border: 1px;
    border-style: solid;
    
}


ul li {
  background: #cff34d;
  color: rgb(0, 0, 0);
  padding: 5px;
  list-style-type: none;
  margin-top: 50px;
  text-align: center;
}

input {
  margin-left: 650px;
  margin-top: 20px;
	position:relative;
	font-size: 1.5em;
	background: linear-gradient(21deg, #b0d2e4, #caddd9);
	padding: 3px;
	display: inline-block;
	border-radius: 9999em;
	*:not(span) {
		position: relative;
		display: inherit;
		border-radius: inherit;
		margin: 0;
		border: none;
		outline: none;
		padding: 0 .325em;
		z-index: 1; 
		&:focus + span {
			opacity: 1;
			transform: scale(1);
		}
	}
	span {
		
		transform: scale(.993, .94);
		transition: transform .5s, opacity .25s;
		opacity: 0; 
		position:absolute;
		z-index: 0; 
		margin:4px; 
		left:0;
		top:0;
		right:0;
		bottom:0;
		border-radius: inherit;
		pointer-events: none; 
		box-shadow: inset 0 0 0 3px #fff,
			0 0 0 4px #fff,
			3px -3px 30px #407468, 
			-3px 3px 30px #4d5558;
	}
	
}

</style>


