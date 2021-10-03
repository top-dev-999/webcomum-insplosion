<template>
    <div class="inspiration-trends-item"  @mouseover="upHere = true" @mouseleave="upHere = false">
        <img src="@/assets/images/inspiration/trends/img.png" alt="" v-if="image == null || image == ''">
        <img :src="image" alt="" v-if="image != ''">
        <h3>{{ title }}</h3>
        <h4>{{ description }}</h4>
        <MoreInfoButton v-if="upHere == false"  />
        <GetPriceButtonGroup v-if="upHere == true" @price-click="showModal"/>

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
                    <Button02 theme="red-fill" text="REQUEST" @click="hideModal" hover="white-black" />
                </div>
            </div>
            
            
        </b-modal>
    </div>
</template>

<script>
import MoreInfoButton from '@/components/basic/MoreInfoButton';
import GetPriceButtonGroup from '@/components/basic/GetPriceButtonGroup';
import SmallText from '@/components/basic/SmallText';
import Input from '@/components/basic/Input';
import Checkbox from '@/components/basic/Checkbox';
import Button02 from '@/components/basic/Button02';
import CountrySelection from '@/components/basic/CountrySelection';
export default {
    name: 'InspirationTrendsItem',
    props: ["title", "description", "image"],
    components: {
        MoreInfoButton,
        GetPriceButtonGroup,
        SmallText,
        Input,
        Checkbox,
        Button02,
        CountrySelection
    },
    data: function () {
        return {
            upHere : false,
            selected: 'A',
            options: [
                { item: 'A', name: 'PROFESSIONAL' },
                { item: 'B', name: 'PRIVATE CLIENT' },
            ]
        }
    },
    methods: {
        showModal() {
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        }
    }
}
</script>