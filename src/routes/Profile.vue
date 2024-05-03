<template>
    <div class="container">
        <div class="about">
            <div class="photo">
                <img :src="image" alt="name">
            </div>
            <div class="profile">
                <div class="name">
                    {{ name }} {{ birth }}
                </div>
                <div class="">
                    {{ email }}
                </div>
                <div class="">
                    {{ lisence }}
                </div>
                <div class="">
                    {{ aducation }}
                </div>
            </div>
        </div>
        <div class="skills">

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.container {
    .about {
        display: flex;
    }
    .skills {

    }
}
</style>