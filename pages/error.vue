<template>
  <div>
    <b-row class="page-404-control flex-row-reverse mx-0">
      <b-col md="6" sm="12" class="page-404-image" >
        <img src="@/assets/images/page404/img.png" alt="">
      </b-col>
      <b-col lg="5" md="6" sm="12" class="page-404-content pl-5" offset-lg="1" align-self="center">
        <div class="page-404-description">
            <SmallText text="404 ERROR" />
            <h1>OOPS!</h1>
            <p>Page not found</p>
            <Button02 text="BACK TO HOME" theme="black" hover="white-black" />
        </div>
      </b-col>
      
    </b-row>
    <Furniture />
    <FurnitureGallery />
    <Footer />
    <GetInspired />
  </div>
</template>

<script>
import Socialbar from '@/components/Socialbar';
import Button02 from '@/components/basic/Button02';
import SmallText from '@/components/basic/SmallText';
import Footer from '@/components/Footer';
import Furniture from '@/components/Furniture/Furniture';
import FurnitureGalley from '@/components/Furniture/FurnitureGallery';
import GetInspired from '@/components/Inspirations/GetInspired';
export default {
  name: "Error",
  components: {
    Socialbar,
    Button02,
    SmallText,
    Footer,
    Furniture,
    FurnitureGalley,
    GetInspired,
  }
}
</script>