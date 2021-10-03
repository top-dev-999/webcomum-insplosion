<template>
    <b-container fluid class="search-results-control">
            <b-row class="mx-lg-5 px-2 py-2">
                <b-col lg="3" md="6" v-for="trend in trends" :key="trend.id">
                    <InspirationTrendsItem :title="trend.title" :description="trend.description" />
                </b-col>
                
            </b-row>
        <ViewAll text="VIEW ALL"/>

        </b-container>
</template>

<script>
import InspirationTrendsItem from '@/components/Inspirations/InspirationTrendsItem';
import ViewAll from '@/components/basic/ViewAll';
export default {
    name: "SearchResults",
    components: {
        InspirationTrendsItem,
        ViewAll
    },
    props: ["trends"]
}
</script>