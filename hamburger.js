var throws;
var arrToping = [];

function Hamburger(size, stuffing) {
    if (size in Hamburger.SIZE && stuffing in Hamburger.STUFFING) {
        this.size = size;
        this.stuffing = stuffing;
    } else if (!(size in Hamburger.SIZE)) {
        throw new HamburgerException('У нас нет размера больше этого: ' + size);
    } else {
        return throws = new HamburgerException('У нас нет начинки более этого: ' + stuffing);
    }
}

Hamburger.SIZE = {
    small: {
        cost: 50,
        cal: 20
    },
    large: {
        cost: 100,
        cal: 40
    }
};

Hamburger.STUFFING = {
    cheese: {
        cost: 10,
        cal: 20
    },
    salad: {
        cost: 20,
        cal: 5
    },
    potato: {
        cost: 15,
        cal: 10
    }
};

Hamburger.TOPPING = {
    mayo: {
        cost: 20,
        cal: 5
    },
    spice: {
        cost: 15,
        cal: 0
    }
};

Hamburger.prototype.addTopping = function (topping) {
    if (topping in Hamburger.TOPPING) {

        if (!this.toppingExists(topping)) {
            arrToping.push(topping);
            this.topping = arrToping;
        } else {
            throws = new HamburgerException(topping + ' добавляем топпинг');
        }
    } else {
        throws = new HamburgerException('У нас нет топпинга как этот:' + topping);
    }
};

Hamburger.prototype.toppingExists = function (topping) {
    var isMutchedToppings = arrToping.some(function (value) {
        return value == topping;
    });
    return isMutchedToppings;
};

Hamburger.prototype.removeTopping = function (topping) {
    if (this.toppingExists(topping)) {
        for (i = 0; i < this.topping.length; i++) {
            if (this.topping[i] == topping) {
                this.topping.splice(i, 1);
            }
        }
    } else {
        throws = new HamburgerException('Не сможем поменять топпинг: ' + topping);
    }
};

Hamburger.prototype.getToppings = function () {
    return console.log('Существующие топпинги: ' + arrToping.join(', ') + '.');
};

Hamburger.prototype.getSize = function () {
    return console.log('Размер гамбургера: ' + this.size);
    return document.write('Размер гамбургера: ' + this.size + '<br>');
};

Hamburger.prototype.getStuffing = function () {
    console.log('Начинка гамбургера: ' + this.stuffing);
};

Hamburger.prototype.calculatePrice = function () {

    var price = 0;
    var costTop = 0;
    var costSize = Hamburger.SIZE[this.size].cost;
    var costStuf = Hamburger.STUFFING[this.stuffing].cost;

    arrToping.forEach(sum);

    function sum(topping) {
        costTop += Hamburger.TOPPING[topping].cost;
        return costTop;
    }

    price = costSize + costStuf + costTop;
    console.log('Цена данного размера: ' + costSize + '\n' + 'Стоимость начинки: ' + costStuf + '\n' + 'Цена топпинга: ' + costTop + '\n' + '.................' + '\n' + 'Сумма заказа: ' + price);
    document.write('Цена данного размера: ' + costSize + '<br>' + 'Стоимость начинки: ' + costStuf + '<br>' + 'Цена топпинга: ' + costTop + '<br>' + '.................' + '<br>' + 'Сумма заказа: ' + price + '<br>' + '<br>');
};

Hamburger.prototype.calculateCalories = function () {

    var cal = 0;
    var calTop = 0;
    var calSize = Hamburger.SIZE[this.size].cal;
    var calStuf = Hamburger.STUFFING[this.stuffing].cal;

    arrToping.forEach(sum);

    function sum(topping) {
        calTop += Hamburger.TOPPING[topping].cal;
        return calTop;
    }

    cal = calSize + calStuf + calTop;
    console.log('Каллории размера: ' + calSize + '\n' + 'Каллории начинки: ' + calStuf + '\n' + 'Каллории топинга: ' + calTop + '\n' + '.................' + '\n' + 'Всего каллорий: ' + cal);
    document.write('Каллории для данного размера: ' + calSize + '<br>' + 'Каллории начинки: ' + calStuf + '<br>' + 'Каллории топинга: ' + calTop + '<br>' + '.................' + '<br>' + 'Всего каллорий: ' + cal);
};
