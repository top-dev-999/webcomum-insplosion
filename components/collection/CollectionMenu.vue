<template>
    <div class="collection-menu-control">
        <div class="d-none d-lg-block">
            <a href="">LIVING ROOM</a>
            <a href="">DINING ROOM</a>
            <a href="">HALL</a>
            <a href="">BATHROOM</a>
            <a href="">BEDROOM</a>
            <a href="">ENTRYWAY</a>
            <a href="">KIDS</a>
            <a href="">KITCHEN</a>
            <a href="">BAR</a>
            <a href="">RESTAURANTS</a>
        </div>
        <div class="view-all-control d-lg-none d-md-block">
            <ViewAll text="VIEW ALL PRODUCTS" />
        </div>
    </div>
  
</template>

<script>
import ViewAll from '@/components/basic/ViewAll';
export default {
    name: 'CollectionMenu',
    components: {
        ViewAll
    }
}
</script>