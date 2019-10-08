var list1 = [
  'List 1.1',
  'List 1.2',
  'List 1.3',
  'List 1.4',
  'List 1.5',
  'List 1.6',
  'List 1.7',
  'List 1.8',
  'List 1.9',
];

var list2 = [
  'List 2.1',
  'List 2.2',
  'List 2.3',
  'List 2.4',
  'List 2.5',
  'List 2.6',
  'List 2.7',
  'List 2.8',
  'List 2.9',
];
var app = new Vue({
  el: '#app',
  data: {
    list1: list1,
    list2: list2,
  },
  methods: {
    transfer(source, target, button) {
      let el = source.splice(source.length - 1, 1);
      target.unshift(el[0]);
      if (button == 'button1') {
        this.list1 = source;
        this.list2 = target;
      }
      if (button == 'button2') {
        this.list1 = target;
        this.list2 = source;
      }
    }
  },
});