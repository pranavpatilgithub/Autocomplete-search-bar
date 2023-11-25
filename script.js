let searchWrapper = document.querySelector(".search-input");
let inputBox = searchWrapper.querySelector("input");
let suggBox = searchWrapper.querySelector(".autocom-box");

inputBox.onkeyup = (e) =>{
   
    let userData = e.target.value;

    let emptyArray = [];
    if(userData){
        emptyArray = suggestion.filter((data) =>{
           return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        }); 
        emptyArray = emptyArray.map((data) => {
            return data = '<li>' + data + '</li>';
        })
        console.log(emptyArray);
        searchWrapper.classList.add("active");
        shoeList(emptyArray);
        let allList;
        allList = document.querySelectorAll('li');
        for(let i = 0; i < allList.length; i++){
            allList[i].setAttribute("onclick", "select(this)");
        }
    }
    else{
        searchWrapper.classList.remove("active");
    }
}

function select(element){
    let selectuserData = element.textContent;
    console.log(selectuserData);
    inputBox.value = selectuserData;
}

function shoeList(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = userValue;
    }
    else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;

}
