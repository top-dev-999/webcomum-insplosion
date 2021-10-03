<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
    <g fill="none" fill-rule="evenodd">
        <g>
            <g>
                <g class='facebook_dark_container'>
                    <path stroke="#777" d="M20 1.667h0C9.874 1.667 1.667 9.79 1.667 19.81v.379c0 10.02 8.207 18.143 18.333 18.143 10.126 0 18.333-8.124 18.333-18.143v-.379c0-10.02-8.207-18.144-18.333-18.144h0z" transform="translate(-1715.000000, -200.000000) translate(1713.000000, 169.000000) translate(2.000000, 31.000000)"/>
                    <path class='facebook_dark_letter' fill="#777" d="M24.872 13.59h-2.358c-.465 0-.937.484-.937.846v2.414h3.29c-.132 1.852-.404 3.545-.404 3.545H21.56v9.693h-4.326v-9.693h-2.106v-3.532h2.106v-2.888c0-.527-.107-4.062 4.433-4.062h3.205v3.677z" transform="translate(-1715.000000, -200.000000) translate(1713.000000, 169.000000) translate(2.000000, 31.000000)"/>
                </g>
            </g>
        </g>
    </g>
</svg>

</template>

<script>
export default {
    name: "FollowFacebookDark"
}
</script>

<style lang="scss">
    svg:hover .facebook_dark_letter {
        fill: white;
    }
    svg:hover .facebook_dark_container {
        fill: black;
    }
</style>