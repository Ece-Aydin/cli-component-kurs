<template>
    <div id="random">
        <form @submit.prevent="sendingInfo">
            <label>Kind: </label>
            <input type="text" v-model="dKind">
            <label>Name: </label>
            <input type="text" v-model="dName">
            <br>
            <button class="btn">Define kind</button>
        </form>
    </div>
</template>

<script>

export default {
    emits:['define-kind'],
    data() {
        return {
            dKind : '',
            dName : '',
        };
        
    },
     methods : {
         sendingInfo() {
             this.$emit(
                 'define-kind',
                 this.dKind,
                 this.dName
             );
         }
     }
    
}
</script>

<style>
#random{
    margin-top: 5rem;
    font-size: 2rem ;
}
.btn{
    color: #ff6666;
    background-color: #ffe6cc;
    border-color: #ff4000;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 2rem;
    
}
</style>