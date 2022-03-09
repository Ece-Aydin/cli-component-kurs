<template>
    <div id="divided">
        <h3 class="heading">WELCOME TO MY-BLOG</h3>
        <form class="LogIn" @submit.prevent v-if="showL">
            <label class="input">Email:</label>
            <input type="email" id="eM" class="input">
            <br>
            <label class="input">Password:</label>
            <input type="password" id="pass" class="input">
            <br>
            <button @click="clickLog" class="butons">LOGIN</button>
        </form>

        <form class="SignUp" @submit.prevent v-if="showS">
            <label class="input">Email : </label>
            <input type="email" id="Smail" class="input">
            <br>
            <label class="input">Name : </label>
            <input type="text" id="Sname" class="input">
            <br>
            <label class="input">Password : </label>
            <input type="password" id="Spassword" class="input" placeholder="en az 8 karakterli bir şifre belirleyiniz">
            <br>
            <button @click="clickSign" class="butons" >SIGN UP</button>
        </form>


        <button @click="login" class="butons" v-if="!showL">Click for login</button>
        <button @click="register" class="butons" v-if="!showS" >Click for register</button>
       
<p class="link"><a href="">Forgot your password? </a></p>

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
        
        },
        register() {
            this.sendRegisterForm;
            this.showS = true
            this.$emit('sendReg');
           
        },
   

    }
}
</script>

<style lang="scss">

@mixin butonButon {
    background-color: #000000;
    color: #fff;
    margin-left: 500px;
    margin-top: 50px;
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
    margin-left: 500px;
    
}
.input{
    @include inputBlocks();
}

.heading{
    text-align: center;
    color: #ff66b3;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
}

a{
    text-decoration: none;
}

.link{
    margin-left: 700px;
    margin-top: 120px;
}
</style>
