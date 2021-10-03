<template>
  <section class="contacts-section section-padding">
    <div class="container">
      <div class="section-heading">
        <p class="section-title">Contactos</p>
      </div>
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <GmapMap :options="mapOptions">
            <GmapMarker
                :position="{lat:41.1662841, lng:-8.6487137}"
                :draggable="false"
            />
          </GmapMap>
        </div>
        <div class="col-12 col-md-6">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ContactForm from "@/components/forms/ContactsForm";
export default {
  name:'ContactsContent',
  data() {
    return{
      mapOptions: {
        center: {lat:41.1662841, lng:-8.6487137},
        zoom: 12,
        mapTypeControl: false,
        mapTypeIds: ["roadmap"],
        fullscreenControl: false
      }
    }
  },
  components: {
    ContactForm,
  },
};

</script>
