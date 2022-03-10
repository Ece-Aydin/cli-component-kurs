<template>
  <div id="app1">
    <h2>MY COUNTRY EXAMPLE</h2>
    <div>{{ someParagraph }}</div>
    <search-part />
  </div>
</template>

<script>
import SearchPart from "@/components/SearchPart"
export default{
  components:{
    SearchPart
  },
  data() {
    return{
      someParagraph : ""
    }
  },
  methods:{
    sendValue() {
      this.someParagraph;
    }
  }
}
</script>

<style lang="scss">

h2{
  margin-left: 600px;
  color: #33ccff;
  font-family: Garamond;

}

</style>