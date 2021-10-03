<template>
    <b-container fluid>
        <b-row class="category-control flex-row-reverse ">
            <b-col class="category-slide" lg="6" md="12">
                <CategorySlide :data="slidedata"/>
            </b-col>
            <b-col class="category-items-control" lg="6" md="12">
                <b-row class="category-items-row">
                    <b-col col>
                        <InspirationTrendsItem />
                    </b-col>
                    <b-col col>
                        <InspirationTrendsItem />
                    </b-col>
                </b-row>
                <b-row class="category-items-row">
                    <b-col col>
                        <InspirationTrendsItem />
                    </b-col>
                    <b-col col>
                        <InspirationTrendsItem />
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        
    </b-container>
</template>

<script>
import CategorySlide from '@/components/categories/CategorySlide';
import InspirationTrendsItem from '@/components/Inspirations/InspirationTrendsItem';
export default {
    name: "CategoryControlLeft",
    props: ["type", "slidedata"],
    components: {
        InspirationTrendsItem,
        CategorySlide
    },
}
</script>