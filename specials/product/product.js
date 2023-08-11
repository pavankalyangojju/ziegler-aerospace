//  HEADER  SECTION
document.querySelector("#button").addEventListener("click", go);

function go() {
    window.location.href = "product.html";
}

function togglepop() {
    document.querySelector("#popup-1").classList.toggle("yes");
}
document.querySelector("#popcontinue").addEventListener("click", popcont);

function popcont() {
    // window.location.href="signin.html"
}

function popfunct() {
    document.getElementById("twopop").classList.toggle("value");
    alert(
        " USe code for 03351 for verifying your mobile number with ZA.com. OTP is valid for 5 minutes(s) "
    );
}

document.querySelector("#inputform").addEventListener("click", inputfunction);
var box5 = document.querySelector("#inputnumber5").value;
box5 = 3;

function inputfunction(event) {
    event.preventDefault();
    var box1 = document.querySelector("#inputnumber1").value;
    var box2 = document.querySelector("#inputnumber2").value;
    var box3 = document.querySelector("#inputnumber3").value;
    var box4 = document.querySelector("#inputnumber4").value;
    var box5 = document.querySelector("#inputnumber5").value;

    if (box1 == 0 && box2 == 3 && box3 == 3 && box4 == 5 && box5 == 1) {
        window.location.href = "product.html";
    }
}

var addevent = document.getElementById("prodPageAE");
addevent.addEventListener("click", function() {
    window.location.href = "body1.html";
});

//  SORTING SECTION

//  PRODUCT DISPLAY SECTION

var dataOfProduct = [{
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/graphics/MS21251-B2S.jpg",
        produPrice: "599",
        prodDesc: "Turnbuckles",
    },
    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/thumbnails/11-17930.jpg",
        produPrice: "999",
        prodDesc: "ELT",

    },
    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/graphics/1/13-05847.jpg",
        produPrice: "1999",
        prodDesc: "Aviation Careers",
    },
    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/thumbnails/3MfINISH.jpg",
        produPrice: "799",
        prodDesc: "Stikit Discs",

    },
    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/graphics/1/11-16622.jpg",
        produPrice: "999",
        prodDesc: "Portable",
    },
    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/thumbnails/99-00110.jpg",
        produPrice: "699",
        prodDesc: "Boxes & Racks",
    },
    /////////////////////////////////////////////////
    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/graphics/a/an44undrilleda.jpg",
        produPrice: "599",
        prodDesc: "Parts",
    },
    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/graphics/noimage.jpg",
        produPrice: "599",
        prodDesc: "Mounts",
    },

    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/thumbnails/06-00438.jpg",
        produPrice: "999",
        prodDesc: "Bolts",
    },

    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/thumbnails/03-40100.jpg",
        produPrice: "449",
        prodDesc: "Bargain Bags",

    },
    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/thumbnails/13-04004.jpg",
        produPrice: "450",
        prodDesc: "Hitch Covers",
    },
    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/218-200-/catalog/graphics/basswood.jpg",
        produPrice: "999",
        prodDesc: "Plywood",
    },
    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/thumbnails/05-30108_1.jpg",
        produPrice: "999",
        prodDesc: "Push Pull",
    },
    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/graphics/1/11-18326a.jpg",
        produPrice: "1000",
        prodDesc: "ADS-B",

    },
    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/thumbnails/11-12407.jpg",
        produPrice: "350",
        prodDesc: "Avionics",
    },
    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/thumbnails/QuiqLite1.jpg",
        produPrice: "475",
        prodDesc: "Leather Cleaners",

    },
    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/graphics/noimage.jpg",
        produPrice: "599",
        prodDesc: "Accessories",

    },
    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/graphics/C/ContinentalMotorslogo.jpg",
        produPrice: "449",
        prodDesc: "Nav Strobe",
    },
    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/graphics/A/AN530-10R8.jpg",
        produPrice: "699",
        prodDesc: "Goodrich",

    },
    {
        proudimg: "https://d29y7fsthxbb26.cloudfront.net/cache/200-229-/catalog/graphics/pdk.jpg",
        produPrice: "899",
        prodDesc: "Pods",

    },

];
displayItems(dataOfProduct);
var mybasketarray = JSON.parse(localStorage.getItem("storecarts")) || [];
console.log(mybasketarray);

function displayItems(product) {
    document.querySelector("#allProduct").textContent = "";

    var count = document.querySelector("#countProduct");
    var ProductTotal = product.length;
    count.textContent = ProductTotal + " " + "Products";

    product.map(function(ele) {
        var appenddiv = document.querySelector("#allProduct");
        var productDiv = document.createElement("div");
        productDiv.setAttribute("id", "productDivSpecific");

        var productImg = document.createElement("img");
        productImg.setAttribute("id", "hovering");
        productImg.setAttribute("src", ele.proudimg);

        var proudprice = document.createElement("h2");
        proudprice.textContent = ele.produPrice;

        var prouddescription = document.createElement("p");
        prouddescription.setAttribute("id", "proddesc");
        prouddescription.textContent = ele.prodDesc;


        var productbutton = document.createElement("button");
        productbutton.setAttribute("id", "buttonproduct");
        productbutton.textContent = "ADD TO BASKET";

        productbutton.addEventListener("click", gotocarts);

        function gotocarts() {
            console.log("here");
            mybasketarray.push(ele);
            localStorage.setItem("storecarts", JSON.stringify(mybasketarray));
            document.querySelector(".basketvalue").textContent = mybasketarray.length;
        }

        productDiv.append(productImg, proudprice, prouddescription, productbutton);
        appenddiv.append(productDiv);
    });
}
console.log(mybasketarray);


function typesort() {
    var sortedarr = [];
    var type = document.querySelector("#type").value;
    for (var i = 0; i < dataOfProduct.length; i++) {
        if (type == dataOfProduct[i].producttype) {
            sortedarr.push(dataOfProduct[i]);
        }
    }
    displayItems(sortedarr);
}

function designarr() {
    var sortedarr = [];
    var type = document.querySelector("#design").value;
    for (var i = 0; i < dataOfProduct.length; i++) {
        if (type == dataOfProduct[i].productdesgine) {
            sortedarr.push(dataOfProduct[i]);
        }
    }
    console.log("here");
    displayItems(sortedarr);
}

function colorarr() {
    var sortedarr = [];
    var color = document.querySelector("#color").value;
    for (var i = 0; i < dataOfProduct.length; i++) {
        if (color == dataOfProduct[i].productcolor) {
            sortedarr.push(dataOfProduct[i]);
        }
    }
    displayItems(sortedarr);
}

function sleevearr() {
    var sortedarr = [];
    var sleeve = document.querySelector("#sleeve").value;
    for (var i = 0; i < dataOfProduct.length; i++) {
        if (sleeve == dataOfProduct[i].productSleveLength) {
            sortedarr.push(dataOfProduct[i]);
        }
    }
    displayItems(sortedarr);
}

function browsearr() {
    var sortedarr = [];
    var browse = document.querySelector("#browse").value;
    for (var i = 0; i < dataOfProduct.length; i++) {
        if (browse == dataOfProduct[i].Browse) {
            sortedarr.push(dataOfProduct[i]);
        }
    }
    displayItems(sortedarr);
}

function promotionsarr() {
    var sortedarr = [];
    var browse = document.querySelector("#promotions").value;
    for (var i = 0; i < dataOfProduct.length; i++) {
        if (browse == dataOfProduct[i].productpromotions) {
            sortedarr.push(dataOfProduct[i]);
        }
    }
    displayItems(sortedarr);
}

function discountarr() {
    var sortedarr = [];
    var browse = document.querySelector("#discount").value;
    for (var i = 0; i < dataOfProduct.length; i++) {
        if (browse == dataOfProduct[i].productDiscount) {
            sortedarr.push(dataOfProduct[i]);
        }
    }
    displayItems(sortedarr);
}

function pricesortchange() {
    var priceaftersortedarray = [];
    var browse = document.querySelector("#pricepurpose").value;

    if (browse == "high") {
        dataOfProduct.sort((a, b) => b.produPrice - a.produPrice);
        displayItems(dataOfProduct);
    }
    if (browse == "low") {
        dataOfProduct.sort((a, b) => a.produPrice - b.produPrice);
        displayItems(dataOfProduct);
    }
    console.log(dataOfProduct);
}

document.querySelector(".b").addEventListener("click", basketgo);

function basketgo() {
    window.location.href = "cart.html";
}


function functionTodisplay() {
    document.querySelector(".mainDivgrid").style.display = "block";
    document.querySelector(".mainDivgrid").style.display = "flex";
}

function functionNotdisplay() {
    document.querySelector(".mainDivgrid").style.display = "none";
}

function functionTodisplay1() {
    document.querySelector(".mainDivgridT").style.display = "block";
    document.querySelector(".mainDivgridT").style.display = "flex";
}

function functionNotdisplay1() {
    document.querySelector(".mainDivgridT").style.display = "none";
}


function functionTodisplay2() {
    document.querySelector(".mainDivgridTh").style.display = "block";
    document.querySelector(".mainDivgridTh").style.display = "flex";
}

function functionNotdisplay2() {
    document.querySelector(".mainDivgridTh").style.display = "none";
}


function functionTodisplay3() {
    document.querySelector(".mainDivgridf").style.display = "block";
    document.querySelector(".mainDivgridf").style.display = "flex";
}

function functionNotdisplay3() {
    document.querySelector(".mainDivgridf").style.display = "none";
}

function functionTodisplay4() {
    document.querySelector(".mainDivgridfi").style.display = "block";
    document.querySelector(".mainDivgridfi").style.display = "flex";
}

function functionNotdisplay4() {
    document.querySelector(".mainDivgridfi").style.display = "none";
}



function functionTodisplay5() {
    document.querySelector(".mainDivgrids").style.display = "block";
    document.querySelector(".mainDivgrids").style.display = "flex";
}

function functionNotdisplay5() {
    document.querySelector(".mainDivgrids").style.display = "none";
}


function functionTodisplay6() {
    document.querySelector(".mainDivgridse").style.display = "block";
    document.querySelector(".mainDivgridse").style.display = "flex";
}

function functionNotdisplay6() {
    document.querySelector(".mainDivgridse").style.display = "none";
}

function functionTodisplay7() {
    document.querySelector(".mainDivgrid1").style.display = "block";
    document.querySelector(".mainDivgrid1").style.display = "flex";
}

function functionNotdisplay7() {
    document.querySelector(".mainDivgrid1").style.display = "none";
}

function functionTodisplay8() {
    document.querySelector(".mainDivgrid2").style.display = "block";
    document.querySelector(".mainDivgrid2").style.display = "flex";
}

function functionNotdisplay8() {
    document.querySelector(".mainDivgrid2").style.display = "none";
}


function functionTodisplay9() {
    document.querySelector(".mainDivgrid3").style.display = "block";
    document.querySelector(".mainDivgrid3").style.display = "flex";
}

function functionNotdisplay9() {
    document.querySelector(".mainDivgrid3").style.display = "none";
}

function functionTodisplay0() {
    document.querySelector(".mainDivgrid4").style.display = "block";
    document.querySelector(".mainDivgrid4").style.display = "flex";
}

function functionNotdisplay0() {
    document.querySelector(".mainDivgrid4").style.display = "none";
}

document.querySelector(".basketvalue").textContent = mybasketarray.length;
document.querySelector(".b").style.cursor = "pointer";