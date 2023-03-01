import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#d34542',
                secondary: '#ae5e5d',
                accent: '#ddb1ab',
                error: '#575656',
            },
        },
    },
});
