import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
createApp({
    data() {
        return {
            randomEmailUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            errorMsg: null,
            emails: [],
            tempArray: [],
        }
    },
    methods: {
        generateEmails(){
            for(let i = 0; i < 10; i++){
                //console.log(axios)
                axios.get(this.randomEmailUrl)
                .then(response => {
                    //console.log(response.data.response)
                    this.tempArray.push(response.data.response);
                    //console.log(this.emails)
                })
                .catch(error => {
                    this.errorMsg = error.message;
                })
            }
           //console.log(this.emails)
           
          
        },
        wait(time) {
            setTimeout(()=>{
                this.emails = this.tempArray;
            }, time);
            
            
        }
    },
    mounted(){
        this.generateEmails();
        this.wait(1000);
        
    }
}).mount('#app')