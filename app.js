
async function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

let feedbackP = document.querySelector("#error");
let ul = document.querySelector("#list");


async function updateDOMList() {
  try {

    let list = await getList();
    list.forEach((hobbit) => {
      let li = document.createElement("li");
      li.textContent = hobbit;
      ul.appendChild(li);
    });
  } catch (err) { console.error(err);
    feedbackP.textContent = err.message;}
}
updateDOMList();
