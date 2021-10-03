<template>
    <div class="hall-form-control">
        <div class="hall-form-brand">
            <img src="@/assets/images/collection/item.png" alt="">
        </div>
        <div class="hall-form-detail">
            <small>DOWNLOAD NOW CATALOGUE</small>
            <h4>
                ULTIMATE GREY & <br /> ILLUMINATING
            </h4>
            <Button02 text="FREE DOWNLOAD" theme="red" hover="red-white" />
            <ViewAllCatalogue />
        </div>
    </div>
</template>

<script>
import Button02 from '@/components/basic/Button02';
import ViewAllCatalogue from '@/components/basic/ViewAllCatalogue';
export default {
    name: "HallForm",
    components: {
        Button02,
        ViewAllCatalogue
    }
}
</script>

