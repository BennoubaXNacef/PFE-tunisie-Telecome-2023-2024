<template>
    <v-app-bar style="padding:0px 90px" app color=" white" light elevation="6" elevate-on-scroll>
        <v-toolbar-title>
            STAGY
        </v-toolbar-title>
        <v-spacer />
        <v-list class="d-flex align-center">
            <v-list-item link v-for="(menu, index) in menus" :key="index" :to="menu.route">
                <v-list-item-title>{{ menu.title }}</v-list-item-title>
                <v-btn color="#64DD17" elevation="2" icon large rounded>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-btn elevation="2" plain rounded>Postuler maintenant!</v-btn>
        </v-list>
    </v-app-bar>
</template>
<script>
export default {
    name: "Header", data() {
        return {
            menus: [
                { title: 'Accueil', route: 'Accueil' },
                { title: 'À propos', route: 'À propos' },
                { title: 'Organismes', route: 'Organismes' },
                { title: 'Projets', route: 'Projets' },
                { title: 'Langue', route: 'Langue' },
            ]
        }

    }
}
</script>
<style scoped></style>