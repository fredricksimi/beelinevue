<template>
    <div>
        <Navbar/>
        <main class="bg-soft pt-7" style="background-color:#f4f6fc !important">
            <section class="section section-lg pt-4">
                <div class="container">
                    <div class="row justify-content-center mb-3 mb-md-5">
                        <div class="col-12 col-md-8 text-center">
                            <h2 class="nunitofont custom-9 mb-0 pt-5">Have a challenge? Submit it to us using this form</h2>
                        </div>
                    </div>
                    <div class="row row-grid align-items-center mb-2 mb-md-4">
                        <!--<div class="col-12 col-md-12 order-md-2">-->
                            <br>
                            <div class="col-8 mx-auto">
                            <form method="POST">
                                <!-- {% csrf_token %} -->
                                {{form|crispy}}
                                <input type="submit" class="btn btn-primary animate-up-2" value="Submit">
                            </form>
                            </div>
                        <!--</div>-->
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'Submit_A_Challenge',
    components: {
        Navbar,
        Footer,
    }
}
</script>

<style>
.nunitofont {
    font-family: 'Nunito Sans', sans-serif;
}
.custom-9 {
    font-size:40px;
    line-height:52px;
    color:#24262b;
    font-weight:700;
}
</style>