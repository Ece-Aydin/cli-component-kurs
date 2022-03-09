<template>
    <div id="house">
        <h1>VUE-BLOG HOME</h1>
        <div class="liste">
            <ul class="myList">
                <li class="mad"> <a href="Anasayfa.vue"> Home </a> </li>
                <li class="mad"> <a href="Divided.vue"> Register / Login </a> </li>
                <li class="mad"> <a href="Contact.vue"> Contact </a> </li>
                <br>
                
            </ul>
        </div>
        <p class="par">
        Good Morning/Afternoon/Evening, Thank you to each and every one of you for being 
        here with us today. We are very pleased to be able to welcome those of you that have been 
        with us for a long time now as well as those who are new to the (group/community/association etc.) </p>
    </div>
</template>

<script>
export default{
    data(){
        return{
            home : '',
            regLog : '',
            blog : ''
        }
    },
    methods : {
            poleValue() {
                this.home;
                this.regLog;
                this.blog;
            }
            
    }
}
</script>

<style lang="scss">
@mixin forList{
    float: left;
    color: #0086b3;
    font-size: 20px;
    margin: 50px;


}

.mad{
@include forList();
}
.par{
    margin-top: 120px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: #000000;
    margin-left: 0px;
}

</style>
