<template>
    <div>
        <div class="blog-out-control">
            <div class="back-control">
                <BackLink />
            </div>
            <div class="description-control">
                <div class="description-content">
                    <div class="tab-control">
                        <ul>
                            <TabLink v-for='(item, index) in tabs' :key="index" 
                                :text="item.text" :link="item.link" theme="dark" />
                        </ul>
                    </div>
                    <time>February 5, 2021</time>
                    <h1>SEE INTERIOR DESIGNERS</h1>
                    <h2>STREET STYLE IN CONTEMPORARY INTERIOR DESIGN</h2>
                    <BlogOutItem v-for="(item, i) in items" :key="i" 
                        :titleBig="item.titleBig" :titleSmall="item.titleSmall"
                        :image="item.image" :description="item.description" :btn="item.btn" />
                    
                    <iframe width="100%" height="640"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>

                    <div class="catalogue-control">
                        <div class="catalogue-content">
                            <h3>CATALOGUE</h3>
                            <Button02 text='VIEW CATALOGUES' theme="white" hover="white-black" />
                        </div>
                        <div class="catalogue-image">
                            <img src="@/assets/images/blogout/catalogue/catalogue.png" alt="">
                        </div>
                    </div>
                    <ul>
                            <TabLink v-for='(item, index) in tabs' :key="index" 
                                :text="item.text" :link="item.link" theme="dark" />
                        </ul>
                </div>
                <div class="description-ads">
                    <AdControl />
                    <PageUpArrow />
                </div>
            </div>
            <div class="social-sharing">
                <SocialShareLight />
            </div>

            
        </div>
        <RelatedPost />
        <CreateInsplosionAccount />
        <InspirationsWithTag />
        <Furniture />
        <FurnitureGallery />
        <Footer />
        <GetInspired />
    </div>
</template>

<script>
import BlogOutItem from '@/components/BlogOutItem';
import AdControl from '@/components/AdControl';
import BackLink from '@/components/basic/BackLink';
import SocialShareLight from '@/components/basic/SocialShareLight';
import TabLists from '@/components/basic/tab/TabLists';
import Button02 from '@/components/basic/Button02';
import PageUpArrow from '@/components/basic/PageUpArrow';
import CreateInsplosionAccount from '@/components/CreateInsplosionAccount';
import InspirationsWithTag from '@/components/Inspirations/InspirationWithTag';
import Footer from '@/components/Footer';
import Furniture from '@/components/Furniture/Furniture';
import FurnitureGalley from '@/components/Furniture/FurnitureGallery';
import GetInspired from '@/components/Inspirations/GetInspired';
import RelatedPost from '@/components/blogout/RelatedPost';
import TabLink from '@/components/basic/tab/TabLink';
export default {
    name: "BlogOut",
    components: {
        BackLink,
        SocialShareLight,
        TabLists,
        AdControl,
        BlogOutItem,
        Button02,
        PageUpArrow,
        CreateInsplosionAccount,
        InspirationsWithTag,
        Footer,
        Furniture,
        FurnitureGalley,
        GetInspired,
        RelatedPost,
        TabLink
    },
    data: function() {
        return {
            items: [
                {
                    titleBig: '',
                    titleSmall: '',
                    image: require('@/assets/images/blogout/item/item1/item1.png'),
                    description: 'Artistic, bold, energetic, bright, unique, crazy – so many words to describe this year trend Contemporary Street Style. Movement loved by artists, makers and designers. Today, INSPLOSION want to inspire you on Street Style in Contemporary Interior Design and help to create your dreamy colourful home! Vestibulum vestibulum felis ut viverra bibendum.',
                    btn: ''
                },
                {
                    titleBig: 'DIAMOND AMETHYST SIDEBOARD',
                    titleSmall: 'BOCA DO LOBO',
                    image: require('@/assets/images/blogout/item/item2/item2.png'),
                    description: 'Artistic, bold, energetic, bright, unique, crazy – so many words to describe this year trend Contemporary Street Style. Movement loved by artists, makers and designers. Today, INSPLOSION want to inspire you on Street Style in Contemporary Interior Design and help to create your dreamy colourful home! Vestibulum vestibulum felis ut viverra bibendum.',
                    btn: 'type2'
                },
                {
                    titleBig: '',
                    titleSmall: '',
                    image: require('@/assets/images/blogout/item/item3/item3.png'),
                    description: '',
                    btn: 'type1'
                },
                {
                    titleBig: 'DIAMOND AMETHYST SIDEBOARD',
                    titleSmall: 'BOCA DO LOBO',
                    image: require('@/assets/images/blogout/item/item4/item4.png'),
                    description: '',
                    btn: 'type1'
                }
            ],
            tabs: [
                {
                    text: 'catalogues',
                    link: ''
                },
                {
                    text: 'inspirations',
                    link: 'inspiration'
                },
                {
                    text: 'ebooks',
                    link: ''
                },
                {
                    text: 'infographics',
                    link: ''
                },  

            ]
        }
    }
}
</script>