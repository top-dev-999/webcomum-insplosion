<template>
    <div class="tab-lists">
        <div :class="[{selected : selected == 'all'}, {selected: hoverAll == true}]"
            @mouseenter="hoverAll = true" 
            @mouseleave="hoverAll = false">ALL</div>
        <div :class="[{selected : selected == 'catalogue'}, {selected: hoverCatalogue == true}]"
            @mouseenter="hoverCatalogue = true" 
            @mouseleave="hoverCatalogue = false">CATALOGUE</div>
        <div :class="[{selected : selected == 'ebooks'}, {selected: hoverEbooks == true}]"
            @mouseenter="hoverEbooks = true" 
            @mouseleave="hoverEbooks = false">EBOOKS</div>
        <div  :class="[{selected : selected == 'moodboard'}, {selected: hoverMoodboard == true}]"
            @mouseenter="hoverMoodboard = true" 
            @mouseleave="hoverMoodboard = false">MOODBOARD</div>
    </div>
</template>

<script>
export default {
    name: "InspirationTabs",
    props: ["selected"],
    data: function() {
        return {
            hoverAll: false,
            hoverCatalogue: false,
            hoverEbooks: false,
            hoverMoodboard: false,
        }
    }
}
</script>