<template>
    <div class="brand-entry-control">
        <div class="brand-entry type1" v-if="type == 'type1'">
            <img src="@/assets/images/categories/logo-brand-1/logo-brand.png" alt="">
            <dt>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi <br /> tristique senectus et netus et malesuada fames ac turpis egestas.
            </dt>
            <div class="btn-group">
                <Button02 text="SEE ALL PRODUCTS" theme="white" hover="white-black" />
                <Button02 text="DOWNLOAD CATALOGUE" theme="white" hover="white-black" />
            </div>    
        </div>
        <div class="brand-entry type2" v-if="type == 'type2'">
            <img src="@/assets/images/categories/logo-brand-2/logo-brand.png" alt="">
            <dt>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi <br /> tristique senectus et netus et malesuada fames ac turpis egestas.
            </dt>
            <div class="btn-group">
                <Button02 text="SEE ALL PRODUCTS" theme="white" hover="white-black" />
                <Button02 text="DOWNLOAD CATALOGUE" theme="white" hover="white-black" />
            </div> 
        </div>
    </div>
</template>

<script>
import Button02 from '@/components/basic/Button02';
export default {
    name: "BrandEntry",
    props: ['type'],
    components: {
        Button02
    }
}
</script>