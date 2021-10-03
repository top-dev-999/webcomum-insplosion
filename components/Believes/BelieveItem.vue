<template>
    <b-container>
        <b-row class="believe-item" v-if="type== 'description-first'">
            <b-col lg="5" md="12" class="believe-item-description description-first">
                <h3>TRENDSETTING</h3>
                <dt>
                    Through creativity we aim topopularize the best content we create.
                </dt>
            </b-col>
            <b-col lg="7" md="12" class="believe-item-image">
                <img src="@/assets/images/believes/item1.png" alt="" srcset="">
            </b-col>
        </b-row>
        <b-row class="believe-item" v-if="type== 'image-first'">
            <b-col lg="7" md="12" class="believe-item-image">
                <img src="@/assets/images/believes/item1.png" alt="" srcset="">
            </b-col>
            <b-col lg="5" md="12" class="believe-item-description image-first">
                <h3>TRENDSETTING</h3>
                <dt>
                    Through creativity we aim topopularize the best content we create.
                </dt>
            </b-col>
        </b-row>
        
    </b-container>
</template>

<script>
export default {
    name: 'BelieveItem',
    props: ['type']
}
</script>