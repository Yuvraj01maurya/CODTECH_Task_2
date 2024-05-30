const from = document.querySelector("#from");
const add = document.querySelector("#add");
const input_text = document.querySelector("#input_text");
const newtaskadd = document.querySelector(".newtaskadd");
const startedadd = document.querySelector(".startedadd");
const completedadd = document.querySelector(".completedadd");
const notask = document.querySelector(".notask");
const all_task = document.querySelector(".all_task");
const all_Heigh_priority = document.querySelector(".all_Heigh_priority");
const start_Heigh_priority = document.querySelector(".start_Heigh_priority");
const completed_Heigh_priority = document.querySelector(
  ".completed_Heigh_priority"
);

const fromdate = document.querySelector("#date");
const priority = document.querySelector("#priority");
const date_label = document.querySelector("#date-label");

let count = 0;
let star_count = 0;
let complet_count = 0;
let countheigh = 0;
let star_countheigh = 0;
let complet_countheigh = 0;

from.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!input_text.value) {
    alert("please input text");
  } else {
    const newtask = document.createElement("div");
    newtask.classList.add("newtask");

    const newtask2 = document.createElement("div");
    newtask2.classList.add("newtask2");

    const date_priority = document.createElement("div");
    date_priority.classList.add("date_priority");

    const priorityshow = document.createElement("p");
    priorityshow.classList.add("priorityshow");
    priorityshow.innerText = priority.value;

    const newtasktext = document.createElement("input");
    newtasktext.classList.add("newtasktext");
    newtasktext.value = input_text.value;
    newtasktext.setAttribute("readonly", "readonly");
    // date
    const date = document.createElement("p");
    date.classList.add("date");
    date.innerText = `Due Date:-${fromdate.value}`;

    // const input_element = document.createElement("input");
    // input_element.type = "radio";
    // priority

    const select = document.createElement("select");
    select.name = "priority";
    select.id = "priority1";

    const option1 = document.createElement("option");
    option1.value = "todo";
    option1.text = "To-do";

    const option2 = document.createElement("option");
    option2.value = "inprogress";
    option2.text = "Inprogress";

    const option3 = document.createElement("option");
    option3.value = "done";
    option3.text = "Done";
    select.value = priority.value;

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);

    const edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerHTML = "Edit";

    const deletbutton = document.createElement("button");
    deletbutton.classList.add("deletbutton");
    deletbutton.innerHTML = '<img src="./icon/trash.svg" alt="Delete"></img>';

    newtask.appendChild(date_priority);
    // newtask2.appendChild(input_element);
    newtask2.appendChild(newtasktext);
    date_priority.appendChild(date);
    date_priority.appendChild(priorityshow);
    newtask2.appendChild(select);
    newtask2.appendChild(edit);
    newtask2.appendChild(deletbutton);
    newtask.appendChild(newtask2);
    newtaskadd.appendChild(newtask);

    edit.addEventListener("click", () => {
      if (edit.innerText == "Edit") {
        edit.innerText = "Save";
        newtasktext.removeAttribute("readonly");
        newtasktext.focus();
      } else {
        edit.innerText = "Edit";
        newtasktext.setAttribute("readonly", "readonly");
      }
    });

    select.addEventListener("click", () => {
      if (select.value == "inprogress") {
        newtaskadd.removeChild(newtask);
        startedadd.appendChild(newtask);

        count = count - 1;
        all_task.innerText = count;

        if (priority.value == "heigh") {
          countheigh = countheigh - 1;
          all_Heigh_priority.innerText = countheigh;
        }
        if (priority.value == "heigh") {
          star_countheigh = star_countheigh + 1;
          start_Heigh_priority.innerText = star_countheigh;
        }

        star_count = star_count + 1;
        const start_tasks = document.querySelector(".start_task");
        start_tasks.innerText = star_count;

        deletbutton.addEventListener("click", () => {
          startedadd.removeChild(newtask);
          star_count = star_count - 1;
          start_tasks.innerText = star_count;

          if (priority.value == "heigh") {
            star_countheigh = star_countheigh - 1;
            start_Heigh_priority.innerText = star_countheigh;
          }
        });
      } else if (select.value == "done") {
        startedadd.removeChild(newtask);
        completedadd.appendChild(newtask);

        complet_count = complet_count + 1;
        const completed_task = document.querySelector(".completed_task");
        completed_task.innerText = complet_count;

        if (priority.value == "heigh") {
          star_countheigh = star_countheigh - 1;
          start_Heigh_priority.innerText = star_countheigh;
        }
        if (priority.value == "heigh") {
          complet_countheigh = complet_countheigh + 1;
          completed_Heigh_priority.innerText = complet_countheigh;
        }

        deletbutton.addEventListener("click", () => {
          completedadd.removeChild(newtask);
          complet_count = complet_count - 1;
          completed_task.innerText = complet_count;

          if (priority.value == "heigh") {
            complet_countheigh = complet_countheigh - 1;
            completed_Heigh_priority.innerText = complet_countheigh;
          }
        });

        star_count = star_count - 1;
        start_tasks.innerText = star_count;
      }
    });

    count = count + 1;
    if (priority.value == "heigh") {
      countheigh = countheigh + 1;
      all_Heigh_priority.innerText = countheigh;
    }

    if (count > 0) {
      notask.classList.add("none");
      all_task.innerText = count;
    }

    deletbutton.addEventListener("click", () => {
      newtaskadd.removeChild(newtask);
      count = count - 1;
      all_task.innerText = count;

      if (priority.value == "heigh") {
        countheigh = countheigh - 1;
        all_Heigh_priority.innerText = countheigh;
      }
    });

    // date_label.addEventListener('click', () => {
    //   fromdate.click();
    // });
  }
  input_text.value = "";
  fromdate.value = "";
});
