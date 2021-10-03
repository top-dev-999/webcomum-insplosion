<template>
    <div>     
      <a class="download-row d-none d-lg-flex row" @mouseover="upHere = true" @mouseleave="upHere = false"
            :class="{'hover-download-row': upHere}" v-b-toggle :href="bindid" @click.prevent>
            <p>EMERALAD GREEN - <a >DOWNLOAD NOW CATALOGUE <img src="@/assets/images/basic/download.png" alt=""></a></p>
        </a> 
        <b-collapse :id='bindID' :class="bindClass">

            <b-row class="download-form-control d-none d-lg-flex mx-0">
                <b-col lg="5" class="download-brand">
                    <b-row>
                        <b-col lg="6">
                            <img src="@/assets/images/collection/item.png" alt="">
                        </b-col>
                        <b-col lg="6" align-self="center">
                            <h4>ULTIMATE <br> GREY & <br> ILLUMINATING</h4>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col lg="7" class="download-form-detail">
                    <SmallText text="EBOOKS & CATALOGUES" />
                    <h4>
                        DOWNLOAD NEW CATALOGUE
                    </h4>
                    <UserInfoForm />
                    <ViewAllCatalogue />
                </b-col>
            </b-row>
        </b-collapse>
      
        
    </div>
   
</template>

<script>
import SmallText from '@/components/basic/SmallText';
import UserInfoForm from '@/components/basic/UserInfoForm';
import ViewAllCatalogue from '@/components/basic/ViewAllCatalogue';
export default {
    name: 'DownloadForm',
    props: ["bindID", "bindClass"],
    components: {
        SmallText,
        UserInfoForm,
        ViewAllCatalogue
    },
    computed: {
        bindid: function()
        {
            return '#' + this.bindID;
        }
    },
    data: function() {
        return {
            upHere : false
        }
    }
}
</script>

<style scoped>
 .example-collapse {
     margin-left: -15px;
     margin-right: -15px;
 }
</style>