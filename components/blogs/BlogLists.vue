<template>
    <div class="blog-lists-control">
        <ul>
            <li @click="selected = 'all'" :class="selected == 'all' ? 'selected' : null">ALL</li>
            <li @click="selected = 'interior'" :class="selected == 'interior' ? 'selected' : null">INTERIOR</li>
            <li @click="selected = 'architecture'" :class="selected == 'architecture' ? 'selected' : null">ARCHIETECTURE</li>
            <li @click="selected = 'furniture'" :class="selected == 'furniture' ? 'selected' : null">FURNITURE</li>
            <li @click="selected = 'projects'" :class="selected == 'projects' ? 'selected' : null">PROJECTS</li>
            <li @click="selected = 'lifestyle'" :class="selected == 'lifestyle' ? 'selected' : null">LIFESTYLE</li>
            <li @click="selected = 'trends'" :class="selected == 'trends' ? 'selected' : null">TRENDS</li>
            <li @click="selected = 'designer'" :class="selected == 'designer' ? 'selected' : null">DESINERS</li>
            <li @click="selected = 'products'" :class="selected == 'products' ? 'selected' : null">PRODUCTS</li>
        </ul>
        <div>
            <SearchButton theme="dark" />
        </div>
    </div>
</template>

<script>
import SearchButton from '@/components/basic/SearchButton';
export default {
    name: 'BlogLists',
    components: {
        SearchButton
    },
    data: function() {
        return {
            selected: 'all'
        }
    }
}
</script>