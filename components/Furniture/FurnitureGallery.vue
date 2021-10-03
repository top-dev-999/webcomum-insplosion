<template>
    <div class="furniture-gallery">
        <a class="furniture-gallery-item" href="/inspiration">
            <img src="@/assets/images/furnitures/gallery/furniture-brand.png" alt="" class="img-fluidweqdd">
        </a>
        <a class="furniture-gallery-item" href="/inspiration">
            <img src="@/assets/images/furnitures/gallery/item1/item1.png" alt="" 
            srcset="@/assets/images/furnitures/gallery/item1/item1@2x.png 2x, @/assets/images/furnitures/gallery/item1/item1@3x.png 3x">
        </a>
        <a class="furniture-gallery-item" href="/inspiration">
            <img src="@/assets/images/furnitures/gallery/item2/item2.png" alt="" 
            srcset="@/assets/images/furnitures/gallery/item2/item2@2x.png 2x, @/assets/images/furnitures/gallery/item2/item2@3x.png 3x">
        </a>
        <a class="furniture-gallery-item" href="/inspiration">
            <img src="@/assets/images/furnitures/gallery/item3/item3.png" alt="" 
            srcset="@/assets/images/furnitures/gallery/item3/item3@2x.png 2x, @/assets/images/furnitures/gallery/item3/item3@3x.png 3x">
        </a>
        <a class="furniture-gallery-item" href="/inspiration">
            <img src="@/assets/images/furnitures/gallery/item4/item4.png" alt="" 
            srcset="@/assets/images/furnitures/gallery/item4/item4@2x.png 2x, @/assets/images/furnitures/gallery/item4/item4@3x.png 3x">
        </a>
        <a class="furniture-gallery-item" href="/inspiration">
            <img src="@/assets/images/furnitures/gallery/item5/item5.png" alt="" 
            srcset="@/assets/images/furnitures/gallery/item5/item5@2x.png 2x, @/assets/images/furnitures/gallery/item5/item5@3x.png 3x">
        </a>
        <a class="furniture-gallery-item" href="/inspiration">
            <img src="@/assets/images/furnitures/gallery/item6/item6.png" alt="" 
            srcset="@/assets/images/furnitures/gallery/item6/item6@2x.png 2x, @/assets/images/furnitures/gallery/item6/item6@3x.png 3x">
        </a>
    </div>
</template>

<script>

import FollowInstagram from '@/components/svg/SocialFollow/FollowInstagram';

export default {
    name: 'FurnitureGallery.vue',
    components: {
        FollowInstagram
    }
}
</script>