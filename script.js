const firstName = document.getElementById("firstname");  // element with id firstname
const startingBid = document.getElementById("startingbid"); // element with id startingbid
const education = document.getElementById("education"); // element with id education
const networth = document.getElementById("networth"); // element with id education
const skills = document.getElementsByClassName("skills"); // HTMLCollection (like an array of elements, but not an actual array)
const age = document.getElementsByName("age");
const button = document.getElementById("submit");
const love_letter = document.getElementById("love_letter");
const result = document.getElementById("result");
const reputation = document.getElementById("rep1");
const reputation2 = document.getElementById("rep2");
const reputation3 = document.getElementById("rep3");
function calculate () {
    
    let name = firstName.value; // name of the groom/bride
    let price = Number(startingBid.value); // turns your starting bid string into number
    let letter = love_letter.value;
    if (name != "") { 
        price = getNewPrice(price, education);
     
        
        
        let person = {
            fullName: name,
            finalPrice: price,
            loveLetter: letter
        }
        document.getElementById("result").innerHTML = `The price for ${person.fullName} is ${person.finalPrice}. Your love letter is ${person.loveLetter}`;
    }
    else {
        alert("Name and starting bid cannot be empty");
    }
    if (name != "") {
        price = getNewPrice2(price, networth);
        
    }
}



const getNewPrice = (price, education) => {
    return price * Number(education.value);
}
const getNewPrice2 =(price, networth) => {
    return price * Number(networth.value);
}
if (reputation.checked){
    price *= Number(reputation.value);
}
if(reputation2.checked){
    price *= Number(reputation2.value);
}
if(reputation3.checked){
    price -= Number(reputation3.value);
}


 



const getRadioValue = (node_list, price) => {  
    price = getRadioValue(age, price);
    node_list.forEach(age => {
    if (item.checked) {
        price = price * Number(age.value)
    }
})
return price;
}




const getCheckboxValuesForLoop = (skills, price) => {
    price = getCheckboxValuesForLoop(skills, price)
    for (let i=0; i < skills.length; i++) {  
    if (skills[i].checked && Number.isInteger(Number(skills[i].value))) {
        price = price + Number(html_collection[i].value)
    }
    else if (skills[i].checked && !Number.isInteger(skills[i].value)) {
        price = price * Number(skills[i].value)
    }
}
return price;

}

    

button.addEventListener("click", calculate,)


