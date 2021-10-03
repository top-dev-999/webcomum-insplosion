<template>
    <div class="home-banner" id="about-us">
        <div class="home-banner-menu">
            <AppMenu theme='light' height="big" />
        </div>
        <div class="home-banner-middle">
            <div class="social-bar-control">
                <Socialbar />
            </div>
            <div class="home-banner-control">
                <b>ABOUT US</b>
                <p>WE DELIVER MILLIONS <br /> OF INSPIRATIONS</p>
                <WatchVideo />
            </div>
            <div class="easy-navigator-control">

            </div>
        </div>
        <div class="home-banner-scroll">
            <ScrollDownLight />
            <p> ScrollDown </p>
        </div>
    </div>
</template>

<script>
import AppMenu from '@/components/AppMenu';
import Socialbar from '@/components/Socialbar';
import WatchVideo from '@/components/basic/WatchVideo';
import ScrollDownLight from '@/components/svg/ScrollDownLight';
export default {
    name: 'HomeBanner',
    components: {
        Socialbar,
        WatchVideo,
        AppMenu,
        ScrollDownLight
    }
}
</script>