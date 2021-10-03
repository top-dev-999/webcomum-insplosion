<template>
    <scrollactive id="sidemenu-control" v-on:itemchanged="onItemChanged" 
            :class="{light: lighttheme,}" :offset="offset"
           >
        <a href="#about-us" class="scrollactive-item" :class="{ 'hover': hoverItem}"
            @mouseenter="onHoverItem" @mouseleave="onLeaveItem">
            <p>ABOUT US</p>
            <div class="dash"></div>
        </a>
        <a href="#inspirations" class="scrollactive-item" :class="{ 'hover': hoverItem}"
            @mouseenter="onHoverItem" @mouseleave="onLeaveItem">
            <p>INSPIRATIONS</p>
            <div class="dash"></div>
        </a>
        <a href="#ebooks-catalogues" class="scrollactive-item" :class="{ 'hover': hoverItem}"
            @mouseenter="onHoverItem" @mouseleave="onLeaveItem">
            <p>EBOOKS & CATALOGUES</p>
            <div class="dash"></div>
        </a>
        <a href="#collections" class="scrollactive-item" :class="{ 'hover': hoverItem}"
            @mouseenter="onHoverItem" @mouseleave="onLeaveItem">
            <p>COLLECTIONS</p>
            <div class="dash"></div>
        </a>
        <a href="#news" class="scrollactive-item" :class="{ 'hover': hoverItem}"
            @mouseenter="onHoverItem" @mouseleave="onLeaveItem">
            <p>NEWS</p>
            <div class="dash"></div>
        </a>
        <a href="#press-room" class="scrollactive-item" :class="{ 'hover': hoverItem}"
            @mouseenter="onHoverItem" @mouseleave="onLeaveItem">
            <p>PRESS ROOM</p>
            <div class="dash"></div>
        </a>
        <a href="#brands" class="scrollactive-item" :class="{ 'hover': hoverItem}"
            @mouseenter="onHoverItem" @mouseleave="onLeaveItem">
            <p>BRANDS</p>
            <div class="dash"></div>
        </a>
        <a href="#trends" class="scrollactive-item last-scroll-item" :class="{ 'hover': hoverItem}"
            @mouseenter="onHoverItem" @mouseleave="onLeaveItem">
            <p>TRENDS</p>
            <div class="dash"></div>
        </a>
    </scrollactive>
</template>

<script>
export default {
    name: "SideMenu",
    data() {
        return {
            lighttheme: false,
            offset: window.innerHeight / 2,
            hoverItem: false,
            currentItem: ''
        }
    },
    methods: {
        onItemChanged(event, currentItem, lastActiveItem) {
            const focused = currentItem.href.split('#')[1];
            this.currentItem = focused; 
            if(focused == 'about-us' || focused == 'ebooks-catalogues' || focused == 'press-room') {
                this.lighttheme = true;
            } else {
                this.lighttheme = false;
            }
        },
        onHoverItem(e) {
            // this.currentItem = e.target.href.split('#')[1];
            // document.querySelector("[href='#'"+this.currentItem+"]").classList.add('is-active');
            this.hoverItem = true;
        },
        onLeaveItem(e) {
            // console.log(e.target);
            console.log(typeof e.target.classList);
            
            // document.querySelector("[href='#'"+this.currentItem+"]").classList.add('is-active');
            this.hoverItem = false;
        }
    }
}
</script>