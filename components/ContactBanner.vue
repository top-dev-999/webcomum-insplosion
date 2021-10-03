<template>
    <b-row class="contact-banner-control" align-v="center">
        <b-col lg="6" md="5" class="contact-banner-description" align-self="center">
                <small>TALK WITH US</small>
                <h1>CONTACT US</h1>
                <b-row class="contact-info-container">
                    <b-col lg="4" md="12" class="mt-md-4">
                        <h3>CUSTONER SERVICE</h3>
                        <address class="pt-lg-2 pt-md-1">sales@insplosion.com</address>
                    </b-col>
                    <b-col lg="4" md="12" class="mt-md-4">
                        <h3>PRESS INQURIES</h3>
                        <address class="pt-lg-2 pt-md-1">press@insplosion.com</address>
                    </b-col>
                    <b-col lg="4" md="12" class="mt-md-4">
                        <h3>PHONE NUMBER</h3>
                        <address class="pt-lg-2 pt-md-1">+351 917 780 627</address>
                    </b-col>
                </b-row>
        </b-col>
        <b-col lg="6" md="7" class="contact-banner-image d-none d-lg-flex d-md-flex">
            <img src="@/assets/images/contactus/img-bg.png" alt="" srcset="@/assets/images/contactus/img-bg@2x.png, 2x, @/assets/images/contactus/img-bg@3x.png, 3x">
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'ContactBanner'
}
</script>