<template>
  <!-- <b-row class="maintenance">
    <b-col lg="6" md="12" class="maintenance-description">
      <SmallText text="Maintenance" />
      <h1>SORRY,</h1>
      <p>we're down for maintenance, <br />we'll be back soon.</p>
      <dt>If you need any information please contact:</dt>
      <MaintenanceContact />
    </b-col>
    <b-col lg="6" md="12" class="maintenence-image">
      <img src="@/assets/images/maintenance/maintenance.png" alt="">
    </b-col>
  </b-row> -->
  <b-container fluid>
    <b-row class="maintenance flex-row-reverse">
      <b-col lg="6" md="12" class="maintenance-image p-0">
        <img src="@/assets/images/maintenance/maintenance.png" alt="">
      </b-col>
      <b-col lg="6" md="12" class="maintenance-description  py-5" align-self="center">
        <SmallText text="Maintenance" />
        <h1>SORRY,</h1>
        <p>we're down for maintenance, <br />we'll be back soon.</p>
        <dt>If you need any information please contact:</dt>
        <MaintenanceContact />
      </b-col>
      
    </b-row>
  </b-container>
</template>

<script>
import Socialbar from '@/components/Socialbar';
import SmallText from '@/components/basic/SmallText';
import MaintenanceContact from '@/components/MaintenanceContact';
export default {
  name: 'Maintenance',
  components: {
    SmallText,
    Socialbar,
    MaintenanceContact
  }
}
</script>