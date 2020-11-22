<template>
  <div>
    <input type="text" v-on:keyup="searchFunktion" v-model="searchValue" />
    <div class="grid-container">
      <article v-for="post in posts" :key="post.id">
        <div>
          <img :src="post.img" alt="" />
          <p>{{ post.description }}</p>
        </div>

        <div>
          <router-link :to="{ name: 'Update', params: { post: post } }">
            <button>Update</button>
          </router-link>
          <button type="button" v-on:click="sletPost(post.id)">Delete</button>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { postRef } from "../firebase-db.js";
export default {
  data() {
    return {
      searchValue:'',
      posts: [],
    };
  },
 methods:{
sletPost(id){

  postRef.doc(id).delete()
},
searchFunktion(){
console.log(this.searchValue)
let searchValueLower=this.searchValue.toLowerCase()
console.log(searchValueLower)
let filteredPosts=[]
 
for (const post of this.posts) {
 
if(post.description.toLowerCase().includes(this.searchValue.toLowerCase())){
  filteredPosts.push(post)

console.log(filteredPosts)
this.posts=filteredPosts
  }
  

  }

}
 },
  firestore: {
    posts: postRef,
  },
};
</script>

<style scoped>
</style>