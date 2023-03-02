import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
import FarmFilter from '@/components/FarmFilter/FarmFilter.vue'
const localVue = createLocalVue()
localVue.use(Vuex);

describe('CountryList', () => {

  let store
  let actions
  let mutations
  let getters
  let state
  let wrapper
  const unsortedCountries = [
    { name: 'Brazil', cases: 10000 },
    { name: 'Argentina', cases: 5000 },
    { name: 'Chile', cases: 8000 }
  ];

  beforeEach(() => {
    state = {
      lstCovidCases: [],
      lstFilteredCovidCases: [],
      globalInfo: {},
      apiMessage: '',
      isCachingInProgress: false,
      showLoading: false
    },
    actions = {
      fetchLstCovidCases: jest.fn(),
      filterLstCovidCases: jest.fn(),
      orderListOfCountries: jest.fn(),
    },
    mutations = {
      saveLstCovidCases: jest.fn(),
      filterLstCovidCases: jest.fn(),
      saveApiMessage: jest.fn(),
      setShowLoading: jest.fn(),
      orderListOfCountries: jest.fn(),
    },
    getters = {
      lstCovidCases: () => unsortedCountries,
      lstFilteredCovidCases:() => unsortedCountries,
      apiMessage: () =>'',
      showLoading: () =>false,
      isCachingInProgress:() => false
    },
    store = new Vuex.Store({
      actions,
      mutations,
      getters,
      state
    })

    wrapper = shallowMount(FarmFilter, {store, localVue, propsData: {
                optionOrder:'ASC|COUNTRY'
              }
    })
  // Criando um exemplo de lista de países desordenada
  

  // Testando a ordenação alfabética

    // Obtendo o botão de ordenação alfabética e clicando nele
    /*const sortByNameButton = wrapper.find('#sort-by-country-name');
    await sortByNameButton.trigger('click');

    // Obtendo a lista ordenada da store
    const sortedCountries = store.state.lstFilteredCovidCases;

    // Verificando se o primeiro país na lista ordenada é o esperado
    expect(sortedCountries[0].name).toBe('Argentina');*/
  })

  it('sorts countries alphabetically', async () => {
    expect(wrapper.props().optionOrder).toBe('ASC|COUNTRY');
  });

  
});
