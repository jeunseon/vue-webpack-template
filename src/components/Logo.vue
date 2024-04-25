<template>
    <RouterLink
            to="/"
            class="logo">
        EUNSEON
    </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.logo {
    font-family: "Oswald", sans-serif;
    font-size: 30px;
    color: $primary;
    text-decoration: none;
    &:hover {
        color: $primary;
    }
}
</style>