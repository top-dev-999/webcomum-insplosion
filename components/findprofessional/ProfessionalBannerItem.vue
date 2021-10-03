<template>
    <div class="professional-banner-item text-center px-3">
        <h3>
            NEED HELP FINDING THE RIGHT DESIGNER?
        </h3>
        <dt>Quisque sed bibendum odio. Suspendisse potenti. Nam eu risus risus.</dt>
        <Button02 text="TRY DESIGNER CONNECTION" theme="white-fill" hover='red-white'/>
    </div>
</template>

<script>
import Button02 from '@/components/basic/Button02';
export default {
    name: "ProfessionalBannerItem",
    components: {
        Button02
    }
}
</script>