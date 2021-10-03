<template>
    <div>
        <div class="trends-tile-control" v-if="$mq == 'desktop'">
            <div class="trends-tile-item item1">
                <img src="@/assets/images/trends/tiles/item2/item2.png" alt="">
                <p>CONTEMPORARY CLASSIC</p>
            </div>
            <div class="trends-tile-item item1">
                <img src="@/assets/images/trends/tiles/item1/item1.png" alt="">
                <p>GOLDEN</p>
            </div>
            <div class="trends-tile-item item1">
                <img src="@/assets/images/trends/tiles/item3/item3.png" alt="">
                <p>EMERALD GREEN</p>
            </div>
            <div class="trends-tile-item item1">
                <img src="@/assets/images/trends/tiles/item2/item2.png" alt="">
                <p>CONTEMPORARY CLASSIC</p>
            </div>
            <div class="trends-tile-item item1">
                <img src="@/assets/images/trends/tiles/item1/item1.png" alt="">
                <p>GOLDEN</p>
            </div>
        </div>
        <div class="trends-tile-control" v-if="$mq == 'tablet' || $mq == 'mobile'">
            <div class="trends-tile-item item1">
                <img src="@/assets/images/trends/tiles/item2/item2.png" alt="">
                <p>CONTEMPORARY CLASSIC</p>
            </div>
            <div class="trends-tile-item item1">
                <img src="@/assets/images/trends/tiles/item1/item1.png" alt="">
                <p>GOLDEN</p>
            </div>
            <div class="trends-tile-item item1">
                <img src="@/assets/images/trends/tiles/item3/item3.png" alt="">
                <p>EMERALD GREEN</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "TrendsTiles"    
}
</script>