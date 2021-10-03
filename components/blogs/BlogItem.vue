<template>
    <div class="blog-item">
        <div class="blog-item-image-control">
            <img v-if="size == 'small'" src="@/assets/images/blog/blog-sm/image.png" alt="" srcset="@/assets/images/blog/blog-sm/image@2x.png 2x, @/assets/images/blog/blog-sm/image@3x.png 3x">
            <img v-if="size == 'big'" src="@/assets/images/blog/blog-bg/image.png" alt="" srcset="@/assets/images/blog/blog-bg/image@2x.png 2x, @/assets/images/blog/blog-bg/image@3x.png 3x">
            <div class="image-description">
                <p>#CATALOGUE | #EBOOKS</p>
            </div>
        </div>
        <h2><a href="/blog-out">ZEN INTERIORS: LUXURY INTERIOR DESIGN IN DUBAI</a></h2>
        <h3><a href="/blog-out">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </a></h3>
        <div>
            <ButtonLink text="READ MORE" theme="black" href='/blog-out' hover="black-white"/>
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
import ButtonLink from '@/components/basic/Button02';
export default {
    name: 'BlogItem',
    components: {
        ButtonLink
    },
    props: ['size'],
    data: function() {
        return {
            isFavorite: false
        }
    }
}
</script>