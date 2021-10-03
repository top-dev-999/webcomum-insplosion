<template>
    <b-container fluid>
    <b-row class="footer">
        <b-col lg="6" md="12" class="footer-left">
            <b-row align-h="center">
                <b-col class="our-world">
                    <h5>WORLD</h5>
                    <NuxtLink to="/about">ABOUT US</NuxtLink>
                    <NuxtLink to="/inspiration">INSPIRATION</NuxtLink>
                    <NuxtLink to="/ebooks-catalogues">EBOOKS & CATALOGUES</NuxtLink>
                    <NuxtLink to="/collection">INSPIRATION COLLECTIONS</NuxtLink>
                    <NuxtLink to="/">PRESS ROOM</NuxtLink>
                    <NuxtLink to="/blog">NEWS</NuxtLink>
                    <NuxtLink to="/categories">BRANDS</NuxtLink>
                    <NuxtLink to="/trends">TRENDS</NuxtLink>
                    <NuxtLink to="/find-professional">FIND A PROFESSIONAL</NuxtLink>
                </b-col>
                <b-col class="customer-care">
                    <h5>CUSTOMER CARE</h5>
                    <NuxtLink to="/contact">CONTACT US</NuxtLink>
                    <NuxtLink to="/">SHOWROOMS</NuxtLink>
                    <NuxtLink to="/faq">QUESIONS & ANSWERS</NuxtLink>
                    <NuxtLink to="/">RETURNS & EXCHANGES</NuxtLink>
                    <NuxtLink to="/">SHIPPING INFORMATIONS</NuxtLink>
                    <NuxtLink to="/faq">TERMS & CONDITIONS</NuxtLink>
                    <NuxtLink to="/faq">PRIVACY & POLICY</NuxtLink>
                </b-col>
            </b-row>
        </b-col>

        <Seperator class="d-none d-md-flex" color="gray" />

        <b-col lg="6" md="12" class="footer-right-control">
            <div class="footer-right-top align-self-start">
                    <h5>FOR INSLOSION NEWS</h5>
                    <div class="footer-right-form-control">
                        <b-input-group class="mb-3">
                            <b-form-input placeholder="YOUR E-MAIL ADDRESS"></b-form-input>
                            <b-input-group-append>
                            <b-button size="sm" text="Button">SUBSCRIBE</b-button>
                            </b-input-group-append>
                        </b-input-group>
                        <p class="form-required-msg">!This filed can not be black</p>
                        <div class="form-term-checkbox-control">
                            <Checkbox text="I agree to the Terms & Conditions and Privacy Policy of Insplosion" />
                        </div>
                    </div>
                </div>.\
                <b-row class="footer-right-bottom align-self-end" >
                    <b-col md="6" sm="12" class="footer-right-copyright" align-self="end">
                        <p>©COPYRIGHT INSPLOSION. ALL RIGHTS RESERVE.</p>
                    </b-col>
                    <b-col md="6" sm="12" class="footer-right-follow" align-self="start">
                        <h5>FOLLOW US</h5>
                        <div>
                            <a href="https://www.instagram.com"><FollowInstagram /></a>
                            <a href="https://www.pinterest.com"><FollowPinterest /></a>
                            <a href="https://www.facebook.com"><FollowFacebook /></a>
                            <a href="https://www.linkedin.com"><FollowLinkedin /></a>
                            <a href=""><FollowWhatsapp /></a>
                            <a href=""><FollowSMS /></a>
                        </div>
                    </b-col>
                </b-row>
        </b-col>
    </b-row>
    </b-container>
</template>


<script>

import FollowFacebook from '@/components/svg/SocialFollow/FollowFacebook';
import FollowInstagram from '@/components/svg/SocialFollow/FollowInstagram';
import FollowLinkedin from '@/components/svg/SocialFollow/FollowLinkedin';
import FollowPinterest from '@/components/svg/SocialFollow/FollowPinterest';
import FollowSMS from '@/components/svg/SocialFollow/FollowSMS';
import FollowWhatsapp from '@/components/svg/SocialFollow/FollowWhatsapp';
import Checkbox from '@/components/basic/Checkbox';
import Seperator from '@/components/basic/Seperator';
export default {
    name: 'Footer',
    components : {
        FollowFacebook,
        FollowInstagram,
        FollowLinkedin,
        FollowPinterest,
        FollowSMS,
        FollowWhatsapp,
        Checkbox,
        Seperator
    }
}
</script>