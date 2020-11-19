<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Add shoe</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  background-color: #2c3e50;
  color: azure;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: azure;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: azure;
  text-decoration: underline;
}
img {
  width: 100%;
  border-radius: 10px;
}
article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

a,
h3,
button {
  width: 80%;
  margin: 0 auto;
}

button {
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  background-color: azure;
  color: #2c3e50;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #000;
  height: 40px;
}

input {
  width: 70%;
  margin: 10px auto;
}
</style>
