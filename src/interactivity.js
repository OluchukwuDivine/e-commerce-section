const addToCart = document.querySelectorAll(".add-to-cart");

addToCart.forEach(item => {
    item.addEventListener("click", ()=>{
        item.innerHTML = ``;
        const addMinus = document.createElement("div");
        addMinus.setAttribute("class", "add-minus-btn");
        var itemCount = 1;
        addMinus.innerHTML = `
            <div class="svg-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
            </div>
            <p class="itemcount">${itemCount}</P>
            <div class="svg-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
            </div>
            `;

        item.appendChild(addMinus);
        console.log(addMinus);
    })
});