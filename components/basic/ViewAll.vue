<template>
    <div class="view-all" @click="handleMore()">
        <ExpandMore />
        <p v-if="text == ''">VIEW ALL</p>
        <p v-else>{{text}}</p>
    </div>
</template>

<script>
import ExpandMore from '@/components/svg/ExpandMore';
export default {
    name: 'ViewAll',
    props: ["text"],
    components: {
        ExpandMore
    },
    methods: {
        handleMore() {
            this.$emit('view-more');
        }
    }
}
</script>