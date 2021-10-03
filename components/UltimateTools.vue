<template>
    <b-container fluid id="ebooks-catalogues">
    <b-row class="ultimate-tools-control" align-v="stretch">
        <b-col lg="7" md="12" class="ultimate-tools-gallery py-4">
            
            <SlickController />
            <div class="gallery-text-control" v-if="$mq == 'desktop'">
                <h3>THE  ULTIMATE INSPIRATION TOOLS</h3>
            </div>

            <div class="user-info-control" v-if="$mq == 'desktop'">
                <UserInfoForm />
            </div>
        </b-col>
        <b-col lg="5" md="12" class="ultimate-tools-description">
            <b-row class="ultimate-tools-description-control justify-content-center align-self-center">
                <b-col align-self="center">
                    <SmallText text="Ebooks & Catalogues" />
                    <h5>THE ULTIMATE INSPIRATION <br> TOOLS</h5>
                    <dt>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.
                    </dt>
                    <ul>
                        <TabLink v-for="(item, index) in links" :key="index" :text="item.text" :link="item.link" />
                    </ul>
                    <Button02 text="PRESS TO UNLOCK" theme="white" hover="white-black"/>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
    </b-container>
</template>

<script>
import SlickController from '@/components/basic/SlickController';
import SmallText from '@/components/basic/SmallText';
import TabLink from '@/components/basic/tab/TabLink';
import Button02 from '@/components/basic/Button02';
import UserInfoForm from '@/components/basic/UserInfoForm';
export default {
    name: 'UltimateTools',
    components: {
        SmallText,
        TabLink,
        Button02,
        UserInfoForm,
        SlickController
    },
    data: function () {
        return {
            links: [
                {text: 'catalogues' , link: ''},
                {text: 'inspirations' , link: 'inspiration'},
                {text: 'ebooks' , link: ''},
                {text: 'trends' , link: 'trends'},
            ],
          
        }
    }
}
</script>