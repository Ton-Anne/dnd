Vue.component('dice', {
    props: ['dice'],
    template: '<div><input type="checkbox" v-model="dice.selected" checked="{{dice.selected}}">{{dice.name}}</div>'
})
var app = new Vue({
    el: '#app',
    data: {
        dices: [
            { name: 'd4', value : 4, selected: false },
            { name: 'd6', value : 6, selected: false },
            { name: 'd8', value : 8, selected: false },
            { name: 'd10', value : 10, selected: false },
            { name: 'd12', value : 12, selected: false },
            { name: 'd20', value : 20, selected: false },
            { name: 'd100', value : 100, selected: false },
        ],
    }
});
