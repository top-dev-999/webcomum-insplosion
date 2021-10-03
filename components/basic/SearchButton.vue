<template>
    <div >
        <div class="search-button light" v-if="theme == 'light'"
            @mouseenter="hoverItem = true" 
            @mouseleave="hoverItem = false">
            <Magnifying theme='light' :hover="hoverItem"/>
        </div>
        <div class="search-button dark" v-if="theme == 'dark'"
            @mouseenter="hoverItem = true" 
            @mouseleave="hoverItem = false">
            <Magnifying theme='dark' :hover="hoverItem" />
        </div>
        <div class="search-button dark" v-if="theme == 'white'"
            @mouseenter="hoverItem = true" 
            @mouseleave="hoverItem = false">
            <Magnifying theme='dark' :hover="hoverItem" />
        </div>
    </div>    
</template>

<script>
import Magnifying from '@/components/svg/Magnifying.vue';
export default {
    name: 'SearchButton',
    components: {
        Magnifying
    },
    props: ["theme"],
    data: function() {
        return {
            hoverItem: false
        }
    }
}
</script>   

<style lang="scss" scoped>
    .search-button {
        cursor: pointer;
    }
    .search-button:hover {
        border: 1px solid #ffffff !important;
        background: #ffffff !important;
    }
</style>