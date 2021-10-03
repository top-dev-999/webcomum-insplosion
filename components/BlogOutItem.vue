<template>
    <div class="blog-out-item">
        <div class="blog-out-item-header" v-if="titleBig != '' && titleSmall != ''">
            <h3 v-if="titleBig != ''">{{titleBig}}</h3> | 
            <h4 v-if="titleSmall != ''">{{titleSmall}}</h4>
        </div>
         <div class="blog-out-item-image">
            <img :src="image" alt="">
            <div class="btn-control" v-if="btn == 'type2'">
                <Button02 text="SHOP THE LOCK" theme="red-fill" hover="white-black" />
                <Button02 text="SEE PROJECT" theme="black-fill" hover="white-black" />
            </div>
            <div class="btn-control" v-if="btn == 'type1'">
                <Button02 text="GET PRICE HERE" theme="black-fill" hover="white-black" />
            </div>
            <div class="btn-control" v-if="btn == ''">
            </div>
         </div>
        <dt v-if="description != ''">{{description}}</dt>
    </div>
</template>

<script>
import Button02 from '@/components/basic/Button02';
export default {
    name: "BlogOutItem",
    props: ["image", "titleBig", "titleSmall", "description", "btn"],
    components: {
        Button02
    }
}
</script>