<template>
        <div class="keep-updated-item">
            <SmallText text="#CATALOGUES|#MOODBOARDS|#EBOOKS" />
            <a href="#"><h3>ZEN INTERIORS: LUXURY INTERIOR DESIGN IN DUBAI</h3></a>
            <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </h4>
            <div>
                <ArrowRight /> <a href="" class="readmore">READ MORE</a>
            </div>
            <img src="@/assets/images/basic/ic-wishlist.png" 
                @click="isFavorite = true"
                alt="" class="wishlist" v-if="isFavorite == false">
            <img src="@/assets/images/basic/ic-wishlist-fill.png" 
                @click="isFavorite = false"
                alt="" class="wishlist" v-if="isFavorite == true">
        </div>
</template>

<script>
import SmallText from '@/components/basic/SmallText';
import ArrowRight from '@/components/svg/ArrowRight';
export default {
    name: "KeepUpdatedItem",
    components: {
        SmallText,
        ArrowRight
    },
    data: function() {
        return {
            isFavorite: false
        }
    }
}
</script>