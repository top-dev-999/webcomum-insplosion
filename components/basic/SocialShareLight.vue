<template>
    <div class="social-share-light">
        <p>SHARE</p>
        <a href=""><FollowFacebookDark /></a>
        <a href=""><FollowInstagramDark /></a>
        <a href=""><FollowPinterestDark /></a>
    </div>
</template>

<script>
import FollowFacebookDark from '@/components/svg/SocialFollow/FollowFacebookDark';
import FollowInstagramDark from '@/components/svg/SocialFollow/FollowInstagramDark';
import FollowPinterestDark from '@/components/svg/SocialFollow/FollowPinterestDark';
export default {
    name: "SocialShareLight",
    components: {
        FollowPinterestDark,
        FollowInstagramDark,
        FollowFacebookDark
    }
}
</script>
