window.onload = function() {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let item1 = document.querySelector("input#item1").value;
    let item2 = document.querySelector("input#item2").value;
    let item3 = document.querySelector("input#item3").value;
    let item4 = document.querySelector("input#item4").value;
    let item5 = document.querySelector("input#item5").value;
    let item6 = document.querySelector("input#item6").value;
    let item7 = document.querySelector("input#item7").value;
    let item8 = document.querySelector("input#item8").value;

    const inputs = [item1, item2, item3, item4, item5, item6, item7, item8];

    const inputsUp = [item1.toUpperCase(), item2.toUpperCase(), item3.toUpperCase(), item4.toUpperCase(), item5.toUpperCase(), item6.toUpperCase(), item7.toUpperCase(), item8.toUpperCase()];
    
    let form = document.querySelector("form");
    form.remove();

    let ul = document.createElement("ul");
    document.body.append(ul)

    inputsUp.sort();

    inputsUp.forEach(function(input) {
        let li = document.createElement("li");
        li.append(input);
        ul.append(li);
    })



    console.log(inputs);
    console.log(inputsUp);
    
  });
}