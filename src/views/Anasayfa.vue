<template>
    <div id="house">
        <h1>VUE-BLOG HOME</h1>
        <div class="liste">
            <ul class="myList">
                <li>Home</li>
                <li>Register / Login</li>
                <li>Blogs</li>
                
            </ul>
        </div>
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
    list-style-type: square;
    float: left;
    color: #0086b3;

}

.myList{
@include forList();
}

</style>
