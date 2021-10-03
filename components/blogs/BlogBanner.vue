<template>
    <b-row class="blog-banner-control mx-0">
        <b-col lg="7" class="p-0 m-0" md="12" order-lg="1">
            <img src="@/assets/images/blog/banner.png" alt="" class="blog-banner-image" 
                srcset="@/assets/images/blog/banner@2x.png 2x, @/assets/images/blog/banner@3x.png 3x" width="100%">
        </b-col>
        <b-col class="blog-banner-description p-4 m-0" lg="5" md="12">
            <div class="description-control"> 
                <ul>
                    <TabLink v-for="(item, index) in links" :key="index" :text="item.text" :link="item.link" />
                </ul>
                <time class="py-2">February 5  2021</time> <br>
                <SmallText text="BEST INTERIOR DESIGN" bindClass="py-2"/>
                <h3 class="py-2">INSIDE EVERYONE CHILD'S DREAM BEDROOM</h3>
                <div class="btn-container">
                    <Button02 text="VIEW DETAIL" theme='red' hover="red-white" />
                </div>
            </div>
        </b-col>
        
    </b-row>
</template>

<script>
import Button02 from '@/components/basic/Button02';
import SmallText from '@/components/basic/SmallText';
import Socialbar from '@/components/Socialbar';
import TabLink from '@/components/basic/tab/TabLink';
export default {
    name: 'BlogBanner',
    components: {
        SmallText,
        Button02,
        Socialbar,
        TabLink
    },
    data: function () {
        return {
            links: [
                {text: 'catalogues' , link: ''},
                {text: 'inspirations' , link: 'inspiration'},
                {text: 'ebooks' , link: ''},
                {text: 'trends' , link: 'trends'},
            ]
        }
    }
}
</script>