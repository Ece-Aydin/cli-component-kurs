<template>
    <div id="interactiveWork">
        <h4>{{documentTitle}}</h4>
        <p class="text" v-if="!visibility">{{explain}}</p>
        <form class="form" id="myForm" v-if="visibility">
            <label class="label">Your ID : </label>
            <input type="number" id="yourId" class="input">
            <br>
            <label class="label">Your Email : </label>
            <input type="email" id="eMail" class="input">
            <br>
            <label class="label">Your Birthday : </label>
            <input type="date" id="birth" class="input">
            <br>
            <label class="label">Choose Gender : </label>
            <br>
            <input type="radio" name="gender" value="Female" id="female" class="input">
            <label class="label">Female</label>
            <br>
            <input type="radio" name="gender" value="Male" id="male" class="input">
            <label class="label">Male</label>
            <br>
            
            <input type="reset" value="Reset" class="input">
        </form>
        <button @click="getForm">Get the Form</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            documentTitle : 'Example of Other Interactive Button',
            explain : 'Press button and see form. Form is hidden.',
            visibility : false
        }
    },
    methods : {
        getForm(){
            this.visibility = true;
            localStorage.yourId = this.yourId;
            localStorage.eMail = this.eMail;
            localStorage.birth = this.birth;
            
        }
    },
    mounted() {
        if(localStorage.yourId) {
            this.yourId = localStorage.yourId;
        }
        if(localStorage.eMail) {
            this.eMail = localStorage.eMail;
        }
        if(localStorage.birth) {
            this.birth = localStorage.birth;
        }
    }
}
</script>



<style>

.form{
    margin: 1em;
}

.input{
    margin: 5px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #009999;
}

.label {
    color: #ff6699;
    font-family: 'Lucida Handwriting';
}

.text{
    font-family: 'Helvetica';
    color: #009999;
    font-weight: bold;
}

</style>