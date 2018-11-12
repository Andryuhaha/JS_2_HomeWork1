function Container() {
    this.id = '';
    this.className = '';
}

Container.prototype.render = function () {
    var div = document.createElement('div');
    div.id = this.id;
    div.classList.add(this.className);
    return div;
};

// перебором ищем children по пробелу в новой строке и возвращаем
Container.prototype.remove = function (name) {
    var menu = document.querySelector('.menu');
    for (var i = 0; i < menu.children.length; i++) {
        var menuItem = menu.children[i].innerText.split('\n');
        if (menuItem[0] == name) {
            menu.removeChild(menu.children[i]);
            return menu;
        }
        //проверяем вложенные пункты
        else if (menu.children[i].children.length > 1) {
            for (var j = 0; j < menu.children[i].children[1].children.length; j++) {
                if (menu.children[i].children[1].children[j].innerText == name) {

                    //перезаписываем нужный пункт
                    var item = menu.children[i].children[1];
                    item.removeChild(item.children[j]);
                    return menu;
                }
            }
        }
    }

};

function Menu(_id, _class, _items) {
    Container.call(this);
    this.id = _id;
    this.className = _class;
    this.items = _items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;

Menu.prototype.render = function () {
    var ul = document.createElement('ul');
    ul.id = this.id;
    ul.classList.add(this.className);
    for (var i = 0; i < this.items.length; i++) {
        if (this.items[i] instanceof MenuItem) {
            ul.appendChild(this.items[i].render());
        }
    }

    return ul;
};

function MenuItem(href, label) {
    Container.call(this);
    this.href = href;
    this.label = label;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;

MenuItem.prototype.render = function () {
    var li = document.createElement('li');
    var a = document.createElement('a');

    a.href = this.href;
    a.textContent = this.label;
    li.appendChild(a);

    return li;
};

function NestedMenu(idN, classN, itemsN, itemNumber) {
    Menu.call(this, idN, classN, itemsN);
    this.number = itemNumber;
}

NestedMenu.prototype = Object.create(Menu.prototype);
NestedMenu.prototype.constructor = NestedMenu;

NestedMenu.prototype.insertNM = function () {
    var menu = document.querySelector('.menu');
    menu.children[this.number].appendChild(this.render());

    return menu;
};
