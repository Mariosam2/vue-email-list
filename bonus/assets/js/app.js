import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
createApp({
    data() {
        return {
            randomEmailUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            errorMsg: null,
            emails: [],
        }
    },
    methods: {
        generateEmails() {
            for (let i = 0; i < 10; i++) {
                //console.log(axios)
                //console.log('prima di axios', i);
                axios.get(this.randomEmailUrl)
                    .then(response => {
                        //console.log(response.data.response)
                        this.emails.push(response.data.response);
                        //console.log('dentro axios', i);
                    })
                    .catch(error => {
                        this.errorMsg = error.message;
                    })

            }
            //console.log(this.emails)
            //console.log(tempArray)


        },
        
    },
    mounted() {
        //console.log(this.generateEmails())
        this.generateEmails();


    }
}).mount('#app')