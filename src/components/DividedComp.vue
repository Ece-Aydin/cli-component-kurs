<template>
    <div id="divided">
        <h3>First Divided Child Component</h3>
        <button @click="login" class="butons">Click for login</button>
        <button @click="register" class="butons">Click for register</button>
        <!-- <form-comp  v-on:sendForm="transac" /> -->
    </div>
</template>

<script>
export default {

    data(){
        return {
            sendLoginForm : '',
            sendRegisterForm : ''
        }
    },
    methods : {
        login() {
            this.sendLoginForm;
            alert("OK");
           this.$emit('sendLog');
        },
        register() {
            this.sendRegisterForm;
            alert('ALRIGHT');
            this.$emit('sendReg');
        },
    //     transac(){
    //     console.log("üçüncü componentini aldın. Bu form <3 ");
    // }

    }
}
</script>

<style lang="scss">

$butonColor : #b30047;
$backColor : #cdcddb;
.butons{
    color: $butonColor;
    background-color: $backColor;
    margin: 10px;
    border-color: $butonColor;
}

</style>
