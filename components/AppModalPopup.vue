<template>
  <div class="custom-modal-wrapper" :class="{open : $store.state.modal}">
    <div class="custom-modal-content">
      <div class="content-small">
        <a href="javascript:void(0)" class="modal-close" @click="closePopup"><CloseSVG /></a>

      </div>
    </div>
  </div>
</template>
<script>
import CloseSVG from '@/components/svg/Close';
export default {
  name:'AppModalPopup',
  components:{CloseSVG},
  methods:{
    closePopup(){
      this.$store.dispatch('setOverflow');
      this.$store.dispatch('setModal');
      this.$overflowModal();
    }

  }
}
</script>
