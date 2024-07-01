import {
    eventsFiltersContainer, eventsList,
    eventsStore,
    selectCategoryEvent, selectCategoryForm,
    selectDistanceEvent,
    selectDistanceForm, selectedFilters,
    selectTypeEvent,
    selectTypeForm
} from "./elements.js";
import {formatDate} from "./utils.js";

handleSelectMenu(selectTypeEvent, selectTypeForm);
handleSelectMenu(selectDistanceEvent, selectDistanceForm);
handleSelectMenu(selectCategoryEvent, selectCategoryForm);
createCards(eventsStore);

function createCards(objArray) {
    eventsList.textContent = "";
    objArray.forEach((eventObj) => {
        createCard(eventObj);
    })
}

function createImageContainer(imageSrc) {
    const eventImageContainer = document.createElement("div");
    const eventImage = document.createElement("img");

    eventImageContainer.classList.add("eventImageContainer");
    eventImage.classList.add("eventImage");

    eventImage.setAttribute("src", `${imageSrc}`);

    eventImageContainer.append(eventImage);
    return eventImageContainer;
}

function createBadge(type) {
    const eventBadge = document.createElement("div");
    const eventBadgeType = document.createElement("p");

    eventBadge.classList.add("eventBadge");
    eventBadgeType.classList.add("eventBadgeType");

    if (type === "online") {
        eventBadgeType.textContent = "Online Event";
    }
    eventBadge.setAttribute("display", "block");
    eventBadge.append(eventBadgeType);

    return eventBadge;
}


function createInfoContainer(obj) {
    const eventInfoContainer = document.createElement("div");
    const eventDateInfoPar = document.createElement("p");
    const eventTitleHeader = document.createElement("h4");
    const eventLocationInfo = document.createElement("p");
    const eventType = document.createElement("p");
    const eventAttendees = document.createElement("p");


    eventInfoContainer.classList.add("eventInfoContainer");
    eventDateInfoPar.classList.add("eventDateInfo", "text500");
    eventTitleHeader.classList.add("eventTitleHeader", "text500");
    eventLocationInfo.classList.add("eventLocationInfo");
    eventType.classList.add("eventType");
    eventAttendees.classList.add("eventAttendees");

    eventDateInfoPar.textContent = formatDate(obj.date);
    eventTitleHeader.textContent = obj.title;
    eventLocationInfo.textContent = obj.category;
    if (obj.attendees) {
        eventAttendees.textContent = obj.attendees;
    }
    eventInfoContainer.append(eventDateInfoPar, eventTitleHeader, eventLocationInfo);
    if (eventAttendees.textContent !== "") {
        eventInfoContainer.append(eventAttendees);
    }
    if (obj.type === "online") {
        eventType.textContent = "Online";
    }

    return eventInfoContainer;
}


function createCard(obj) {
    const eventHr = document.createElement("hr");
    const eventContainer = document.createElement("div");
    const eventImageContainer = createImageContainer(obj.image);
    const eventBadge = createBadge(obj.type);
    const eventInfoContainer = createInfoContainer(obj);

    eventHr.classList.add("border");
    eventContainer.classList.add("eventContainer");

    if (obj.type === "online") {
        eventImageContainer.append(eventBadge);
    }

    eventContainer.append(eventImageContainer, eventInfoContainer);
    eventsList.append(eventHr, eventContainer);
}

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
        selectTypeEventLabels[i].addEventListener('click', (evt) => {
            if (evt.target.closest("#selectTypeEvent")) {
                selectedFilters.typeEvent = evt.target.textContent;
                filterEvents("type", eventsStore, selectedFilters);
            }
            if (evt.target.closest("#selectDistanceEvent")) {
                selectedFilters.distanceEvent = evt.target.textContent !== "Any distance" ? +evt.target.textContent.split("km")[0] : "Any distance";
                filterEvents("distance", eventsStore, selectedFilters);
            }
            if (evt.target.closest("#selectCategoryEvent")) {
                selectedFilters.categoryEvent = evt.target.textContent;
                filterEvents("category", eventsStore, selectedFilters);
            }
            selectTypeEventTitle.textContent = evt.target.textContent;
            selectMenu.setAttribute('data-state', '');
            eventsFiltersContainer.style.paddingBottom = `10px`;

        });
    }
}

function filterEvents(type, array, filtersObj) {
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

    createCards(newArray);
}



