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
        <a class="nav-link nunitofont"><router-link to="/" style="color:#506690!important; text-decoration:none;">Home</router-link></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Challenges
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item nunitofont">
            <router-link to="/all-challenges" style="color:#506690!important; text-decoration:none;">
            <img src="https://img.icons8.com/color/18/000000/double-tick.png"/> All challenges</router-link></a>
          <a class="dropdown-item nunitofont">
            <router-link to="/open-challenges" style="color:#506690!important; text-decoration:none;">
            <img src="https://img.icons8.com/color/18/26e07f/open-box.png"/> Open Challenges</router-link></a>
          <a class="dropdown-item nunitofont">
            <router-link to="/open-with-no-deadline" style="color:#506690!important; text-decoration:none;">
            <img src="https://img.icons8.com/android/18/4a90e2/refresh.png"/> Open With No Deadline</router-link></a>
          <a class="dropdown-item nunitofont">
            <router-link to="/coming-soon" style="color:#506690!important; text-decoration:none;">
            <img src="https://img.icons8.com/cotton/18/000000/clock--v2.png"/> Coming Soon</router-link></a>
          <a class="dropdown-item nunitofont">
            <router-link to="/archived-challenges" style="color:#506690!important; text-decoration:none;">
            <img src="https://img.icons8.com/doodle/18/000000/archive-folder.png"/> Archived</router-link></a>
        </div>
      </li>
      <li class="nav-item nunitofont">
        <a class="nav-link"><router-link to="/about" style="color:#506690!important; text-decoration:none;">About Us</router-link></a>
      </li>
      <li class="nav-item nunitofont">
        <a class="nav-link"><router-link to="/news" style="color:#506690!important; text-decoration:none;">News</router-link></a>
      </li>
      <li class="nav-item nunitofont">
        <a class="nav-link"><router-link to="/submit-a-challenge" style="color:#506690!important; text-decoration:none;">Submit a Challenge</router-link></a>
      </li>
      <li class="nav-item nunitofont">
        <a class="nav-link"><router-link to="/login" style="color:#506690!important; text-decoration:none;">Login or Register</router-link></a>
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