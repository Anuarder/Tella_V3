export default {
    data(){
        return{
            body: document.getElementsByTagName('body')[0],
        }
    },
    mounted(){
        this.body.className = "modal-open";
    },
    beforeDestroy(){
       this.body.className = ""; 
    },
    methods: {
        close(){
            this.$emit('close');
        }
    }
}