<template>
  <div class="hello">
    <p>Components.</p>
    <p>Kursumda öğrendiklerimle devam ediyorum.</p>
    <p>Yabancı bir adamın kursunu izliyorum.</p>
    <p>Benim youtube'da izlediğimden daha farklı bir başlangıç yaptı.</p>
    <p>Devam edip görelim.</p>
    <p>Bu derste hocanın yaptığı stili görcem</p>
    <p>Props yapicam</p>
  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- css'i yalnızca bir bileşenle sınırlamak için "scoped" eklendi. -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #239dc2;
}
</style>
