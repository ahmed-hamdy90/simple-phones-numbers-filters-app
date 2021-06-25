(function () {
    'use strict';

    // load modules
    const MongoDbAdapter = require('../adapters/mongoDbAdapter');
    const CustomerModel = require('../models/customer');

    // represent list of JSON for given customers data
    const simpleCustomersData = [
        {
            "id": 0,
            "name": "Walid Hammadi",
            "phone": "(212) 6007989253"
        },
        {
            "id": 1,
            "name": "Yosaf Karrouch",
            "phone": "(212) 698054317"
        },
        {
            "id": 2,
            "name": "Younes Boutikyad",
            "phone": "(212) 6546545369"
        },
        {
            "id": 3,
            "name": "Houda Houda",
            "phone": "(212) 6617344445"
        },
        {
            "id": 4,
            "name": "Chouf Malo",
            "phone": "(212) 691933626"
        },
        {
            "id": 5,
            "name": "soufiane fritisse ",
            "phone": "(212) 633963130"
        },
        {
            "id": 6,
            "name": "Nada Sofie",
            "phone": "(212) 654642448"
        },
        {
            "id": 7,
            "name": "Edunildo Gomes Alberto ",
            "phone": "(258) 847651504"
        },
        {
            "id": 8,
            "name": "Walla's Singz Junior",
            "phone": "(258) 846565883"
        },
        {
            "id": 9,
            "name": "sevilton sylvestre",
            "phone": "(258) 849181828"
        },
        {
            "id": 10,
            "name": "Tanvi Sachdeva",
            "phone": "(258) 84330678235"
        },
        {
            "id": 11,
            "name": "Florencio Samuel",
            "phone": "(258) 847602609"
        },
        {
            "id": 12,
            "name": "Solo Dolo",
            "phone": "(258) 042423566"
        },
        {
            "id": 13,
            "name": "Pedro B 173",
            "phone": "(258) 823747618"
        },
        {
            "id": 14,
            "name": "Ezequiel Fenias",
            "phone": "(258) 848826725"
        },
        {
            "id": 15,
            "name": "JACKSON NELLY",
            "phone": "(256) 775069443"
        },
        {
            "id": 16,
            "name": "Kiwanuka Budallah",
            "phone": "(256) 7503O6263"
        },
        {
            "id": 17,
            "name": "VINEET SETH",
            "phone": "(256) 704244430"
        },
        {
            "id": 18,
            "name": "Jokkene Richard",
            "phone": "(256) 7734127498"
        },
        {
            "id": 19,
            "name": "Ogwal David",
            "phone": "(256) 7771031454"
        },
        {
            "id": 20,
            "name": "pt shop 0901 Ultimo ",
            "phone": "(256) 3142345678"
        },
        {
            "id": 21,
            "name": "Daniel Makori",
            "phone": "(256) 714660221"
        },
        {
            "id": 22,
            "name": "shop23 sales",
            "phone": "(251) 9773199405"
        },
        {
            "id": 23,
            "name": "Filimon Embaye",
            "phone": "(251) 914701723"
        },
        {
            "id": 24,
            "name": "ABRAHAM NEGASH",
            "phone": "(251) 911203317"
        },
        {
            "id": 25,
            "name": "ZEKARIAS KEBEDE",
            "phone": "(251) 9119454961"
        },
        {
            "id": 26,
            "name": "EPHREM KINFE",
            "phone": "(251) 914148181"
        },
        {
            "id": 27,
            "name": "Karim Niki",
            "phone": "(251) 966002259"
        },
        {
            "id": 28,
            "name": "Frehiwot Teka",
            "phone": "(251) 988200000"
        },
        {
            "id": 29,
            "name": "Fanetahune Abaia",
            "phone": "(251) 924418461"
        },
        {
            "id": 30,
            "name": "Yonatan Tekelay",
            "phone": "(251) 911168450"
        },
        {
            "id": 31,
            "name": "EMILE CHRISTIAN KOUKOU DIKANDA HONORE ",
            "phone": "(237) 697151594"
        },
        {
            "id": 32,
            "name": "MICHAEL MICHAEL",
            "phone": "(237) 677046616"
        },
        {
            "id": 33,
            "name": "ARREYMANYOR ROLAND TABOT",
            "phone": "(237) 6A0311634"
        },
        {
            "id": 34,
            "name": "LOUIS PARFAIT OMBES NTSO",
            "phone": "(237) 673122155"
        },
        {
            "id": 35,
            "name": "JOSEPH FELICIEN NOMO",
            "phone": "(237) 695539786"
        },
        {
            "id": 36,
            "name": "SUGAR STARRK BARRAGAN",
            "phone": "(237) 6780009592"
        },
        {
            "id": 37,
            "name": "WILLIAM KEMFANG",
            "phone": "(237) 6622284920"
        },
        {
            "id": 38,
            "name": "THOMAS WILFRIED LOMO LOMO",
            "phone": "(237) 696443597"
        },
        {
            "id": 39,
            "name": "Dominique mekontchou",
            "phone": "(237) 691816558"
        },
        {
            "id": 40,
            "name": "Nelson Nelson",
            "phone": "(237) 699209115"
        }
    ];

    /**
     * Define Customer Db seeder loader
     */
    module.exports = function () {
        simpleCustomersData.forEach(customerData => {
            const customer = new CustomerModel({
                userId: customerData.id,
                name: customerData.name,
                phone: customerData.phone
            });
            MongoDbAdapter.save(
                customer,
                function (result) {
                    console.log(result);
                },
                function (error) {
                    console.error(error);
                }
            );
        });
    }
})();