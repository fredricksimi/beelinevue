<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
      <img src="../assets/logo.png" style="width:250px; height:auto"/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link nunitofont"><router-link to="/">Home</router-link></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Challenges
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item nunitofont"><router-link to="/all-challenges"><font-awesome-icon icon="user-secret" /> All challenges</router-link></a>
          <a class="dropdown-item nunitofont"><router-link to="/open-challenges">Open Challenges</router-link></a>
          <a class="dropdown-item nunitofont"><router-link to="/open-with-no-deadline">Open With No Deadline</router-link></a>
          <a class="dropdown-item nunitofont"><router-link to="/coming-soon">Coming Soon</router-link></a>
          <a class="dropdown-item nunitofont"><router-link to="/archived-challenges">Archived</router-link></a>
        </div>
      </li>
      <li class="nav-item nunitofont">
        <a class="nav-link"><router-link to="/about">About Us</router-link></a>
      </li>
      <li class="nav-item nunitofont">
        <a class="nav-link"><router-link to="/news">News</router-link></a>
      </li>
      <li class="nav-item nunitofont">
        <a class="nav-link"><router-link to="/submit-a-challenge">Submit a Challenge</router-link></a>
      </li>
      <li class="nav-item nunitofont">
        <a class="nav-link"><router-link to="/login">Login or Register</router-link></a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
.nunitofont {
    font-family: 'Nunito Sans', sans-serif;
}
</style>