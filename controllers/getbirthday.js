const result = {
    "Birthdays":[
    {
        "celebId": "4973",
        "name": "Laura Linney",
        "dob": "1964-02-05",
        "havePic": "1",
        "twitter": "",
        "price": 14000,
        "age": 58
    },
    {
        "celebId": "1417",
        "name": "Charlotte Rampling",
        "dob": "1946-02-05",
        "havePic": "1",
        "twitter": "",
        "price": 7000,
        "age": 76
    },
    {
        "celebId": "1479",
        "name": "Chris Parnell",
        "dob": "1967-02-05",
        "havePic": "1",
        "twitter": "",
        "price": 7000,
        "age": 55
    },
    {
        "celebId": "8868",
        "name": "Cristiano Ronaldo",
        "dob": "1985-02-05",
        "havePic": "1",
        "twitter": "",
        "price": 7000,
        "age": 37
    },
    {
        "celebId": "8719",
        "name": "Abhishek Bachchan",
        "dob": "1976-02-05",
        "havePic": "1",
        "twitter": "juniorbachchan",
        "price": 6000,
        "age": 46
    },
    {
        "celebId": "8610",
        "name": "Bobby Brown",
        "dob": "1969-02-05",
        "havePic": "1",
        "twitter": "",
        "price": 6000,
        "age": 53
    },
    {
        "celebId": "3921",
        "name": "Jennifer Jason Leigh",
        "dob": "1962-02-05",
        "havePic": "1",
        "twitter": "",
        "price": 3000,
        "age": 60
    },
    {
        "celebId": "776",
        "name": "Barbara Hershey",
        "dob": "1948-02-05",
        "havePic": "1",
        "twitter": "",
        "price": 0,
        "age": 74
    },
    {
        "celebId": "1527",
        "name": "Christopher Guest",
        "dob": "1948-02-05",
        "havePic": "1",
        "twitter": "",
        "price": 0,
        "age": 74
    },
    {
        "celebId": "1945",
        "name": "David Selby",
        "dob": "1941-02-05",
        "havePic": "0",
        "twitter": "",
        "price": 0,
        "age": 81
    },
    {
        "celebId": "2107",
        "name": "Diego Serrano",
        "dob": "1973-02-05",
        "havePic": "0",
        "twitter": "",
        "price": 0,
        "age": 49
    },
    {
        "celebId": "3466",
        "name": "Isuzu Yamada",
        "dob": "1917-02-05",
        "havePic": "0",
        "twitter": "",
        "price": 0,
        "age": 105
    },
    {
        "celebId": "4199",
        "name": "John Carradine",
        "dob": "1906-02-05",
        "havePic": "1",
        "twitter": "",
        "price" :0,
        "age": 116
    },
    {
        "celebId": "4342",
        "name": "John Witherspoon",
        "dob": "1723-02-05",
        "havePic": "0",
        "twitter": "",
        "price": 0,
        "age": 299
    },
    {
        "celebId": "5779",
        "name": "Maxine Elliott",
        "dob": "1868-02-05",
        "havePic": "0",
        "twitter": "",
        "price": 0,
        "age": 154
    },
    {
        "celebId": "5979",
        "name": "Michael Sheen",
        "dob": "1969-02-05",
        "havePic": "1",
        "twitter": "michaelsheen",
        "price": 0,
        "age": 53
    },
    {
        "celebId": "6896",
        "name": "Red Buttons",
        "dob": "1919-02-05",
        "havePic": "1",
        "twitter": "",
        "price": 0,
        "age": 103
    },
    {
        "celebId": "9263",
        "name": "Sara Evans",
        "dob": "1971-02-05",
        "havePic": "1",
        "twitter": "",
        "price": 0,
        "age": 51
    },
    {
        "celebId": "7477",
        "name": "Sara Foster",
        "dob": "1981-02-05",
        "havePic": "1",
        "twitter": "",
        "price": 0,
        "age": 41
    },
    {
        "celebId": "8063",
        "name": "Tim Holt",
        "dob": "1919-02-05",
        "havePic": "0",
        "twitter": "",
        "price": 0,
        "age": 103
    },
    {
        "celebId": "8068",
        "name": "Tim Meadows",
        "dob": "1961-02-05",
        "havePic": "1",
        "twitter": "",
        "price": 0,
        "age": 61
    },
    {
        "celebId": "8158",
        "name": "Tom Wilkinson",
        "dob": "1948-02-05",
        "havePic": "1",
        "twitter": "",
        "price": 0,
        "age": 74
    },
    {
        "celebId": "8182",
        "name": "Tony Jaa",
        "dob": "1976-02-05",
        "havePic": "0",
        "twitter": "",
        "price": 0,
        "age": 46
    },
    {
        "celebId": "131",
        "name": "Vivian Wu",
        "dob": "1966-02-05",
        "havePic": "0",
        "twitter": "",
        "price": 0,
        "age": 56
    },
    {
        "celebId": "8377",
        "name": "Willard Parker",
        "dob": "1912-02-05",
        "havePic": "0",
        "twitter": "",
        "price": 0,
        "age":110
    }
    ]
}

function getbirthday(req, res){
    res.status(200).json(result);
/*     res.status(401).json({ message: `Members delete id` });
    res.status(404).json({ message: `Members delete id` }); */
   }

module.exports = getbirthday;