<template>
    <div id="site-timer">
        <slot v-if="trig" :timeOn="timeOn" />
    </div>
</template>

<script>
export default {
    name : 'SiteTimer',
    props: {
        threshold : {
            type : Number,
            required : true
        }
    },
    data() {
        let timeOn = 0;
        const cookies = document.cookie
        .split(";") 
        .filter(item => item.includes("SiteTimer"));
        if(cookies.length) {
            timeOn = parseInt(cookies[0].split("=")[1] , 10);
        }

        return {
            timeOn : timeOn,
            interval : null

        };
    },
    computed : {
        trig() {
            return this.timeOn >= this.threshold;
        }
    },
    created() {
        this.interval = setInterval(this.tick , 1000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
    methods : {
        tick() {
            if(++this.timeOn % 5 ===0) {
                const now = new Date();
                const tomorrow = new Date(
                    now.getFullYear(),
                    now.getMonth(),
                    now.getDate() + 1

                );
                document.cookie = `timeOn = ${
                    this.timeOn

            };Expires=${tomorrow.toGMTString()};Path=/`;
        }
        // alert("Bu zaman sayıcı çalışıyor. OK");
        console.log(this.timeOn)
    }
    
    
}
}
</script>
