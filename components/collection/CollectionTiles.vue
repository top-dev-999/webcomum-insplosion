<template>
<div>
    <div class="colllection-tile-control" v-if="$mq == 'desktop'">
        <div class="collection-tile-row">
            <CollectionTileItem :image="require('@/assets/images/collection/tile/tile1/tile1.png')"
                                title="MIRROR" description="+71 PRODUCTS" />
            <CollectionTileItem :image="require('@/assets/images/collection/tile/tile1/tile1.png')"
                                title="MIRROR" description="+71 PRODUCTS" />
            <CollectionTileItem :image="require('@/assets/images/collection/tile/tile1/tile1.png')"
                                title="MIRROR" description="+71 PRODUCTS" />
            <CollectionTileItem :image="require('@/assets/images/collection/tile/tile1/tile1.png')"
                                title="MIRROR" description="+71 PRODUCTS" />
            <CollectionTileItem :image="require('@/assets/images/collection/tile/tile1/tile1.png')"
                                title="MIRROR" description="+71 PRODUCTS" />
        </div>
        <div class="collection-tile-row">
            <CollectionTileItem :image="require('@/assets/images/collection/tile/tile1/tile1.png')"
                                title="MIRROR" description="+71 PRODUCTS" />
            <CollectionTileItem :image="require('@/assets/images/collection/tile/tile1/tile1.png')"
                                title="MIRROR" description="+71 PRODUCTS" />
            <CollectionTileItem :image="require('@/assets/images/collection/tile/tile1/tile1.png')"
                                title="MIRROR" description="+71 PRODUCTS" />
            <CollectionTileItem :image="require('@/assets/images/collection/tile/tile1/tile1.png')"
                                title="MIRROR" description="+71 PRODUCTS" />
            <CollectionTileItem :image="require('@/assets/images/collection/tile/tile1/tile1.png')"
                                title="MIRROR" description="+71 PRODUCTS" />
        </div>
    </div>
    <div class="colllection-tile-control" :class="$mq" v-if="$mq == 'tablet' || $mq == 'mobile'">
        <div class="collection-tile-row" :class="$mq">
            <CollectionTileItem :image="require('@/assets/images/collection/tile/tile1/tile1.png')"
                                title="MIRROR" description="+71 PRODUCTS" />
            <CollectionTileItem :image="require('@/assets/images/collection/tile/tile1/tile1.png')"
                                title="MIRROR" description="+71 PRODUCTS" />
        </div>
        <div class="collection-tile-row" :class="$mq">
            <CollectionTileItem :image="require('@/assets/images/collection/tile/tile1/tile1.png')"
                                title="MIRROR" description="+71 PRODUCTS" />
            <CollectionTileItem :image="require('@/assets/images/collection/tile/tile1/tile1.png')"
                                title="MIRROR" description="+71 PRODUCTS" />
        </div>
        
    </div>
</div>
</template>

<script>
import CollectionTileItem from '@/components/collection/CollectionTileItem';
export default {
    name: 'CollectionTiles',
    components: {
        CollectionTileItem
    },
    data: function() {
        return {
            data: {
                image: "require('@/assets/images/collection/tile/tile1/tile1.png')",
                title: "MORROR",
                description: "+71 PRODUCTS"
            }
        }
    }
}
</script>