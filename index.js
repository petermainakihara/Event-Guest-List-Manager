const input = document.getElementById("name");
const list = document.getElementById("list");
const addButton = document.getElementById("add");

addButton.addEventListener("click", function() {
  const name = input.value;
  const rsvp = document.createElement("button");
  rsvp.textContent = "Not Attending";

  rsvp.addEventListener("click", function() {
    if (rsvp.textContent === "Not Attending") {
      rsvp.textContent = "Attending";
    } else {
      rsvp.textContent = "Not Attending";
    }
  });

  const remove = document.createElement("button");
  remove.textContent = "Remove";

  remove.addEventListener("click", function() {
    list.removeChild(item);
  });

  item.appendChild(nameSpan);
  item.appendChild(rsvp);
  item.appendChild(remove);
  list.appendChild(item);
});
