<template>
    <div class='trends-out-moodboard-item'>
        <img :src="data.image" alt="">
        <dt>{{ data.description }}</dt>
        <DownloadButton />
    </div>
</template>

<script>
import DownloadButton from '@/components/basic/DownloadButton';
export default {
    name: "TrendsOutMoodBoardItem",
    props: ["data"],
    components: {
        DownloadButton
    }
}
</script>