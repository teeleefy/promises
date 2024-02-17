// ## **Part 1: Number Facts**


// 1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the ***json*** query key, specific to this API. [Details](http://numbersapi.com/#json).
let url = "http://numbersapi.com/";

let ourFirstPromise = axios.get(url + '2?json');
// let ourFirstPromise = axios.get(url + 2);
console.log(ourFirstPromise)

ourFirstPromise
  .then(data => $('#facts').append(`<li>${JSON.stringify(data.data.text)}</li>`))
  .catch(err => console.log(err));








// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
let array = [1,3,5]

let ourSecondPromise = axios.get(url + `${array}?json`);
// let ourFirstPromise = axios.get(url + 2);
console.log(ourSecondPromise)

ourSecondPromise
  .then(data => {for(let num in array){$('#numbers').append(`<li>${JSON.stringify(data.data[array[num]])}</li>`)}})
  .catch(err => console.log(err));







// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
//     *(Note: You’ll need to make multiple requests for this.)*


let fourPromises = [];

for (let i = 1; i < 5; i++) {
  fourPromises.push(
    axios.get(`${url}7`)
  );
}

Promise.all(fourPromises)
  .then(numArr => (
    numArr.forEach(n => $('#seven').append(`<li>${JSON.stringify(n.data)}</li>`))
  ))
  .catch(err => console.log(err));







