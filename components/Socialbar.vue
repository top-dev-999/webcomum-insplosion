<template>
    <div class="social-gadget">
        <NuxtLink to="/"><ICFacebook /></NuxtLink>
        <NuxtLink to="/"><ICInstagram /></NuxtLink>
        <NuxtLink to="/"><ICPinterest /></NuxtLink>
        <NuxtLink to="/"><ICWhatsapp /></NuxtLink>
    </div>
</template>

<script>
import ICFacebook from '@/components/svg/SocialGadget/ICFacebook';
import ICInstagram from '@/components/svg/SocialGadget/ICInstagram';
import ICPinterest from '@/components/svg/SocialGadget/ICPinterest';
import ICWhatsapp from '@/components/svg/SocialGadget/ICWhatsapp';
export default {
    name: 'Socailbar',
    components: {
        ICWhatsapp,
        ICInstagram,
        ICPinterest,
        ICFacebook  
    }
}
</script>