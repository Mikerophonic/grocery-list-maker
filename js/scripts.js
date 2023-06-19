window.onload = function() {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const groceryItemsArr = [];

    // let item1 = document.querySelector("input#item1").value;
    // let item2 = document.querySelector("input#item2").value;
    // let item3 = document.querySelector("input#item3").value;
    // let item4 = document.querySelector("input#item4").value;
    // let item5 = document.querySelector("input#item5").value;
    // let item6 = document.querySelector("input#item6").value;
    // let item7 = document.querySelector("input#item7").value;
    // let item8 = document.querySelector("input#item8").value;

    const inputs = document.querySelectorAll('input.item');

    console.log(inputs);

    inputs.forEach(function(inputElement){

      groceryItemsArr.push(inputElement.value);

    });

    console.log(groceryItemsArr);
   
    // **reference vs value

    // item is stored at 0x33EA333
    // item.toUpperCase()
    // zoom in: toUpperCase() -> {return itemUpper}
    // item !== itemUpper
    // itemUpper is stored at 0x55ET837
    // item = itemUpper;
    // item is now stored at 0x55ET837, and shares the same value and reference.

    /*

    The key difference is this: 

    item =  item.toUpperCase();
    only changes the string array item inside the function.






    */
    groceryItemsArr.forEach(function(item, index){
      groceryItemsArr[index] = item.toUpperCase();
    });


    let form = document.querySelector("form");
    form.remove();

    let ul = document.createElement("ul");
    document.body.append(ul)

    groceryItemsArr.sort();

    groceryItemsArr.forEach(function(input) {
        let li = document.createElement("li");
        li.append(input);
        ul.append(li);
    });




    
  });
}