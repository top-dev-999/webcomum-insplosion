<template>
    <div class="professional-result-item">
        <img src="@/assets/images/findprofessional/item/item1.png" alt="">
        <h3>
            SHOWROOM MILANO
        </h3>
        <h4>
            Via Alessandro Manzoni 41, Milano
        </h4>
        <dt>
            Pellentesque habitant morbi tristique se <br /> nectus et netus et malesuada fames ac turpis egestas. <br /> Pellentesque habitant morbi tristique
        </dt>
        <Button02 text="EXPLORE MORE" theme="black" hover="black-white" />
    </div>
</template>

<script>
import Button02 from '@/components/basic/Button02';
export default {
    name: 'ProfessionalResultItem',
    components: {
        Button02
    }
}
</script>