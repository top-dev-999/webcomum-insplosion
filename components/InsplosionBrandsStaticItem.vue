<template>
    <a href="#">
    <div class="insplosion-brands-static-item">
        <div class="insplosion-brand-image">
            <img :src="data.image" alt="" class="main-image">
            <img :src="data.logo" class="logo-image"/>
        </div>
        <h3>{{ data.title }}</h3>
        <h4>{{ data.description }}</h4>
    </div>
    </a>
</template>

<script>
export default {
    name: 'InsplosionBrandsStaticItem',
    props: ['data']
}
</script>