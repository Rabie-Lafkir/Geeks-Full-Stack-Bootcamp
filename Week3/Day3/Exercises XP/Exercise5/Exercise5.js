const container = document.getElementById("container");
console.log(container);

// change Pete to Richard
document.querySelectorAll(".list")[0].children[1].textContent = "Richard";

// delete 2nd li in 2nd ul
document.querySelectorAll(".list")[1].children[1].remove();

// change first li of each ul
document.querySelectorAll(".list").forEach(ul => {
    ul.children[0].textContent = "Rabie";
});

// add classes
document.querySelectorAll("ul").forEach(ul => ul.classList.add("student_list"));
document.querySelectorAll("ul")[0].classList.add("university", "attendance");

// style
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

// hide Dan
document.querySelectorAll(".list")[1].children[1].style.display = "none";

// border Richard
document.querySelectorAll(".list")[0].children[1].style.border = "1px solid black";

// change body font size
document.body.style.fontSize = "18px";

// bonus
if (container.style.backgroundColor === "lightblue") {
    const users = document.querySelectorAll(".list")[0].children;
    alert(`Hello ${users[0].textContent} and ${users[1].textContent}`);
}
