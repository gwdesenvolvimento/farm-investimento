import { createLocalVue, mount } from '@vue/test-utils';
import FarmFilter from '../../src/components/FarmFilter/FarmFilter.vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';

describe('Testando componente FarmFilter', () => {

  let localVue;
  let vuetify;
  let wrapper;
  let store;
  
  const storeCovid = {
    state: {
      lstCovidCases: [
        { Country: 'Spain', cases: 200000, deaths: 10000, caseFatalityRate: 0.05 },
        { Country: 'Argentina', cases: 500000, deaths: 25000, caseFatalityRate: 0.05 },
        { Country: 'Brazil', cases: 100000, deaths: 5000, caseFatalityRate: 0.05 },
      ],
      lstFilteredCovidCases: [
        { Country: 'Spain', cases: 200000, deaths: 10000, caseFatalityRate: 0.05 },
        { Country: 'Argentina', cases: 500000, deaths: 25000, caseFatalityRate: 0.05 },
        { Country: 'Brazil', cases: 100000, deaths: 5000, caseFatalityRate: 0.05 },
      ],
      showLoading: false,
      apiMessage: '',
      isCachingInProgress: false,
    },
    getters: {
      lstFilteredCovidCases: state => state.lstFilteredCovidCases
    },
    mutations: {
      filterLstCovidCases(state, payload) {
        state.showLoading = true
        
        if (payload !== "") {
          state.lstFilteredCovidCases = state.lstCovidCases.filter(item => item.Country.indexOf(payload) !== -1)
          state.showLoading = !(state.lstFilteredCovidCases.length > 0)
          state.apiMessage = ''
          return 
        }
        
        state.lstFilteredCovidCases = state.lstCovidCases
        state.showLoading = !(state.lstFilteredCovidCases.length > 0)
        state.apiMessage = ''
        state.isCachingInProgress = false
      },
      orderListOfCountries(state, direction) {
          console.log(direction)
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
      }
    },
    actions: {
      filterLstCovidCases({ commit }, countryName) {
        commit('filterLstCovidCases', countryName)
      },
      orderListOfCountries({ commit }, direction) {
        commit('orderListOfCountries', direction)
      }
    }
  }

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex)
    store = new Vuex.Store(storeCovid);  
    vuetify = new Vuetify()
    localVue.use(vuetify)
    
    wrapper = mount(FarmFilter, {
      localVue,
      vuetify,
      store,
      attachTo: document.body,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('Verifica se uma instancia do Vue foi criada', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test('Verifica se Renderizou corretamente', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('Verifica se o Filtro está funcionando corretamente.', async () => {
    const filterInput = wrapper.find('[data-testid="input-field"]');
    await wrapper.setData({ countryName: "Brazil" });
    filterInput.trigger('keydown');
    const filteredCountries = store.state.lstFilteredCovidCases;
    expect(filteredCountries.length).toBe(1);
    expect(filteredCountries[0].Country).toBe('Brazil');
  });

  test('Verifica se o Filtro está voltando com todas os países.', async () => {
    const filterInput = wrapper.find('[data-testid="input-field"]');
    await wrapper.setData({ countryName: "" });
    filterInput.trigger('keydown');
    const filteredCountries = store.state.lstFilteredCovidCases;
    expect(filteredCountries.length).toBe(3);
    expect(filteredCountries[0].Country).toBe('Spain');
  });

});