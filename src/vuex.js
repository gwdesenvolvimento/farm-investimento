import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        lstCovidCases: [],
        lstFilteredCovidCases: [],
        globalInfo: {},
        apiMessage: '',
        isCachingInProgress: false,
        showLoading: false
    },
    mutations: {
        saveLstCovidCases(state, payload) {
            state.lstCovidCases = payload
            state.lstFilteredCovidCases = payload
            state.showLoading = false
            state.apiMessage = ''
            state.isCachingInProgress = false
        },
        filterLstCovidCases(state, payload) {

            state.showLoading = true

            if (payload !== "") {
                state.lstFilteredCovidCases = state.lstCovidCases.filter(item => item.Country.toUpperCase().indexOf(payload.toUpperCase()) !== -1)
                state.showLoading = false
                state.apiMessage = (state.lstFilteredCovidCases.length == 0) ? 'Não foi encontrado nenhum registro para o país país procurado' : ''
                return 
            }
            
            state.lstFilteredCovidCases = state.lstCovidCases
            state.showLoading = !(state.lstFilteredCovidCases.length > 0)
            state.apiMessage = ''
            state.isCachingInProgress = false
        },
        saveApiMessage(state, payload) {
            state.apiMessage = payload
            state.showLoading = false
            state.isCachingInProgress = true
        },
        setShowLoading(state, payload) {
            state.showLoading = payload
        },
        orderListOfCountries(state, direction) {
            let arrDirection = direction.split('|')
            direction = arrDirection[0]
            let field = arrDirection[1]
            
            if (field === "COUNTRY") {
                switch (direction) {
                    case "ASC": state.lstFilteredCovidCases = state.lstFilteredCovidCases.sort((a, b) => a.Country.localeCompare(b.Country)); break;
                    default: state.lstFilteredCovidCases = state.lstFilteredCovidCases.sort((a, b) => b.Country.localeCompare(a.Country)); break;
                }
            }

            switch (field) {
                case "TOTAIS": state.lstFilteredCovidCases = state.lstFilteredCovidCases.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed); break;
                case "MORTES": state.lstFilteredCovidCases = state.lstFilteredCovidCases.sort((a, b) => b.TotalDeaths - a.TotalDeaths); break;
                case "FATALIDADES": state.lstFilteredCovidCases = state.lstFilteredCovidCases.sort((a, b) => b.fatalidadePercentual - a.fatalidadePercentual); break;
            }
            //
        }

    },
    getters: {
        lstCovidCases: state => state.lstCovidCases,
        lstFilteredCovidCases: state => state.lstFilteredCovidCases,
        apiMessage: state => state.apiMessage,
        showLoading: state => state.showLoading,
        isCachingInProgress: state => state.isCachingInProgress
    },
    actions: {
        fetchLstCovidCases(context) {
            context.commit('setShowLoading', true)
            axios.get('/summary')
                .then(response => {
                    if (response.data.Countries !== undefined) {
                        let covidData = response.data.Countries.map(country => {
                            return {
                                ...country,
                                fatalidadePercentual: parseFloat((country.TotalDeaths * 100 / country.TotalConfirmed).toFixed(2))
                            }
                        })
                        context.commit('saveLstCovidCases', covidData)
                        return 
                    }
                    
                    context.commit('saveLstCovidCases', response.data)
                    context.commit('saveApiMessage', response.data.Message)

                })
        },
        filterLstCovidCases(context, countryName) {
            context.commit('filterLstCovidCases', countryName)
        },
        orderListOfCountries(context, direction) {
            context.commit('orderListOfCountries', direction)
        }
    }
})

export { store }