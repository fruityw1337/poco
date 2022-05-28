<template>
    <header>
        <!-- <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div> -->
        <div class="logo">Poco</div>
    </header>
</template>

<script>
export default {
    setup() {},
}
</script>

<style scoped>
header {
    background-color: rgb(22, 22, 22);
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 24px;
}

.logo {
    color: white;
    font-size: 40px;
}
</style>
