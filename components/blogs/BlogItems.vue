<template>
    <div>
        <b-row class="mb-5">
            <b-col lg="6">
                <b-row>
                    <b-col lg="6" class="px-0">
                        <BlogItem size='small' />
                    </b-col>
                    <b-col lg="6" class="px-0">
                        <BlogItem size='small' />
                    </b-col>
                    <b-col lg="6" class="px-0">
                        <BlogItem size='small' />
                    </b-col>
                    <b-col lg="6" class="px-0">
                        <BlogItem size='small' />
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="6" class="px-0">
                <BlogItem size='big'/>
            </b-col>
        </b-row>
        <b-row class="mb-5">
            <b-col lg="9">
                <b-row class="mb-5">
                    <b-col lg="8" class="px-0">
                        <BlogItem size='big'/>
                    </b-col>
                    <b-col lg="4" class="px-0">
                        <BlogItem size='small' />
                        <BlogItem size='small' />
                    </b-col>    
                </b-row>
                <b-row>
                    <b-col lg="12" class="px-0 blog-slide-control">
                        <BlogSlide :data="data"/>           
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="3" class="text-right">
                <img src="@/assets/images/blog/ad1/ad1.png" alt="">
                <img src="@/assets/images/blog/ad1/ad1.png" alt="">
                <img src="@/assets/images/blog/ad1/ad1.png" alt="">
            </b-col>
        </b-row>
        <b-row class="mb-5">
            <b-col lg="6">
                <b-row>
                    <b-col lg="6" class="px-0">
                        <BlogItem size='small' />
                    </b-col>
                    <b-col lg="6" class="px-0">
                        <BlogItem size='small' />
                    </b-col>
                    <b-col lg="6" class="px-0">
                        <BlogItem size='small' />
                    </b-col>
                    <b-col lg="6" class="px-0">
                        <BlogItem size='small' />
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="6" class="px-0 ">
                <BlogItem size='big'/>
            </b-col>
        </b-row>
        <!-- <div class="blog-five-item">
            <div class="blog-small-four">
                <div class="blog-two-container">
                    <BlogItem size='small' />
                    <BlogItem size='small'/>
                </div>
                <div class="blog-two-container">
                    <BlogItem size='small'/>
                    <BlogItem size='small'/>
                </div>
            </div>
            <div class="blog-big-one">
                <BlogItem size='big'/>
            </div>
        </div>

        <div class="blog-ad-control">
            <div class="blog-slide-control">
                <div class="blog-big-small-control">
                    <div class="big-one-blog">
                        <BlogItem size='big'/>
                    </div>  
                    <div class="small-two-blog">
                        <BlogItem size='small'/>
                        <BlogItem size='small'/>
                    </div>
                </div>
                <div class="blog-slide-control">
                    <BlogSlide :data="data"/>
                </div>
            </div>
            <div class="ad-control">
                <img src="@/assets/images/blog/ad1/ad1.png" alt="">
                <img src="@/assets/images/blog/ad1/ad1.png" alt="">
                <img src="@/assets/images/blog/ad1/ad1.png" alt="">
            </div>
        </div>

        <div class="blog-five-item">
            <div class="blog-small-four">
                <div class="blog-two-container">
                    <BlogItem size='small' />
                    <BlogItem size='small'/>
                </div>
                <div class="blog-two-container">
                    <BlogItem size='small'/>
                    <BlogItem size='small'/>
                </div>
            </div>
            <div class="blog-big-one">
                <BlogItem size='big'/>
            </div>
        </div> -->
    </div>
</template>

<script>
import BlogItem from '@/components/blogs/BlogItem';
import BlogSlide from '@/components/blogs/BlogSlide';
export default {
    name: 'BlogItems',
    components: {
        BlogItem,
        BlogSlide
    },
    data: function () {
        return {
            data: [
                {
                    image: require('@/assets/images/blog/slide/slide.png'),
                    title: 'EMERALD GREEN',
                    description: 'Quisque tincidunt turpis vitae enim facilisis, rhoncus iaculis eros lobortis. Morbi varius elit vitae mattis condimentum. Pellentesque elementum, est non aliquam molestie, tellus diam accumsan.'
                },
                {
                    image: require('@/assets/images/blog/slide/slide.png'),
                    title: 'EMERALD GREEN',
                    description: 'Quisque tincidunt turpis vitae enim facilisis, rhoncus iaculis eros lobortis. Morbi varius elit vitae mattis condimentum. Pellentesque elementum, est non aliquam molestie, tellus diam accumsan.'
                },
            ]
        }
    } 
}
</script>