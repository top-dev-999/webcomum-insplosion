<template>
        <div class="living-room-form-control">
        <div class="living-room-brand">
            <img src="@/assets/images/collection/item.png" alt="">
            <h4>ULTIMATE <br> GREY & <br> ILLUMINATING</h4>
        </div>
        <div class="living-room-form-detail">
            <SmallText text="EBOOKS & CATALOGUES" />
            <h4>
                DOWNLOAD NEW CATALOGUE
            </h4>
            <UserInfoForm />
            <ViewAllCatalogue />

        </div>
        </div>
   
</template>

<script>
import SmallText from '@/components/basic/SmallText';
import UserInfoForm from '@/components/basic/UserInfoForm';
import ViewAllCatalogue from '@/components/basic/ViewAllCatalogue';
export default {
    name: 'LivingRoomForm',
    components: {
        SmallText,
        UserInfoForm,
        ViewAllCatalogue
    }
}
</script>
<style lang="scss" scoped>
  @media (max-width: 1350px) and (min-width: 974px) {
  .living-room-brand {
      h4 {
          font-size: 18px;
      }
  }
}
</style>