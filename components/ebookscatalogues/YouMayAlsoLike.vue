<template>
    <div class="you-may-also-like-control">
        <div class="you-may-also-like-header">
            <h1>YOU MAY ALSO LIKE</h1>
        </div>
        <div class="you-may-also-like-content">
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
    name: 'YouMayAlsoLike',
    components: {
        InspirationToolItem
    }
}
</script>