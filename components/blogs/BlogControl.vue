<template>
    <div class="blog-control">
        <BlogLists />
        <BlogItems />
    </div>
</template>

<script>
import BlogLists from '@/components/blogs/BlogLists';
import BlogItems from '@/components/blogs/BlogItems';
export default {
    name: 'BlogControl',
    components: {
        BlogLists,
        BlogItems
    }
}
</script>