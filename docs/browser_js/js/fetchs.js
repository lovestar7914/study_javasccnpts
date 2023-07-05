//정부 데이터 포털
function fetchDatagokr(){
    let url = 'https://apis.data.go.kr/3450000/medicalDevSalesPlasService/getMedicalDevSalesPlas?serviceKey=BoygPZjC27pxm92hSposjnSob2u36vziS1rzIzxkrL9QxmlhB0SMARwLfNlBE3wrE7nnw34zLmmv0a6amvW4xg%3D%3D&currentPage=1&perPage=10&SN=1';
    let request = fetch(url)
    .then((result) => {      //<---리턴 값이 있음 변수값 확인후.then 실행
        result.json();       //네트워크 다녀온 후 respons,(respons 변경가능)로 답함, .json
    })
    .then((data) => {        //...어싱크 동작 하는 펑션
        console.log(data);
    })
    .catch((errorMeg) => {       // 에러 메세지 
        console.log(errorMeg);
    });
}

//자동차 정보 상세
function fetchDatagokr(){
    let url = 'http://192.168.0.30:8080/selectDetail/CI002apis.data.go.kr/3450000/medicalDevSalesPlasService/getMedicalDevSalesPlas?serviceKey=BoygPZjC27pxm92hSposjnSob2u36vziS1rzIzxkrL9QxmlhB0SMARwLfNlBE3wrE7nnw34zLmmv0a6amvW4xg%3D%3D&currentPage=1&perPage=10&SN=1';
    let request = fetch(url)
    .then((result) => {      //<---리턴 값이 있음 변수값 확인후.then 실행
        result.json();       //네트워크 다녀온 후 respons,(respons 변경가능)로 답함, .json
    })
    .then((data) => {        //...어싱크 동작 하는 펑션
        console.log(data);
    })
    .catch((errorMeg) => {       // 에러 메세지 
        console.log(errorMeg);
    });
}