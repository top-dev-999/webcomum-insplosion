<template>
    <div class="back-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="none" fill-rule="evenodd">
                <g fill="#000" class='back_arrow'>
                    <g>
                        <path d="M12 4L10.59 5.41 16.17 11 4 11 4 13 16.17 13 10.59 18.59 12 20 20 12z" transform="translate(-174.000000, -167.000000) translate(170.000000, 163.000000) translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000)"/>
                    </g>
                </g>
            </g>
        </svg>

        <p>BACK</p>
    </div>
</template>

<script>
export default {
    name: "BackLink"
}
</script>

<style scoped lang="scss">
    .back-link {
        cursor: pointer;
    }
    .back-link:hover {
        svg {
            .back_arrow {
                fill: #ef4136;;
            }
        }
        p {
            color: #ef4136;;
        }
    }
</style>