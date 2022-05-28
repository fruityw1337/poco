<template>
    <div>HOME</div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },

    methods: {
        async getLogin() {
            console.log('first')
        },
    },
}
</script>

<style scoped></style>
