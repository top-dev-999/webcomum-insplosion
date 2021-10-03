<template>
    <b-row class="ebooks-catalogues-out-form mx-0">
        <b-col lg="6" md="12" class="ebooks-catalogues-image">
            <img src="@/assets/images/ebooks-catalogues/out/cycle-catalogues.png" alt="">
            <h4>ULTIMATE GREY & ILLUMINATING</h4>
        </b-col>
        <b-col lg="6" md="12" class="ebooks-catalogues-content px-5 py-5">
            <SmallText text="EBOOKS & CATLOGUES" />
            <h4>ULTIMATE GREY & ILLUMINATING</h4>
            <div class="price-show">
                <del>&euro;90.00</del>
                <a href="">FREE</a>
            </div>
            <dt>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas <br> varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. <br> Vestibulum aliquam hendrerit molestie.
            </dt>
            <UserInfoForm />
        </b-col>
    </b-row>
</template>
<script>
import SmallText from "@/components/basic/SmallText";
import UserInfoForm from '@/components/basic/UserInfoForm';
export default {
    name: 'EbooksCataloguesOutForm',
    components: {
        SmallText,
        UserInfoForm
    }
}
</script>