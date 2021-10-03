<template>
    <b-row class="get-know-us-better-control">
        <b-col lg="4" md="12" class="get-know-us-better-description">
            <SmallText text="TALK WITH US" />
            <h2>Get in Touch</h2>
            <dt>
                Inspiration can be everywhere, from top designers tips, to carefully designed interior design and home décor projects and pics. The trick is knowing what to look for and use it correctly.
            </dt>
        </b-col>
        <b-col lg="6" offset-lg="2" md="12" class="get-know-us-better-form">
            <b-row class="input-row">
                <b-col lg="4" md="12" class="input-item">
                    <Input placeholder="NAME"/>
                </b-col>
                <b-col lg="4" md="12" class="input-item">
                    <Input placeholder="EMAIL"/>
                </b-col>
                <b-col lg="4" md="12" class="input-item">
                    <Input placeholder="TOPIC"/>
                </b-col>
            </b-row>
            <div class="input-row">
                <div class="input-item">
                    <Textarea placeholder="MESSAGE"/>
                </div>
            </div>
            <b-row class="input-last-row input-item">
                <b-col lg="6" md="12">
                    <Checkbox text="I agree to the Terms & Conditions and Privacy Policy of Insplosion" />
                </b-col>
                <b-col lg="6" md="12" class="text-sm-center text-lg-right mt-sm-3">
                    <Button02 text="SEND" theme="red" width='width-180' hover="white-black" />
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
import Input from '@/components/basic/Input';
import Textarea from '@/components/basic/Textarea';
import Checkbox from '@/components/basic/Checkbox';
import Button02 from '@/components/basic/Button02';
import SmallText from '@/components/basic/SmallText';
export default {
    name: 'GetKnowUsBetter',
    components: {
        Input,
        Textarea,
        Checkbox,
        Button02,
        SmallText
    }
}
</script>