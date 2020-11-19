<template>
  <div class="home">
    <h1>Shoe collection</h1>
    <post-lists></post-lists>
  </div>
</template>

<script>
import PostLists from "../components/PostLists.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    PostLists,
  },
};
</script>

<style >
.grid-container {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 80%;
  grid-gap: 10px 10px;
  margin: auto;
}

img {
  width: 100%;
}

p {
  margin: 0;
}
</style>
