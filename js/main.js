const imgLarge = {
    props:['img'],
    template: `
        <img v-bind:src="img" class="img-large2" />
     `
}
const app = new Vue({ 
    el: '#app', 
    components:{ 
        'img-large': imgLarge  
    },
    data: {
         img : ['img/img1.jpg', 'img/img2.jpg', 'img/img1.jpg'], 
         imgprev: undefined
    }, 
    methods: {
        clickprev: function(img) {
           this.imgprev = img
        }
    }
})