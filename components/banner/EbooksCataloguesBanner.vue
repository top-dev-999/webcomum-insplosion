<template>
  <b-row class="ebooks-catalogues-banner mx-0">
    <b-col offset-lg="1" class="ebooks-catalogues-content" lg="3">
			<SmallText text="CATALOGUE" />
			<h2>INSIDE EVERY CHILD'S <br /> DREAM BEDROOM</h2>
			<Button02 text="DOWNLOAD NOW" theme="red" hover="red-white" />
	</b-col>
  </b-row>
</template>

<script>
import Button02 from '@/components/basic/Button02';
import SmallText from '@/components/basic/SmallText';
export default {
	name: "EbooksCataloguesBanner",
	components: {
		Button02,
		SmallText
	}
}
</script>