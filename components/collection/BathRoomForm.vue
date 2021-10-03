<template>
    <b-row class="mx-0 bath-room-form-control" align-v="center">
        <b-col lg="5" md="12" class="bath-room-brand">
            <b-row class="px-5" align-v="center">
                <b-col lg="6">
                    <img src="@/assets/images/collection/item.png" alt="">
                </b-col>
                <b-col lg="6">
                     <h4>ULTIMATE <br> GREY & <br> ILLUMINATING</h4>
                </b-col>
            </b-row>
        </b-col>
        <b-col lg="7" md="12" class="bath-room-form-detail">
            <b-row align-v="center">
                <SmallText text="EBOOKS & CATALOGUES" />
                <h4>
                    DOWNLOAD NEW CATALOGUE
                </h4>
                <UserInfoForm />
                <ViewAllCatalogue />
            </b-row>

        </b-col>
    </b-row>
   
</template>

<script>
import SmallText from '@/components/basic/SmallText';
import UserInfoForm from '@/components/basic/UserInfoForm';
import ViewAllCatalogue from '@/components/basic/ViewAllCatalogue';
export default {
    name: 'BathRoomForm',
    components: {
        SmallText,
        UserInfoForm,
        ViewAllCatalogue
    }
}
</script>

<style lang="scss" scoped>
  @media (max-width: 1350px) and (min-width: 974px) {
  .bath-room-brand {
      h4 {
          font-size: 18px;
      }
  }
}
</style>
