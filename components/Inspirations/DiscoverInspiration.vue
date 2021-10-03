<template>
    <div class="discover-inspiration">
        <div class="leftside-control" :class="$mq">
            <div class="description-control">
                <p class="header-hint">DISCOVER INSPLOSION</p>
                <p class="header">WE DELIVER MILLIONS OF INSPIRATIONS</p>

                <p class="description">Inspiration can be everywhere, from top designers tips, to carefully designed interior design and home décor projects and pics. The trick is knowing what to look for and use it correctly.</p>
            </div>
            <div class="about-control" :class="$mq">
                <div class="about-item" :class="$mq">
                    <p class="header-text">+15 years</p>
                    <p class="body-description">ON THE MARKET</p>
                </div>
                <div class="about-item" :class="$mq">
                    <p class="header-text">236</p>
                    <p class="body-description">PROJECTS MADE</p>
                </div>
                <div class="about-item" :class="$mq">
                    <p class="header-text">+15 years</p>
                    <p class="body-description">ON THE MARKET</p>
                </div>
            </div>
        </div>
        <div class="image-container" v-if="$mq == 'desktop'">
            <img src="@/assets/images/inspiration/diamond-emerald-sideboard.png" alt="" >
        </div>
    </div>
</template>

<script>
export default {
    name: 'DiscoverInspiration'
}
</script>