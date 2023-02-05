// 1. 박스 2개 만들기   -MTML

// 2. 드랍다운 만들기    CSS+HTML

// 3. 환율정보 들고오기  
let currencyRatio={
    USD:{KRW:1184.86,USD:1,VND:22972.50, unit:"달러"},
    KRW:{KRW:1,USD:0.00084,VND:19.40,unit:"원"},
    VND:{KRW:0.052,USD:0.000044,VND:1,unit:"동"},
};

//console.log(currencyRatio.USD.unit);
// 4. 드랍 다운에서 리스트 선택하면 환율정보 가져오기 
let fromCurrency = 'USD'
let fromUnit = '달러'
document.querySelectorAll("#from-currency-list a")
.forEach(menu => menu.addEventListener("click",function(){
    // 1. 버튼을 가져온다. 
    // 2. 버트의 값을 바꾸나.
    document.getElementById("from-btn").textContent = this.textContent;
    // 3. 선택된 Currency 값을 변수에 저장해둔다. 
    fromCurrency = this.textContent;
    fromUnit = currencyRatio[fromCurrency]["unit"];
    //console.log("From unit : ", fromUnit);
    document.getElementById("from-unit").innerText = fromUnit;
    convert();

}));


let toCurrency = 'USD'
let toUnit = '달러'
document.querySelectorAll("#to-currency-list a")
.forEach(menu => menu.addEventListener("click",function(){
    // 1. 버튼을 가져온다. 
    // 2. 버트의 값을 바꾸나.
    document.getElementById("to-btn").textContent = this.textContent;
    // 3. 선택된 Currency 값을 변수에 저장해둔다. 
    toCurrency = this.textContent;
    toUnit = currencyRatio[toCurrency]["unit"];
    document.getElementById("to-unit").innerText = toUnit;
    
    //console.log("To Currency는 : ", toCurrency);
    convert();

}));

// 5. 금액을 입력하면 환전이 된다 .
function convert(){
    //console.log("눌러졌슈");
    // 5.1. 키를 입력하는 순간  HTML + JS
    let amount = document.getElementById("from-input").value;
    console.log("돈은 : ",amount);

    let readFromUnit = readUnit(amount);

    document.getElementById("from-unit").innerText = readFromUnit + fromUnit;

    // 5.2. 환전이 되어서 
    // 5.2.1 환전
    // 5.2.2. 얼마를 환전 가지고 있는 돈이 뭔지, 바꾸고자 하는 돈이 뭔지 
    // 5.2.3. 돈 * 환율 = 환전
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    // console.log("환전된 돈은 : ", convertedAmount);
    //let readToUnit = readUnit(convertedAmount);

    //document.getElementById("to-unit").innerText = readToUnit + fromUnit;

    // 5.3. 환전 값이 보인다.
    document.getElementById("to-input").value = convertedAmount;
}
function convert2(){
    //console.log("눌러졌슈");
    // 5.1. 키를 입력하는 순간  HTML + JS
    let amount = document.getElementById("to-input").value;
    console.log("돈은 : ",amount);

    let readFromUnit = readUnit(amount);

    document.getElementById("to-unit").innerText = readFromUnit + fromUnit;

    // 5.2. 환전이 되어서 
    // 5.2.1 환전
    // 5.2.2. 얼마를 환전 가지고 있는 돈이 뭔지, 바꾸고자 하는 돈이 뭔지 
    // 5.2.3. 돈 * 환율 = 환전
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    // console.log("환전된 돈은 : ", convertedAmount);
    //let readToUnit = readUnit(convertedAmount);

    //document.getElementById("to-unit").innerText = readToUnit + fromUnit;

    // 5.3. 환전 값이 보인다.
    document.getElementById("from-input").value = convertedAmount;
}

function readUnit(amount){
    let readUnit = 0;
    let jo      = Math.floor(amount    / 1000000000000) % 10000;       // 1조0000억0000만0000;
    let uck     = Math.floor(amount        / 100000000) % 10000;           // 1억0000만0000;
    let man     = Math.floor(amount       / 10000) % 10000;               // 1만0000;
    let young   = Math.floor(amount       / 1) % 10000;               // 1영;

    // console.log("조:", jo);
    // console.log("억:", uck);
    // console.log("만:", man);
    // console.log("영:", young);


    if (young > 0)
        readUnit = young;

    if (man > 0)
        readUnit = man + "만" + young;

    if (uck > 0)
        readUnit = uck + "억" + man + "만" + young;
    
    if (jo > 0)
        readUnit = jo + "조" + uck + "억" + man + "만" + young;

    return readUnit;
}
// 6. 드랍다운 리스트에서 아이코은 서택하면 다시 그 기준으로 환율을 가져온다. 

// 7. 숫자를 한국어로 읽는범

// 8. 반대로 밑에서 바꿔서 위에서 적용이 된다. 
