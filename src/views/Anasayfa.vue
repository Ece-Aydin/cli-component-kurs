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
    
    <p class="text"> You can share your knowledge with us. We have editors dedicated to you. You have all been 
        chosen to be a part of our association due to a mutual passion for (company’s vision/mission). Your 
        passions help us all to unite and the energy we create is what allows us to achieve our individual 
        as well as group goals. We need you as much as you need us and that why we are grateful to have you 
        join us here at (insert the name of the company). During the next few months, you will be learning about
        the different initiatives through our planned activities, seminar, and special events where you will be 
        able to join in and get hands on experiences. I hope these will help you grow to be more productive and
        smart.</p>
        <br>
    <img src="favicon.ico" alt="burda vue.js ikonu var" class="pic">
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
   text-align: center;
    
}
.text{
     font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: #000000;
   text-align: center;
}

.pic{
    width: 200px;
    height: 150px;
    margin-left: 500px;
    
}

</style>
