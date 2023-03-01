<template>
    <v-app-bar
        app
    >
        <v-container>
            <div class="d-flex align-center">
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="../../assets/img/logo.png"
                    transition="scale-transition"
                />
            </div>
        </v-container>
    </v-app-bar>
</template>

<script>
export default {
    name: 'FarmNavbar',
    data: () => ({
        //
    }),
};
</script>
