function slugify(title) {
    let newTitle = title.toLowerCase();
    let newTitle2 = newTitle.split(" ");
    return newTitle2.join("-");    
}








console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));