<template>
    <b-row class="collection-catalogue-control mx-0">
        <!-- <b-col lg="3" md="12" class="collection-catalogue-item our-shop">
            <div>
                <h4>OUR SHOP</h4>
                <Button02 text="GO TO ONLINE SHOP" theme="black" />
            </div>
        </b-col>
        <b-col lg="3" md="12" class="collection-catalogue-item catalogue">
            <div>
                <h4>CATALOGUE</h4>
                <Button02 text="VIEW CATALOGUES" theme="white" />
            </div>
        </b-col>
        <b-col lg="3" md="12" class="collection-catalogue-item find-your-style">
            <div>
                <h4>FIND YOUR <br /> STYLE</h4>
                <Button02 text="GET STARTED" theme="black" />
            </div>
        </b-col> -->
        <b-col lg="4" md="12" class="collection-catalogue-item our-shop" align-self="center">
                <h4>OUR SHOP</h4>
                <Button02 text="GO TO ONLINE SHOP" theme="black" hover="white-black" />
        </b-col>
        <b-col lg="4" md="12" class="collection-catalogue-item catalogue">
                <h4>CATALOGUE</h4>
                <Button02 text="VIEW CATALOGUES" theme="white" hover="white-black" />
        </b-col>
        <b-col lg="4" md="12" class="collection-catalogue-item find-your-style">
                <h4>FIND YOUR <br /> STYLE</h4>
                <Button02 text="GET STARTED" theme="black" hover="white-black" />
        </b-col>
    </b-row>
</template>

<script>
import Button02 from '@/components/basic/Button02';
export default {
    name: 'CollectionCatalogue',
    components: {
        Button02
    }
}
</script>