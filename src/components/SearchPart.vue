<template>

<img src="myLogo.png" alt="logom" width="90" height="90">

<form class="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2">
  <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
    aria-label="Search">
  <i class="fas fa-search" aria-hidden="true"></i>
   <i class="material-icons">search</i>
   <i class="material-icons">mic</i>

</form>

</template>

<script>
export default {
    data(){
        return{
            one : '',
            two : '',
            three : ''
        }
    },
    methods:{
        searching(){
            this.one;
            this.two;
            this.three;
        }
    },
    computed:{

    },
    watch:{

    }
}
</script>

<style lang="scss">

// .active-cyan-2 input.form-control[type=text]:focus:not([readonly]) {
//   border-bottom: 1px solid #4dd0e1;
//   box-shadow: 0 1px 0 0 #4dd0e1;
// }
// .active-cyan input.form-control[type=text] {
//   border-bottom: 1px solid #4dd0e1;
//   box-shadow: 0 1px 0 0 #4dd0e1;
// }
// .active-cyan .fa, .active-cyan-2 .fa {
//   color: #4dd0e1;
// }



</style>