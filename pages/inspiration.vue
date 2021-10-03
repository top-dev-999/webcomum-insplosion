<template>
    <div class="inspiration-page">
        <b-row class="search-control mx-0">
            <b-col lg="6" md="12" sm="12" offset-lg="3" class="pt-5">
                <SearchWithIcon placeholder="Your Location" />
            </b-col>
        </b-row>
        <b-row class="mx-0 d-none d-lg-flex">
            <b-col lg="1"></b-col>
            <b-col lg="2" class="inspiration-left">
                <InspirationListItem :data="item"/>
                <InspirationListItem :data="item"/>
                <InspirationListItem :data="item"/>
                <InspirationListItem :data="item"/>
                <InspirationListItem :data="item"/>
                <InspirationListItem :data="item"/>
                <InspirationListItem :data="item"/>
                <InspirationListItem :data="item"/>
            </b-col>
            <b-col lg="6">
                <b-row class="inspiration-header">
                    <SmallText text="SEE OUR LATEST INSPIRATIONS" />
                    <h1 class="text-center">MILLIONS OF INSPIRATIONS</h1>
                    <div class="search-items-control col-lg-8 text-center">
                        <SearchKeywordItem :text="text" v-for="text in search" :key="text" />
                    </div>
                </b-row>
                <b-row>
                    <b-col lg="4">
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                    </b-col>
                    <b-col lg="4">
                        <RedesignPanel />
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                    </b-col>
                    <b-col lg="4">
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                        <InspirationListItem :data="item"/>
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="2" class="inspiration-right">
                <InspirationListItem :data="item"/>
                <InspirationListItem :data="item"/>
                <InspirationListItem :data="item"/>
                <InspirationListItem :data="item"/>
                <InspirationListItem :data="item"/>
                <InspirationListItem :data="item"/>
                <InspirationListItem :data="item"/>
                <InspirationListItem :data="item"/>
            </b-col>
            <b-col lg="1"></b-col>
        </b-row>
        <b-row class="mx-0 d-none d-lg-none d-md-flex">
            <b-row class="inspiration-header mx-0">
                <SmallText text="SEE OUR LATEST INSPIRATIONS" />
                <h1 class="text-center">MILLIONS OF INSPIRATIONS</h1>
                <div class="search-items-control col-lg-8 text-center">
                    <SearchKeywordItem :text="text" v-for="text in search" :key="text" />
                </div>
            </b-row>
            <b-row class="mx-0">
                <b-col md="4">
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                </b-col>
                <b-col md="4">
                    <RedesignPanel />
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                </b-col>
                <b-col md="4">
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                </b-col>
            </b-row>
        </b-row>

        <b-row class="mx-0 d-lg-none d-md-none d-sm-flex">
            <b-row class="inspiration-header mx-0">
                <b-col sm="12" class="text-center">
                    <SmallText text="SEE OUR LATEST INSPIRATIONS" />
                    <h1 class="text-center">MILLIONS OF INSPIRATIONS</h1>
                    <div class="search-items-control col-lg-8 text-center">
                        <SearchKeywordItem :text="text" v-for="text in search" :key="text" />
                    </div>
                    <RedesignPanel class="mx-4"/>
                </b-col>
            </b-row>
            <b-row class="mx-0">
                <b-col sm="6">
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                </b-col>
                <b-col sm="6">
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                    <InspirationListItem :data="item"/>
                </b-col>
            </b-row>
        </b-row>
        <div class="socailbar-control d-none d-lg-flex">
            <Socialbar />
        </div>
        
        <div class="find-style-control d-none d-lg-flex">
            <FindStyle />
        </div>
        <div class="scrolldown-control" v-if="isScrollViewVisible == true">
            <ScrollDownControl v-on:scroll-down-click="scrollToBottom"/>
        </div>
    </div>
</template>

<script>
import RedesignPanel from '@/components/Inspirations/RedesignPanel';
import InspirationListItem from '@/components/Inspirations/InspirationListItem'
import SmallText from '@/components/basic/SmallText';
import Socialbar from '@/components/Socialbar';
import FindStyle from '@/components/svg/FindStyle.vue';
import ScrollDownControl from '@/components/basic/ScrollDownControl.vue';
import SearchWithIcon from '@/components/basic/SearchWithIcon';
import SearchKeywordItem from '@/components/basic/SearchKeywordItem';
export default {
    name: 'Inspiration',
    components: {
        InspirationListItem,
        SmallText,
        RedesignPanel,
        Socialbar,
        FindStyle,
        ScrollDownControl,
        SearchWithIcon,
        SearchKeywordItem
    },
    data(){
        return{
            item: {
                image: require("@/assets/images/inspiration/items/item1.png"),
                title: 'LUXURY CHRISTMAS LIVING R ...',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            search: [
                "FURNITURE", "COLOR", "LIGHTING", "BESTSELLERS", "NEW", "TRENDS", "BRAND", "CONTEMPORARY", "GOLD"
            ],
            isScrollViewVisible: false
        }
    },
    computed: {
        getHeight: function() {
            var body = document.body;
            var html = document.documentElement; 
            var bodyH = Math.max(body.scrollHeight, body.offsetHeight, body.getBoundingClientRect().height, html.clientHeight, html.scrollHeight, html.offsetHeight);
            return bodyH;
        }
    },
    mounted(){
        window.addEventListener("scroll", this.runOnScroll);
    },

    methods: {
        runOnScroll(e) {
            if (window.pageYOffset > 0) {
                this.isScrollViewVisible = false;
            } else {
                this.isScrollViewVisible = true
            }    
            // if (window.pageYOffset < this.getHeight / 2) {
            //     this.isScrollViewVisible = true;
            // } else {
            //     this.isScrollViewVisible = false
            // }
        },
        scrollToBottom() {
            window.scrollTo({
                top: this.getHeight,
                left: 0,
                behavior: 'smooth'
                });
        }
    }
    
}
</script>