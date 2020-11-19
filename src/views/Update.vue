<template>
  <div class="update">
    <h1>Update your post</h1>
    <form>
      <div><img :src="post.img" class="image-preview" /></div>
      <input
        type="text"
        v-model="post.description"
        placeholder="Beskriv dit billede her"
        required
      />

      <input
        type="file"
        ref="flieInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <button class="choos-image" type="button" v-on:click="chooseImage">
        Choose image
      </button>

      <button v-on:click="updatePost">Update Post</button>
    </form>
  </div>
</template>

<script>
import {postRef} from '../firebase-db'
export default {
name:"Update",
props:{
    post:Object
},
    methods:{
      chooseImage(){
        this.$refs.fileInput.click()
      },
      previewImage(){
const imageFile=this.$refs.fileInput.file[0]
const fileReader=new FileReader()
fileReader.onload=(event)=>{
  this.post.img=event.target.result
}
fileReader.readAsDataURL(imageFile)
      },

     
      updatePost(){
          console.log(this.post)
        postRef.doc(this.post.id).set({
            description:this.post.description,
            img:this.post.img
        })
this.$router.push('/')
      }

    }
};
</script>

<style>
input[type="file"] {
  display: none;
}

.update {
  width: 80%;
  margin: auto;
}
</style>