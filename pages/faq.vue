<template>
    <div>
        <div class="faq-control">
            <b-row>
                <b-col md='3'>
                    <b-list-group class="left-list-control">
                        <b-list-group-item :class="selection == 'privacy' ? 'selected' : null"
                            @click="selection = 'privacy'">PRIVACY POLICY</b-list-group-item>
                        <b-list-group-item :class="selection == 'terms' ? 'selected' : null"
                            @click="selection = 'terms'">TERMS & CONDITIONS</b-list-group-item>
                        <b-list-group-item :class="selection == 'faq' ? 'selected' : null"
                            @click="selection = 'faq'">FAQ</b-list-group-item>
                    </b-list-group>
                </b-col>
                <b-col md="9" v-if="selection == 'faq'">
                    <h1>FAQS</h1>
                    
                    <h2 class="faq-group-title">{{faqs.ordering.title}}</h2>
                        <FaqItem :question="item.question" :answer="item.answer" 
                                :control="item.control" 
                                v-for="(item, i) in faqs.ordering.data" 
                                :key="i" :visible="item.visible"
                                @hide-others="hideOthers"
                                :group="faqs.ordering.group"
                                 />
                    <h2 class="faq-group-title">{{faqs.account.title}}</h2>
                        <FaqItem :question="item.question" :answer="item.answer" 
                                :control="item.control" 
                                v-for="(item, i) in faqs.account.data" 
                                :key="i" :visible="item.visible"
                                @hide-others="hideOthers"
                                :group="faqs.account.group" />
                </b-col>
                <b-col md="9" v-if="selection == 'privacy'">
                    <h1>Privacy Policy</h1>
                </b-col>
            </b-row>
        </div>
        <Furniture />
        <FurnitureGallery />
        <Footer />
        <FooterImageTiles />
        <GetInspired />
    </div>
</template>

<script>
import FaqItem from '@/components/faq/FaqItem';
import Footer from '@/components/Footer';
import Furniture from '@/components/Furniture/Furniture';
import FurnitureGalley from '@/components/Furniture/FurnitureGallery';
import GetInspired from '@/components/Inspirations/GetInspired';
import FooterImageTiles from '@/components/FooterImageTiles';
export default {
    name: "Faq",
    data: function() {
        return {
            faqs: {
                ordering: {
                    group: 'ordering',
                    title: "ORDERING ON INSPLOSION",
                    data: [
                        {
                            question: "Question1",
                            answer: "Answer1",
                            control: "Control1",
                            visible: false
                        },
                        {
                            question: "Question2",
                            answer: "Answer2",
                            control: "Control2",
                            visible: false
                        },
                        {
                            question: "Question3",
                            answer: "Answer3",
                            control: "Control3",
                            visible: false
                        },
                        {
                            question: "Question4",
                            answer: "Answer4",
                            control: "Control4",
                            visible: false
                        },
                    ]
                },
                account: {
                    group: 'account',
                    title: "YOUR ACCOUNT",
                    data: [
                        {
                            question: "Question1",
                            answer: "Answer1",
                            control: "Control1",
                            visible: false
                        },
                        {
                            question: "Question2",
                            answer: "Answer2",
                            control: "Control2",
                            visible: false
                        },
                        {
                            question: "Question3",
                            answer: "Answer3",
                            control: "Control3",
                            visible: false
                        },
                        {
                            question: "Question4",
                            answer: "Answer4",
                            control: "Control4",
                            visible: false
                        },
                    ]
                }
            },
            selection: 'privacy'
        }
    },
    methods: {
        hideOthers(question, visible, group) {
            switch (group) {
                case 'ordering' :
                    for(let i = 0; i < this.faqs.ordering.data.length; i++) {
                        if (this.faqs.ordering.data[i].question != question) {
                            this.faqs.ordering.data[i].visible = false;
                        } else {
                            this.faqs.ordering.data[i].visible = visible;
                        }
                    }
                break;

                case 'account' :
                    for(let i = 0; i < this.faqs.account.data.length; i++) {
                        if (this.faqs.account.data[i].question != question) {
                            this.faqs.account.data[i].visible = false;
                        } else {
                            this.faqs.account.data[i].visible = visible;
                        }
                    }
                break;
            }
            
        }
    },
    components: {
        FaqItem,
        Footer,
        Furniture,
        FurnitureGalley,
        GetInspired,
        FooterImageTiles
    }
}
</script>