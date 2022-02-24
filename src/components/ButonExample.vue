<template>
    <div id="buton-example">
        <h1>COLOR CHANGING WITH BUTTONS</h1>
        <button class="new" @click="colorOfSun" v-if="!reverse">Color of Sun</button>
        <button class="new" @click="colorOfSun" v-if="reverse">Color of Default</button>
        <hr>
        <br>
        <button class="new">Picture of World</button>
        <hr>
        <br>
        <input type="text" class="input">
    </div>
</template>

<script>
export default {
    data() {
        return{
            someFeature : '',
            reverse : false,    
        }
    },
    methods : {
        colorOfSun() {
            
            if(this.reverse){
                console.log("This Is Default Color"  );
                this.$emit("cos" , "default" );

            }
            else{
                this.$emit("cos" , "new" );                
            }
            this.reverse = !this.reverse;
            },
        pictureOfWorld(){
            this.$emit("piw" , "otherPic");
        }
            
        },
        
    }


</script>

<style>

</style>