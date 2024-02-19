// ## **Part 1: Number Facts**


// 1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the ***json*** query key, specific to this API. [Details](http://numbersapi.com/#json).
let url = "http://numbersapi.com/";

async function favNum (){ 
   let data = await axios.get(url + '2?json');
    $('#facts').append(`<li>${data.data.text}</li>`)
}

favNum();







// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
let array = [1,3,5]

async function threeNums (){ 
   let data = await axios.get(url + `${array}?json`);
    for(let num in array){$('#numbers').append(`<li>${data.data[array[num]]}</li>`)}
}

threeNums();






// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
//     *(Note: You’ll need to make multiple requests for this.)*

async function fourNums (){ 
    let fourPromises = [];
    for (let i = 1; i < 5; i++) {
    fourPromises.push(
        axios.get(`${url}7`));
    }
    let fourFacts = await Promise.all(fourPromises);
    fourFacts.forEach(n => $('#seven').append(`<li>${n.data}</li>`))
}

fourNums();