var SERVICES = [
  {
    name: 'SMS–чек',
    type: 'Услуга',
    description: 'Подключено с 12.09.2017 10:21 по 12.11.2017 10:21',
    price: '1.00',
    period: 'в день',
    update: true,
    ordered: false,
    connected: true,
    disabled: false,
    details: false,
    share: false
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
    share: true,
    shareName: 'День рождения МегаФон'
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
    share: false
  }
];

new Vue({
  el: '#app',
  data: {
    services: SERVICES
  }
});

