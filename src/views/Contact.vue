<template>
    
        <h1>Contact With Us!</h1>
        <div class="form-body">
        <div class="row">
            <p class="paragraph">Please fill out the form for your complaints, suggestions and requests.</p>
                <div class="wrap-input1 validate-input" data-validate="Name is required">
<input class="input1" type="text" name="name" placeholder="Name">
<span class="shadow-input1"></span>
</div>
<div class="wrap-input1 validate-input" data-validate="Valid email is required">
<input class="input1" type="text" name="email" placeholder="Email">
<span class="shadow-input1"></span>
</div>
<div class="wrap-input1 validate-input" data-validate="Subject is required">
<input class="input1" type="text" name="subject" placeholder="Subject">
<span class="shadow-input1"></span>
</div>
<div class="wrap-input1 validate-input" data-validate="Message is required">
<input class="input1" name="message" placeholder="Message" />
<span class="shadow-input1"></span>
</div>
<div class="container-contact1-form-btn">
<button class="contact1-form-btn">
<span>  SEND </span>
</button>
        </div>
        </div>
        </div>
</template>

<script>
export default{
    data() {
        return{
            formElements : ''
        }
    },
    methods : {
        contactForm() {
            this.formElements;

        }
    }
}
</script>

<style lang="scss">
@mixin inputBlocks{
    width: 35% - 10%;
    background-color: #fff;
    color: #330000;
    font-family: 'Times New Roman', Times, serif;
    margin-left: 500px;
    margin-bottom: 10px;
    border-color: #000000;
    
}

.input1{
    @include inputBlocks();
}

@mixin send{
    background-color: #660066;
    color: bisque;
    margin-left: 500px;
    width: 50px;

}
.contact1-form-btn{
    @include send();
}
h1{
    color: #660066;
    margin-left: 500px;
}

.paragraph{
    color: #001f4d;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    margin-left: 500px;
}

</style>
