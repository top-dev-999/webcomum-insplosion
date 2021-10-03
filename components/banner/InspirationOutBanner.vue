<template>
    <div>
        <div class="inspiration-out-control" v-if="$mq == 'desktop'">
            <div class="inpiration-out-description">
                <div class="back-control">
                    <BackLink />
                </div>
                <div class="description-control">
                    <div class="description-image">
                        <img src="@/assets/images/inspirationout/rectangle.png" alt="">
                    </div>
                    <div class="description-content">
                        <div class="description-header">
                            <h1>BY BOCA DO LOBO</h1>
                            <h2>WHITE CONTEMPORARY LIVING ROOM INTERIOR</h2>
                            <dt>The contemporary interior of this living room by husband and wife Vratika & Nakul. The white massive area with handcrafted luxurious furniture pieces by Boca Do Lobo.</dt>
                        </div>
                        <div class="description-color-palette">
                            <ColorPalette :colors="colors"/>
                        </div>
                        <div class="description-footer">
                            <div class="download-button-group">
                                <div class="download-button-control">
                                    <ButtonLink text="DOWNLOAD HR IMAGE" theme="black" hover="black-white"/>
                                </div>
                                <div class="download-button-control">
                                    <ButtonLink text="DOWNLOAD EBOOK" theme="black" hover="black-white"/>
                                </div>
                                <div class="download-button-control">
                                    <ButtonLink text="DOWNLOAD CATALOGUE" theme="black" hover="black-white"/>
                                </div>
                            </div>
                            <div class="get-lock-price-button">
                                <Button02 text="GET THE LOCK PRICE" theme="black-fill" width="width100" hover="red-white"/>
                            </div>
                            
                            <div class="call-us">
                                <p @click="showModal">QUESTIONS ABOUT THIS ROOM</p>
                                <b-modal ref="my-modal" hide-footer>
                                    <template #modal-title>
                                        <SmallText text="GET PRICE" />
                                        <h3>{{ title }}</h3>
                                        <h4>{{ description }}</h4>
                                    </template>
                                    <div class="d-block text-left">
                                        <p>SELECT YOUR PROFILE</p>
                                        <b-form-radio-group
                                            v-model="selected"
                                            :options="options"
                                            class="mb-3 radio-group"
                                            value-field="item"
                                            text-field="name"
                                            disabled-field="notEnabled"
                                            ></b-form-radio-group>
                                        <Input placeholder="NAME" />
                                        <Input placeholder="EMAIL" />
                                        <Input placeholder="PHONE" />
                                        <CountrySelection />
                                        <Checkbox text="I agree to the Terms & Conditions and Privacy Policy of Insplosion" />
                                        <div class="text-center py-4">
                                            <Button02 theme="red-fill" text="REQUEST" @click="hideModal"  hover="white-black" />
                                        </div>
                                    </div>
                                    
                                    
                                </b-modal>
                                <CallUsLink />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="social-sharing">
                    <SocialShareLight />
                </div>
            </div>
            <div class="view-all-control">
                <ViewAll text="VIEW PRODUCTS" @view-more="viewProducts"/>
            </div>
        </div>
        <div class="inspiration-out-control" :class="$mq" v-if="$mq == 'tablet'">
            <div class="description-control" :class="$mq">
                <div class="description-image" :class="$mq">
                    <img src="@/assets/images/inspirationout/rectangle.png" alt="">
                </div>
                <div class="description-content" :class="$mq">
                    <div class="description-header">
                        <h1>BY BOCA DO LOBO</h1>
                        <h2>WHITE CONTEMPORARY LIVING ROOM INTERIOR</h2>
                        <dt>The contemporary interior of this living room by husband and wife Vratika & Nakul. The white massive area with handcrafted luxurious furniture pieces by Boca Do Lobo.</dt>
                    </div>
                    <div class="description-color-palette">
                        <ColorPalette :colors="colors"/>
                    </div>
                </div>
            </div>
            <div class="download-button-group">
                <div class="download-button-control">
                    <ButtonLink text="DOWNLOAD HR IMAGE" theme="black" width="width100" hover="black-white"/>
                </div>
                <div class="download-button-control">
                    <ButtonLink text="DOWNLOAD EBOOK" theme="black" width="width100" hover="black-white"/>
                </div>
                <div class="download-button-control">
                    <ButtonLink text="DOWNLOAD CATALOGUE" theme="black" width="width100" hover="black-white"/>
                </div>
            </div>

            <div class="get-lock-price-button">
                <Button02 text="GET THE LOCK PRICE" theme="black-fill" width="width100" hover="red-white"/>
            </div>
            
            <div class="call-us">
                <p>QUESTIONS ABOUT THIS ROOM</p>
                <CallUsLink />
            </div>

            

        </div>
        
        <div class="inspiration-out-control" :class="$mq" v-if="$mq == 'mobile'">
            <div class="description-image" :class="$mq">
                <img src="@/assets/images/inspirationout/rectangle.png" alt="">
            </div>
            <div class="description-content" :class="$mq">
                <div class="description-header">
                    <h1>BY BOCA DO LOBO</h1>
                    <h2>WHITE CONTEMPORARY LIVING ROOM INTERIOR</h2>
                    <dt>The contemporary interior of this living room by husband and wife Vratika & Nakul. The white massive area with handcrafted luxurious furniture pieces by Boca Do Lobo.</dt>
                </div>
                <div class="description-color-palette">
                    <ColorPalette :colors="colors"/>
                </div>
            </div>
            <div class="download-button-group">
                <div class="download-button-control">
                    <ButtonLink text="DOWNLOAD HR IMAGE" theme="black" width="width100"/>
                </div>
                <div class="download-button-control">
                    <ButtonLink text="DOWNLOAD EBOOK" theme="black" width="width100"/>
                </div>
                <div class="download-button-control">
                    <ButtonLink text="DOWNLOAD CATALOGUE" theme="black" width="width100"/>
                </div>
            </div>

            <div class="get-lock-price-button">
                <Button02 text="GET THE LOCK PRICE" theme="black-fill" width="width100" hover='red-white'/>
            </div>

            <div class="call-us">
                <p>QUESTIONS ABOUT THIS ROOM</p>
                <CallUsLink />
            </div>
        </div>
    </div>
</template>

<script>
import BackLink from '@/components/basic/BackLink';
import CallUsLink from '@/components/basic/CallUsLink';
import Button02 from '@/components/basic/Button02';
import ButtonLink from "@/components/basic/ButtonLink";
import ColorPalette from '@/components/basic/ColorPalette';
import SocialShareLight from '@/components/basic/SocialShareLight';
import ViewAll from '@/components/basic/ViewAll';
import SmallText from '@/components/basic/SmallText';
import Input from '@/components/basic/Input';
import Checkbox from '@/components/basic/Checkbox';

export default {
    name: "InspirationOutBanner",
    components: {
        BackLink,
        Button02,
        ButtonLink,
        ColorPalette,
        SocialShareLight,
        ViewAll,
        SmallText,
        Input,
        Checkbox,
        CallUsLink
    },
    data: function() {
        return {
            colors: ["#A57C00", "#FFBF00", "#436B95"]
        }
    },
    methods: {
        showModal() {
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        viewProducts() {
            const height = document.getElementsByClassName('inspiration-out-control')[0].offsetHeight;
            const currentPageOffset = window.pageYOffset;
            const menuHeight= document.getElementsByClassName('app-navbar')[0].offsetHeight + 
                                document.getElementsByClassName('navbar')[0].offsetHeight;
            // window.scrollTo({
            //     top: height + menuHeight,
            //     left: 0,
            //     behavior: 'smooth'
            // });

            document.getElementsByClassName('inspiration-out-products')[0].scrollIntoView();
        }
    }
}
</script>