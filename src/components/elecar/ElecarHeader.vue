<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="/elecar">고소차</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/elecar/" class="nav-link">Main</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/elecar/list" class="nav-link">List</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/elecar/list" class="nav-link">Rent</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>

</style>