<template>
    <ul>
        <TabItem v-for="(tab) in tabs" :text="tab" :key="tab" :theme="theme"></TabItem>
    </ul>
</template>

<script>
import TabItem from '@/components/basic/tab/TabItem'
export default {
    name: 'TabLists',
    props: ['theme'],
    components: {
        TabItem
    },
    data: function () {
        return {
            tabs : [
                '#CATALOGUES', '#INSPIRATIONS', '#EBOOKS', '#MOODBOARD', '#INFOGRAPHICS', '#INSPIRATIONS', '#EBOOKS'
            ]
        }
    }
}
</script>