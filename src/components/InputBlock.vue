<template>
    <div id="child">
        <form id="infos">
            <label>Information 1 : </label>
            <input type="number" name="info1" v-model="info" placeholder="only numeral" id="block">
            <br>
            <label>Information 2 : </label>
            <input type="number" name="info2" v-model="inf" placeholder="only numeral" id="blok">
            <br>
            <br>
            <button @click="SendingValue">Send the information</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            info : '',
            inf : ''
        }
    },
    methods : {
        SendingValue() {
            this.in;
            this.inf;
            alert("This numerics have been sent. Thank you!");
            localStorage.info = this.info;
            localStorage.inf = this.inf
        },

    },
    mounted() {
        if(localStorage.info) {
            this.info = localStorage.info;
        }
        if(localStorage.inf) {
            this.inf = localStorage.inf;
        }
    },

   

}

</script>
