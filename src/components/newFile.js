/* __placeholder__ */
export default (await import('vue')).defineComponent({
name: "Header", data() {
return {
menus: [
{ title: 'Accueil', route: 'Accueil' },
{ title: 'À propos', route: 'À propos' },
{ title: 'Organismes', route: 'Organismes' },
{ title: 'Projets', route: 'Projets' },
{ title: 'Langue', route: 'Langue' },
]
};
}
});
