import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        lstCovidCases: [],
        lstFilteredCovidCases: [],
        apiMessage: '',
        showLoading: false
    },
    mutations: {
        saveLstCovidCases(state, payload) {
            state.lstCovidCases = payload
            state.lstFilteredCovidCases = payload
            state.showLoading = false
        },
        filterLstCovidCases(state, payload) {

            if (payload !== "") {
                state.lstFilteredCovidCases = state.lstCovidCases.filter(item => item.Country == payload)
                return 
            }
            
            state.lstFilteredCovidCases = state.lstCovidCases
            state.showLoading = false
        },
        saveApiMessage(state, payload) {
            state.apiMessage = payload
            state.showLoading = true
        }
    },
    getters: {
        lstCovidCases: state => state.lstCovidCases,
        lstFilteredCovidCases: state => state.lstFilteredCovidCases,
        apiMessage: state => state.apiMessage,
        showLoading: state => state.showLoading
    },
    actions: {
        fetchLstCovidCases(context) {
            axios.get('/summary')
                .then(response => {
                    if (response.data.Countries !== undefined) {
                        context.commit('saveLstCovidCases', response.data.Countries)
                        return 
                    }

                    context.commit('saveApiMessage', response.data.Message)

                })
        },
        filterLstCovidCases(context, countryName) {
            context.commit('filterLstCovidCases', countryName)
        },
    }
})

export { store }