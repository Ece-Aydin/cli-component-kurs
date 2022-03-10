<template>
  <div id="formComp">
    <form class="insideForm" @submit.prevent>
      <label>Email:</label>
      <input type="email" id="eM" class="input" />
      <label>Password:</label>
      <input type="password" id="pass" class="input" />
      <button @click="clickLog" class="input">OK</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mail: "",
      cipher: "",
    };
  },
  methods: {
    clickLog() {
      alert("Welcome");
      this.mail;
      this.cipher;
      this.$emit("sendForm");
    },
  },
};
</script>

<style lang="scss">
@mixin inputBlocks {
  width: 35% - 10%;
  background-color: #e6fff2;
  color: #330000;
  font-family: "Times New Roman", Times, serif;
  margin: 10px;
  border-color: #269900;
}

.input {
  @include inputBlocks();
}
</style>

