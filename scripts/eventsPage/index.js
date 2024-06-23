// import {EventObj} from "./EventObj.js";
//
const eventsStore = [
    {
        title: "INFJ Personality Type - Coffee Shop Meet & Greet",
        description: "Being an INFJ",
        date: new Date(2024, 2, 23, 15),
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
        type: "offline",
        attendees: 99,
        category: "Hobbies and Passions",
        distance: 50,
    },
    {
        title: "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
        description: "New York AI Users",
        date: new Date(2024, 2, 23, 11, 30),
        image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
        type: "offline",
        attendees: 43,
        category: "Technology",
        distance: 25,
    },
    {
        title: "Book 40+ Appointments Per Month Using AI and Automation",
        description: "New Jersey Business Network",
        date: new Date(2024, 2, 16, 14),
        image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        category: "Technology",
        distance: 10,
    },
    {
        title: "Dump writing group weekly meetup",
        description: "Dump writing group",
        date: new Date(2024, 2, 13, 11),
        image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 77,
        category: "Business",
        distance: 100,
    },
    {
        title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
        description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
        date: new Date(2024, 2, 14, 11),
        image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 140,
        category: "Social Activities",
        distance: 75,
    },
    {
        title: "All Nations - Manhattan Missions Church Bible Study",
        description: "Manhattan Bible Study Meetup Group",
        date: new Date(2024, 2, 14, 11),
        image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        category: "Health and Wellbeing",
        distance: 15,
    },
];

const selectTypeForm = document.querySelector("#selectTypeForm");
const selectDistanceForm = document.querySelector("#selectDistanceForm");
const selectCategoryForm = document.querySelector("#selectCategoryForm");
const eventsList = document.querySelector(".eventsList");
const selectTypeEvent = document.querySelector("#selectTypeEvent");
const selectDistanceEvent = document.querySelector("#selectDistanceEvent");
const selectCategoryEvent = document.querySelector("#selectCategoryEvent");
const eventsFiltersContainer = document.querySelector(".eventsFiltersContainer");
handleSelectMenu(selectTypeEvent, selectTypeForm);
handleSelectMenu(selectDistanceEvent, selectDistanceForm);
handleSelectMenu(selectCategoryEvent, selectCategoryForm);

// <div className="eventInfoContainer">
//     <h4>Day Trading Idea and Strategy
//     </h4>
//     <p className="eventLocationInfo">Business (5 km)</p>
//     <p className="eventDateInfo">Mon, Mar 18 · 7:00 PM PDT</p>
//     <div className="additionEventInfoContainer">
//         <p className="membersWaitingInfo">1 going</p>
//         <p className="paidInfo">Free</p>
//     </div>
// </div>
// eventsStore.forEach((el) => {
//     const eventContainer = document.createElement("div");
//     const eventInfoContainer = document.createElement("div");
//     const eventImage = document.createElement("img");
//     const titlePar = document.createElement("h3");
//     const descPar = document.createElement("p");
//     const typePar = document.createElement("p");
//     const categoryPar = document.createElement("p");
//     const distancePar = document.createElement("p");
//
//     eventContainer.classList.add("eventContainer");
//     eventInfoContainer.classList.add("eventInfoContainer");
//
//     eventImage.src = el.image;
//     titlePar.textContent = el.title;
//     descPar.textContent = el.description;
//     typePar.textContent = el.type;
//     categoryPar.textContent = el.category;
//     distancePar.textContent = el.distance;
//
//     eventInfoContainer.append(eventImage, titlePar, descPar, typePar, categoryPar, distancePar);
//     eventContainer.append(eventInfoContainer);
//     eventsList.append(eventContainer);
// })


function createCard(objArray) {
}


let selectedFilters = [];

function handleSelectMenu(selectMenu, selectForm) {
    const selectTypeEventTitle = selectMenu.querySelector(".selectMenuEventTitle");
    const selectTypeEventLabels = selectMenu.querySelectorAll(".__select__label");


    // Toggle menu
    selectTypeEventTitle.addEventListener('click', () => {
        if ('active' === selectMenu.getAttribute('data-state')) {
            selectMenu.setAttribute('data-state', '');
            eventsFiltersContainer.style.paddingBottom = `10px`;
        } else {
            selectMenu.setAttribute('data-state', 'active');
            // console.log(selectTypeEventLabels.length * 40);
            eventsFiltersContainer.style.paddingBottom = `${selectTypeEventLabels.length * 40}px`;
            // eventsFiltersContainer.style.paddingBottom = `100%`;

        }
    });

    document.addEventListener('click', (event) => {
        if (!selectMenu.contains(event.target)) {
            selectMenu.setAttribute('data-state', '');
        }
    });

// Close when click to option
    for (let i = 0; i < selectTypeEventLabels.length; i++) {
        selectTypeEventLabels[i].addEventListener('click', (evt) => {
            // console.log("test");
            selectTypeEventTitle.textContent = evt.target.textContent;
            selectMenu.setAttribute('data-state', '');
            console.log(selectTypeEventTitle.textContent);
            // selectForm.addEventListener("submit", () => {
            //     console.log("test");
            // });
        });
    }


    // radios.forEach(radio => {
    //     radio.addEventListener('change', () => {
    //         if (radio.checked) {
    //             console.log('Selected category:', radio.value);
    //             selectTypeEventTitle.textContent = radio.value;
    //             selectMenu.setAttribute('data-state', '');
    //         }
    //     });
    // });
}

