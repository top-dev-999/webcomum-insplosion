<template>
    <div class="scrolldown-control" @click="onClick">
        <ScrollDownDark />
        <p>Scroll Down</p>
    </div>
</template>

<script>
import ScrollDownDark from '@/components/svg/ScrollDownDark';
export default {
    name: 'ScrollDownControl',
    components: {
        ScrollDownDark
    },
    methods: {
        onClick() {
            console.log('gg');
            this.$emit('scroll-down-click');
        }
    }
}
</script>