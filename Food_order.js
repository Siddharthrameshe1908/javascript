var total = document.getElementById("total_items");
var count = 0;
var price_sum = document.getElementById("Total_sum")

var waffle_item = document.getElementById("waffle")
var vanilla_item = document.getElementById("vanilla")
var macaron_item = document.getElementById("macaron")
var tiramisu_item = document.getElementById("tiramisu")
var pistachi_item = document.getElementById("pistachio")
var pie_item = document.getElementById("pie")

var item_one = document.getElementById("item_count1")
var item_two = document.getElementById("item_count2")
var item_three = document.getElementById("item_count3")
var item_four = document.getElementById("item_count4")
var item_five = document.getElementById("item_count5")
var item_six = document.getElementById("item_count6")

var amt_box = document.getElementById("amount_box")
var orders = document.getElementById("ordered_items")

var c1 = 0
var c2 = 0
var c3 = 0
var c4 = 0
var c5 = 0 
var c6 = 0
var total_price = 0


var paralist1 = document.createElement("p")
var paralist2 = document.createElement("p")
var paralist3 = document.createElement("p")
var paralist4 = document.createElement("p")
var paralist5 = document.createElement("p")
var paralist6 = document.createElement("p")
arr = []
function adding(event){
    count += 1
    total.innerText = `Total items (${count})`
    console.log(count);
    // console.log(event.target);
    // console.log(event.target.parentElement); 
    // console.log(event.target.innerAdjacentText = ("before end",waffle_item));
    // console.log(event.target.parentNode.getAttribute("id"));
    
    if(event.target.parentNode.getAttribute("id") == 'item_1'){
        var item_name = event.target.innerAdjacentText = ("before end",waffle_item)
        // if(c1 == 0){
        //     paralist1.innerText = item_name.textContent
        //     paralist1.innerText += ": $ 6.50"
        //     amt_box.append(paralist1)
        // }
        c1 += 1
        item_one.innerText = `Selected items(${c1})`
        total_price += 6.50
        // console.log(c1);
    } 
    // console.log(amt_box)
    else if(event.target.parentNode.getAttribute("id") == 'item_2'){
        var item_name = event.target.innerAdjacentElement = ("before end",vanilla_item)
        // if(c2 == 0){
        //     paralist2.innerText = item_name.textContent
        //     paralist2.innerText += ": $ 7.00"
        //     amt_box.append(paralist2)
        // }
        c2 += 1
        item_two.innerText = `Selected items(${c2})`
        total_price += 7.00
        // console.log(item_two);
        
    } 
    else if(event.target.parentNode.getAttribute("id") == 'item_3'){
        var item_name = event.target.innerAdjacentElement = ("before end",macaron_item)
        // if(c3 == 0){
        //     paralist3.innerText = item_name.textContent
        //     paralist3.innerText += ": $ 8.00"
        //     amt_box.append(paralist3)
        // }
        c3 += 1
        item_three.innerText = `Selected items(${c3})`
        total_price += 8.00
        // console.log(item_three);
    } 
    else if(event.target.parentNode.getAttribute("id") == 'item_4'){
        var item_name = event.target.innerAdjacentElement = ("before end",tiramisu_item)
        // if(c4 == 0){
        //     paralist4.innerText = item_name.textContent
        //     paralist4.innerText += ": $ 5.50"
        //     amt_box.append(paralist4)
        // }
        c4 += 1
        item_four.innerText = `Selected items(${c4})`
        total_price += 5.50
        // console.log(item_four);
    } 
    else if(event.target.parentNode.getAttribute("id") == 'item_5'){
        var item_name = event.target.innerAdjacentElement = ("before end",pistachi_item)
        // if(c5 == 0){
        //     paralist5.innerText = item_name.textContent
        //     paralist5.innerText += ": $ 4.00" 
        //     amt_box.append(paralist5)
        // }
        c5 += 1
        item_five.innerText = `Selected items(${c5})`
        total_price += 4.00
        // console.log(item_five);
    } 
    else if(event.target.parentNode.getAttribute("id") == 'item_6'){
        var item_name = event.target.innerAdjacentElement = ("before end",pie_item)
        // if(c6 == 0){
        //     paralist6.innerText = item_name.textContent 
        //     paralist6.innerText += ": $ 5.00"
        //     amt_box.append(paralist6)
        // }
        c6 += 1
        item_six.innerText = `Selected items(${c6})`
        total_price += 5.00
        // console.log(item_six);
    } 
    price_sum.innerText = `$ ${total_price}`  
}


function undo(event){
    if(event.target.parentNode.getAttribute("id") == 'item_1'){ 
        if(c1!=0){
            // console.log(c1);
            c1 -= 1
            item_one.innerText = `Selected items(${c1})`
            total_price = total_price - 6.50
            price_sum.innerText = `$ ${total_price}`
            // console.log(total_price);
        }
        else{
            item_one.innerText = `Selected items(${0})`
            count +=1   // This count increment is for, when we undo the 0 element selected it will decrement the Total coun also. So we are using this count increment to match it
            alert("No Waffle Selected")
            // amt_box.removeChild(paralist1)
        }
    } 
    else if(event.target.parentNode.getAttribute("id") == 'item_2'){ 
        if(c2!=0){
            // console.log(c2);
            c2-= 1
            item_two.innerText = `Selected items(${c2})`
            total_price = total_price - 7.00
            price_sum.innerText = `$ ${total_price}`
            // console.log(total_price);
        }
        else{
            item_two.innerText = `Selected items(${0})`
            count +=1
            alert("No Creme Brulee Selected")
            // amt_box.removeChild(paralist2)
        }
    } 
    else if(event.target.parentNode.getAttribute("id") == 'item_3'){ 
        if(c3!=0){
            // console.log(c3);
            c3 -= 1
            item_three.innerText = `Selected items(${c3})`
            total_price = total_price - 8.00
            price_sum.innerText = `$ ${total_price}`
            // console.log(total_price);
        }
        else{
            item_three.innerText = `Selected items(${0})`
            count +=1
            alert("No Macaron Selected")
            // amt_box.removeChild(paralist3)
        }
    } 
    else if(event.target.parentNode.getAttribute("id") == 'item_4'){ 
        if(c4!=0){
            // console.log(c4);
            c4 -= 1
            item_four.innerText = `Selected items(${c4})`
            total_price = total_price - 5.50
            price_sum.innerText = `$ ${total_price}`
            // console.log(total_price);
        }
        else{
            item_four.innerText = `Selected items(${0})`
            count +=1
            alert("No Tiramisu Selected")
            // amt_box.removeChild(paralist4)
        }
    } 
    else if(event.target.parentNode.getAttribute("id") == 'item_5'){ 
        if(c5!=0){
            // console.log(c5);
            c5 -= 1
            item_five.innerText = `Selected items(${c5})`
            total_price = total_price - 4.00
            price_sum.innerText = `$ ${total_price}`
            // console.log(total_price);
        }
        else{
            item_five.innerText = `Selected items(${0})`
            count +=1
            alert("No Baklava Selected")
            // amt_box.removeChild(paralist5)
        }
    } 
    else if(event.target.parentNode.getAttribute("id") == 'item_6'){ 
        if(c6!=0){
            // console.log(c6);
            c6 -= 1
            item_six.innerText = `Selected items(${c6})`
            total_price = total_price - 5.00
            price_sum.innerText = `$ ${total_price}`
            // console.log(total_price);
        }
        else{
            item_six.innerText = `Selected items(${0})`
            count +=1
            alert("No Pie Selected")
            // amt_box.removeChild(paralist6)
        }
    } 
    if(count > 0){
        console.log(count);
        count -= 1
        total.innerText = `Total items (${count})`
    }
    else{
        total.innerText = `Total items (0)`
        // alert("No items selected")
    }
}

var no_items_selected = document.getElementById("no_items_alert_box")
no_items_selected.style.display = 'none'

var alert_div = document.getElementById("alert_box")
alert_div.style.display = 'none'

function msg(){
    if(count!=0){
        total.innerText = `Total Items (${0})`
        price_sum.innerText = `$ 0.0`
        item_one.innerText = `Selected items(0)`
        item_two.innerText = `Selected items(0)`
        item_three.innerText = `Selected items(0)`
        item_four.innerText = `Selected items(0)`
        item_five.innerText = `Selected items(0)`
        item_six.innerText = `Selected items(0)`
        // alert("Your order has been confirmed")
        if(alert_div.style.display== 'none'){
            alert_div.setAttribute("style",'display:block')
            // console.log(alert_div);
        }
    }
    else{
        // alert("Select the items")
        if(no_items_selected.style.display == 'none'){
            no_items_selected.setAttribute("style","display:block")
        }
    }
}

function ok(){
        alert_div.setAttribute('style','display:none')
        window.location.reload()
        // console.log(alert_div);
}