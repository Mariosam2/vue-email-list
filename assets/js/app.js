import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
createApp({
    data() {
        return {
            randomEmailUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emails: [],
        }
    },
    methods: {
        generateEmails(){
            for(let i = 0; i < 10; i++){
                //console.log(axios)
                axios.get(this.randomEmailUrl)
                .then(response => {
                    //console.log(response.data.response)
                    this.emails.push(response.data.response);
                    //console.log(this.emails)
                })
            }
           //console.log(this.emails)
        }
    },
    mounted(){
        this.generateEmails();
        //console.log(this.emails)
    }
}).mount('#app')