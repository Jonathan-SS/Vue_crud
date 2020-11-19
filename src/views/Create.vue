<template>
  <div class="create">
    <h1>Create a new page</h1>
    <form>
      <div>
        <img :src="post.img" class="image-preview" />
      </div>
      <input
        type="text"
        v-model="post.description"
        placeholder="Beskriv dit billede her"
        required
      />
      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <button type="button" class="choos-image" v-on:click="chooseImage">
        Choose image
      </button>
      <button v-on:click="createPost">Create Post</button>
    </form>
  </div>
</template>

<script>
import {postRef} from '../firebase-db'
export default {
  name:'Create',

    data(){
        return{
          
            post:{
                description:'',
                img:null
            }
        }
    },
    methods:{
      chooseImage(){
        this.$refs.fileInput.click()
      },
      previewImage(){
        const imageFile =this.$refs.fileInput.files[0]
        const fileReader=new FileReader()
        fileReader.onload=(event)=>{
          this.post.img=event.target.result
        }
        fileReader.readAsDataURL(imageFile)
},   
createPost(){
        postRef.add(this.post)
this.$router.push('/')
      }

    }
};
</script>


<style scoped>
form {
  max-width: 500px;
  margin: auto;
}
input[type="file"] {
  display: none;
}
</style>