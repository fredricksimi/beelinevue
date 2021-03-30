<template>
    <div>
        <Navbar/>
        <div class="main-content">
            <!-- Header -->
            <div class="header pt-7 py-lg-8 pt-lg-9" style="background-image:linear-gradient(to top, #2980b9, #6dd5fa, #ffffff)">
            <div class="container">
                <div class="header-body text-center mb-7">
                <div class="row justify-content-center">
                    <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                    <h1 class="text-white dmfont" style="font-size:45px;">Welcome Back!</h1>
                    <p class="text-lead text-white opensansfont custom-10">Use this form to login into your account.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <!-- Page content -->
            <div class="container mt--9 pb-5 text-gray">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-8">
                <div class="card border border-soft mb-0">
                    <div class="card-header bg-transparent pb-5">
                    <div class="text-center mt-2 mb-3 nunitofont"><small>Sign in with</small></div>
                    <div class="btn-wrapper text-center">
                        <a href="/accounts/google/login/" class="btn btn-neutral btn-icon">
                        <span class="btn-inner--icon"><img src="../assets/google.svg" style="width:20px; height:19px"></span>
                        <span class="btn-inner--text nunitofont">&nbsp;Google</span>
                        </a>
                    </div>
                    </div>
                    <div class="card-body px-lg-5 py-lg-5">
                    <div class="text-center mb-4">
                        <small class=" nunitofont">Or sign in with credentials</small>
                    </div>
                    <form role="form" method="POST" _lpchecked="1">
                    <input type="hidden" name="csrfmiddlewaretoken" value="hBwnN5q6n1lyKYgNYGEYOeF5W96Q9qrgqj0AOHdx1c3sYdtfnm8kA2ocMYL9GC2g">
                        <div class="form-group mb-3">
                        

        <div id="div_id_login" class="form-group"> <label for="id_login" class=" requiredField">
                        Login<span class="asteriskField">*</span> </label> <div class=""> <input type="text" name="login" placeholder="Username or e-mail" autofocus="autofocus" class="textinput textInput form-control" required="" id="id_login" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;"> </div> </div> <div id="div_id_password" class="form-group"> <label for="id_password" class=" requiredField">
                        Password<span class="asteriskField">*</span> </label> <div class=""> <input type="password" name="password" placeholder="Password" class="textinput textInput form-control" required="" id="id_password" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;"> </div> </div>

                        </div>
                        <div class="text-center">
                        <button type="submit" class="btn btn-primary my-4 nunitofont">Sign in</button>
                        </div>
                    </form>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-6">
                    <a href="/accounts/password/reset/" class="text-gray"><small class=" nunitofont">Forgot password?</small></a>
                    </div>
                    <div class="col-6 text-right">
                    <a href="/accounts/signup/" class="badge badge-pill badge-primary text-white p-2 nunitofont">Create new account</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    name: 'Login',
    components: {
        Navbar
    }
}
</script>

<style>
body {
    background-image:url('../assets/evernote.png'); 
    background-repeat:repeat;
}
.header {
    position: relative;
}
.btn-neutral {
    color: #0A48B3;
    background-color: #fff;
    border-color: #fff;
    box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
}
.nunitofont {
    font-family: 'Nunito Sans', sans-serif;
}
.dmfont {
    font-family: 'DM Serif Display', serif;
}
.opensansfont {
    font-family: 'Open Sans', sans-serif;
}
.custom-10{
    font-size:16px;
    line-height:27px;
    font-weight:300;
}

@media (min-width: 992px){
    .pt-lg-9, .py-lg-9 {
        padding-top: 10rem !important;
    }
}

@media (min-width: 992px) {
    .pb-lg-8, .py-lg-8 {
        padding-bottom: 8rem !important;
    }
}

.pb-7, .py-7 {
    padding-bottom: 6rem !important;
}
.mt--9, .my--9 {
    margin-top: -10rem !important;
}
.mb-7, .my-7 {
    margin-bottom: 6rem !important;
}
</style>