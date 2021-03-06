const services = [
  {
    name: 'SMS-чек',
    type: 'Услуга',
    description: 'Подключено с 12.09.2017 10:21 по 12.11.2017 10:21',
    price: '1.00',
    period: 'в день',
    update: true,
    ordered: false,
    connected: true,
    disabled: false,
    details: false,
    showDetails: false,
    share: false,
  },
  {
    name: 'Автопродление',
    type: 'Услуга',
    description: 'Отключено с 01.09.2017 10:21',
    price: '',
    period: '',
    update: false,
    ordered: false,
    connected: false,
    disabled: true,
    details: false,
    showDetails: false,
    share: false
  },
  {
    name: 'В Абхазии как дома',
    type: 'Пакет',
    description: 'Заказано c 01.12.2017 10:21 по 12.12.2017 10:21',
    price: '30.00',
    period: 'в день',
    update: false,
    ordered: true,
    connected: false,
    disabled: false,
    details: false,
    showDetails: false,
    share: false
  },
  {
    name: 'Живой баланс',
    type: 'Пакет',
    description: 'Заказано вместе со сменой ТП с 08.12.2017 10:21',
    price: '2.00',
    period: 'в день',
    update: true,
    ordered: true,
    connected: false,
    disabled: false,
    details: false,
    showDetails: false,
    share: false
  },
  {
    name: 'Интернет M',
    type: 'Пакет',
    description: 'Подключено с 12.09.2017 10:21 по 03.12.2017 10:21',
    price: '499.00',
    priceComment: 'без учета акции',
    period: 'в месяц',
    update: false,
    ordered: false,
    connected: true,
    disabled: false,
    details: true,
    showDetails: false,
    share: true,
    shareName: 'День рождения МегаФон',
    serviceInfo: {
      serviceName: 'Интернет',
      serviceDate: '02.09.2017 10:21',
      serviceSpent: '<b class="service-details__spent">20</b> из <b>25</b> Гб/30 дн.'
    }
  },
  {
    name: 'Очень длинное название услуг, которое не помещается',
    type: 'Услуга',
    description: 'Подключено с 12.09.2017 10:21 по 12.11.2017 10:21',
    price: '1.50',
    period: 'в день',
    update: false,
    ordered: false,
    connected: true,
    disabled: false,
    details: false,
    showDetails: false,
    share: false
  },
  {
    name: 'СуперАОН',
    type: 'Услуга',
    description: 'Подключено с 12.09.2017 10:21, бессрочно',
    price: '6.00',
    period: 'в день',
    update: false,
    ordered: false,
    connected: true,
    disabled: false,
    details: false,
    showDetails: false,
    share: false
  }
];

new Vue({
  el: '#app',
  data: {
    services: services
  },
  components: {
    'app-progress-bar': {
      template: `
        <div class="progress">
          <div class="progress__bar" style="width: 80%;"></div>
        </div>
      `
    },
    'app-action': {
      data() {
        return {
          action: {
            name: 'День рождения МегаФон',
            type: 'Акция',
            description: 'Действует с 12.09.2017 по 12.11.2017',
            discount: '30%',
            discountDesc: 'Скидка на АП',
            attention: 'После окончания акции продукт отключен не будет'
          }
        }
      },
      template: `
      <div class="action">
        <div class="action__row">
          <p class="action__name"><img class="action__icon" src="img/icon-present.svg" :alt="action.name" width="10" height="10">{{ action.name }}</p>
          <div class="action__discount">{{ action.discount }}</div>
        </div>
        <div class="action__row">
          <p class="action__description"><span class="action__type">{{ action.type }}. </span>{{ action.description }}</p>
          <div class="action__discount-desc">{{ action.discountDesc }}</div>
        </div>
        <p class="action__info">{{ action.attention }}</p>
      </div>
    `
   }
  }
});
