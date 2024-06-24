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

createCard(eventsStore);
function createCard(objArray) {
    eventsList.textContent = "";
    objArray.forEach((eventObj) => {
        const eventHr = document.createElement("hr");
        const eventContainer = document.createElement("div");

        const eventImageContainer = document.createElement("div");
        const eventImage = document.createElement("img");
        const eventBadge = document.createElement("div");
        const eventBadgeType = document.createElement("p");

        const eventInfoContainer = document.createElement("div");
        const eventDateInfoPar = document.createElement("p");
        const eventTitleHeader = document.createElement("h4");
        const eventLocationInfo = document.createElement("p");
        const eventType = document.createElement("p");
        const eventAttendees = document.createElement("p");

        eventHr.classList.add("border");
        eventImageContainer.classList.add("eventImageContainer");
        eventImage.classList.add("eventImage");
        eventBadge.classList.add("eventBadge");
        eventBadgeType.classList.add("eventBadgeType");
        eventContainer.classList.add("eventContainer");
        eventInfoContainer.classList.add("eventInfoContainer");
        eventDateInfoPar.classList.add("eventDateInfo", "text500");
        eventTitleHeader.classList.add("eventTitleHeader", "text500");
        eventLocationInfo.classList.add("eventLocationInfo");
        eventType.classList.add("eventType");
        eventAttendees.classList.add("eventAttendees");
        eventDateInfoPar.textContent = eventObj.date;
        eventTitleHeader.textContent = eventObj.title;
        eventLocationInfo.textContent = eventObj.category;
        if (eventObj.attendees) {
            eventAttendees.textContent = eventObj.attendees;
        }
        eventImage.setAttribute("src", `${eventObj.image}`);
        eventInfoContainer.append(eventDateInfoPar, eventTitleHeader, eventLocationInfo);
        if (eventAttendees.textContent !== "") {
            eventInfoContainer.append(eventAttendees);
        }
        eventImageContainer.append(eventImage);
        if (eventObj.type === "online") {
            eventType.textContent = "Online";
            eventBadgeType.textContent = "Online Event";
            eventBadge.setAttribute("display", "block");
            eventBadge.append(eventBadgeType);
            eventImageContainer.append(eventBadge);
            eventInfoContainer.append(eventType);
        }

        eventContainer.append(eventImageContainer, eventInfoContainer);
        eventsList.append(eventHr, eventContainer);


    })

}


let selectedFilters = {
    typeEvent: "Any type",
    distanceEvent: "Any distance",
    categoryEvent: "Any category"
};
console.log(selectedFilters);
function handleSelectMenu(selectMenu, selectForm) {
    const selectTypeEventTitle = selectMenu.querySelector(".selectMenuEventTitle");
    const selectTypeEventLabels = selectMenu.querySelectorAll(".__select__label");
    selectTypeEventTitle.addEventListener('click', () => {
        if ('active' === selectMenu.getAttribute('data-state')) {
            selectMenu.setAttribute('data-state', '');
            eventsFiltersContainer.style.paddingBottom = `10px`;
        } else {
            selectMenu.setAttribute('data-state', 'active');
            eventsFiltersContainer.style.paddingBottom = `${selectTypeEventLabels.length * 40}px`;
        }
    });

    document.addEventListener('click', (event) => {
        if (!selectMenu.contains(event.target)) {
            selectMenu.setAttribute('data-state', '');
        }
    });

    for (let i = 0; i < selectTypeEventLabels.length; i++) {
        // console.log(selectTypeEventLabels[i]);
        selectTypeEventLabels[i].addEventListener('click', (evt) => {
            if (evt.target.closest("#selectTypeEvent")) {
                console.log(evt.target.textContent);
                selectedFilters.typeEvent = evt.target.textContent;
                filterEvents("type", eventsStore, selectedFilters);
            }
            if (evt.target.closest("#selectDistanceEvent")) {
                console.log(evt.target.textContent);
                selectedFilters.distanceEvent = evt.target.textContent !== "Any distance" ? +evt.target.textContent.split("km")[0] : "Any distance";
                filterEvents("distance", eventsStore, selectedFilters);
            }
            if (evt.target.closest("#selectCategoryEvent")) {
                console.log(evt.target.textContent);
                selectedFilters.categoryEvent = evt.target.textContent;
                filterEvents("category", eventsStore, selectedFilters);
            }
            // console.log(selectedFilters);
            selectTypeEventTitle.textContent = evt.target.textContent;
            selectMenu.setAttribute('data-state', '');
            eventsFiltersContainer.style.paddingBottom = `10px`;

        });
    }
}

function filterEvents(type, array, filtersObj) {
    // console.log(array);
    let newArray = [];

    switch (type) {
        case "type":
            if (filtersObj.typeEvent !== "Any type") {
                newArray = array.filter((el) => {
                    return el.type === filtersObj.typeEvent.toLowerCase();
                });
            } else {
                newArray = array.slice();
            }
            break;
        case "distance":
            if (filtersObj.distanceEvent !== "Any distance") {
                newArray = array.filter((el) => {
                    return el.distance === filtersObj.distanceEvent;
                });
            } else {
                newArray = array.slice();
            }

            break;
        case "category":
            if (filtersObj.categoryEvent !== "Any category") {
                newArray = array.filter((el) => {
                    return el.category === filtersObj.categoryEvent;
                });
            } else {
                newArray = array.slice();
            }
            break;
    }

    // console.log("Filtred array: ", newArray);
    createCard(newArray);
}



