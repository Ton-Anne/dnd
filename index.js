Vue.component('dice', {
    props: ['dice'],
    template: '<div><input type="checkbox" v-model="dice.selected" checked="{{dice.selected}}">{{dice.name}}</div>'
})
var app = new Vue({
    el: '#app',
    data: {
        result: 0,
        history: [],
        dices: [
            { name: 'd4', value : 4, selected: false },
            { name: 'd6', value : 6, selected: false },
            { name: 'd8', value : 8, selected: false },
            { name: 'd10', value : 10, selected: false },
            { name: 'd12', value : 12, selected: false },
            { name: 'd20', value : 20, selected: false },
            { name: 'd100', value : 100, selected: false },
        ],
    },
    methods: {
            roll: function () {
                if (this.result != 0) {
                    this.history.unshift(this.result);
                }
                let res = 0;
                for (const dice of this.dices) {
                    if (dice.selected === true) {
                        res += this.rollDice(dice.value)
                    }
                }
                this.result = res;
            },
            rollDice: function (sides) {
              var randomNumber = Math.floor(Math.random() * sides) + 1;
              return randomNumber;
            },
            reset: function () {
                this.history = [];
            },
            roll: function () {
            if (this.result != 0) {
                this.history.unshift(this.result);
            }
            let res = 0;
            for (const dice of this.dices) {
                if (dice.selected === true) {
                    res += this.rollDice(dice.value)
                }
            }
            this.result = res;
            this.saveState();
        },
        rollDice: function (sides) {
            var randomNumber = Math.floor(Math.random() * sides) + 1;
            return randomNumber;
        },
        saveState: function () {
            localStorage.history = JSON.stringify(this.history);
        },
        restoreState: function () {
            if (localStorage.history != null) {
                this.history = JSON.parse(localStorage.history);
            }
        }
    }
});

app.restoreState();
