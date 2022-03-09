<template>
    <div id="divided">
        <h3>MyBlog - Edited With Vue.js</h3>
        <form class="LogIn" @submit.prevent v-if="showL">
            <label>Email:</label>
            <input type="email" id="eM" class="input">
            <br>
            <label>Password:</label>
            <input type="password" id="pass" class="input">
            <br>
            <button @click="clickLog" class="butons">LOGIN</button>
        </form>

        <form class="SignUp" @submit.prevent v-if="showS">
            <label for="">Email : </label>
            <input type="email" id="Smail" class="input">
            <br>
            <label for="">Name : </label>
            <input type="text" id="Sname" class="input">
            <br>
            <label for="">Password : </label>
            <input type="password" id="Spassword" class="input" placeholder="en az 8 karakterli bir şifre belirleyiniz">
            <br>
            <button @click="clickSign" class="butons" >SIGN UP</button>
        </form>


        <button @click="login" class="butons" v-if="!showL">Click for login</button>
        <button @click="register" class="butons" v-if="!showS" >Click for register</button>
       
    </div>
</template>

<script>
export default {

    data(){
        return {
            sendLoginForm : '',
            sendRegisterForm : '',
            showL : false,
            showS : false,
            
        }
    },
    methods : {
        login() {
            this.sendLoginForm;
            this.showL = true;
           this.$emit('sendLog');
        //    alert("Ece'nin Bloğu'na Hoşgeldiniz");
        },
        register() {
            this.sendRegisterForm;
            this.showS = true
            this.$emit('sendReg');
            // alert("Kaydınız başarıyla oluşturuldu. Keyifli okumalar.");
        },
   

    }
}
</script>

<style lang="scss">

@mixin butonButon {
    background-color: #000000;
    color: #fff;
    margin: 10px
}

.butons{
 @include butonButon();
}

@mixin inputBlocks{
    width: 35% - 10%;
    background-color: #fff;
    color: #330000;
    font-family: 'Times New Roman', Times, serif;
    margin: 10px;
    border-color: #000000;
    
}

.input{
    @include inputBlocks();
}

</style>