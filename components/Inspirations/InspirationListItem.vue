<template>
    <a class="inspiration-list-item-control" href="/inspiration-out"
        @mouseenter="hoverItem = true" 
        @mouseleave="hoverItem = false"
        >
        <div :class="{'item-shadow-effect' : hoverItem}">
            <img :src="data.image" >
        </div>
        <div class="content-control">
            <h2>{{ data.title }}</h2>
            <h3>{{ data.description }}</h3>
        </div>
        

        <ShareIcon v-if="hoverItem == true"/>
    </a>
</template>

<script>
import ShareIcon from '@/components/basic/ShareIcon';
export default {
    name: 'InspirationsListItem',
    props: ['data'],
    components: {
        ShareIcon
    },
    data: function() {
        return {
            hoverItem: false
        }
    }
}
</script>