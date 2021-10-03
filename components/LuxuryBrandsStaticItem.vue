<template>
    <a href="">
        <div class="luxury-brands-static-item">
            <img :src="data.image" alt="" 
                @mouseenter="hoverItem = true" 
                @mouseleave="hoverItem = false"
                :class="hoverItem == true ? 'item-shadow-effect' : null">
            <h3>{{ data.title }}</h3>
            <h4>{{ data.description }}</h4>
        </div>
    </a>
</template>

<script>
export default {
    name: 'LuxuryBrandsStaticItem',
    props: ['data'],
    data: function() {
        return {
            hoverItem: false
        }
    }
}
</script>