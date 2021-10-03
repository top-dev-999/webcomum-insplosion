<template>
    <div class="trends-out-products-control">
        <div class="trends-out-products-header">
            <h2>TREND PRODUCTS</h2>
        </div>
        <div class="trends-out-products-content">
            <div class="trends-out-products-row">
                <InspirationTrendsItem />
                <InspirationTrendsItem />
                <InspirationTrendsItem />
                <InspirationTrendsItem />
            </div>
            <div class="trends-out-products-row">
                <InspirationTrendsItem />
                <InspirationTrendsItem />
                <InspirationTrendsItem />
                <InspirationTrendsItem />
            </div>
            <div class="trends-out-products-row">
                <InspirationTrendsItem />
                <InspirationTrendsItem />
                <InspirationTrendsItem />
                <InspirationTrendsItem />
            </div>
        </div>
    </div>
</template>

<script>
import InspirationTrendsItem from '@/components/Inspirations/InspirationTrendsItem';
export default {
    name: "TrendsOutProducts",
    components: {
        InspirationTrendsItem
    }
}
</script>