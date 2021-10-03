<template>
    <b-row class="link-card-control mx-0">
        <b-col lg="4" offset-lg="2" md="12" class="our-shop-card mr-2 pl-4">
                <h4>OUR SHOP</h4>
                <Button02 text="GO TO ONLINE SHOP" theme="black" hover="black-white" />
                    
        </b-col>
        <b-col lg="4" md="12" class="our-trends-card ml-2 pl-4">
                <h4>EXPLORE <br> OUR TREND</h4>
                <Button02 text="EXPLORE NOW" theme="black" hover="black-white" />
        </b-col>
    </b-row>
</template>

<script>
import Button02 from '@/components/basic/Button02';
export default {
    name: "LinkCards",
    components: {
        Button02
    }
}
</script>