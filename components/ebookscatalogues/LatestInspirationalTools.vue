<template>
    <div class="latest-inspirational-tools-control">
        <div class="latest-inspirational-tools-header">
            <h1>LATEST</h1>
        </div>
        <div class="latest-inspirational-tools-content">
           <div class="inspiration-tool-item-control">
             <InspirationToolItem />
           </div>
           <div class="inspiration-tool-item-control">
             <InspirationToolItem />
           </div>
           <div class="inspiration-tool-item-control">
             <InspirationToolItem />
           </div>
           <div class="inspiration-tool-item-control">
             <InspirationToolItem />
           </div>
           <div class="inspiration-tool-item-control">
             <InspirationToolItem />
           </div>
        </div>
    </div>
</template>

<script>
import InspirationToolItem from '@/components/ebookscatalogues/InspirationToolItem';
export default {
    name: "LatestInspirationalTools",
    components: {
        InspirationToolItem
    }
}
</script>