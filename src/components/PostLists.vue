<template>
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
</template>

<script>
import { postRef } from "../firebase-db.js";
export default {
  data() {
    return {
      posts: [],
    };
  },
 methods:{
sletPost(id){

  postRef.doc(id).delete()
}
 },
  firestore: {
    posts: postRef,
  },
};
</script>

<style scoped>
</style>