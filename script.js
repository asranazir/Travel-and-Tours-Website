let menu = document.getElementById("menuToggle");

if (menu) {
    menu.onclick = () =>
        document.getElementById("navLinks").classList.toggle("show");
}

document.querySelectorAll("#navLinks a").forEach(link => {
    link.onclick = () =>
        document.getElementById("navLinks").classList.remove("show");
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function filterDestinations() {
    let category = document.getElementById("categoryFilter").value;
    let count = 0;

    document.querySelectorAll(".destination-card").forEach(card => {
        let show = category === "all" || card.dataset.category === category;
        card.style.display = show ? "block" : "none";
        if (show) count++;
    });

    document.getElementById("noResults").hidden = count !== 0;
}

function showDestinationDetails(place) {
    location.href = "destination.html?place=" + place;
}

function validateEnquiryForm() {
    let n = enquiryName.value.trim();
    let e = enquiryEmail.value.trim();
    let m = document.getElementById("enquiryMessage").value.trim();

    if (!n || !e || !m) {
        alert("Please fill all fields.");
        return false;
    }

    enquiryMessageResult.innerText = "Your enquiry has been recorded!";
    return false;
}

function validateBookingForm() {
    let n = bookingName.value.trim();
    let e = bookingEmail.value.trim();
    let d = bookingDestination.value;
    let date = travelDate.value;
    let t = Number(travellers.value);

    if (!n || !e || !d || !date || t < 1) {
        alert("Please complete all fields.");
        return false;
    }

    if (new Date(date + "T00:00:00") < new Date(new Date().toDateString())) {
        alert("Select a future travel date.");
        return false;
    }

    bookingMessage.innerText = "Your booking request has been recorded!";
    return false;
}

function validateStayAndFoodForm() {
    let n = stayName.value.trim();
    let e = stayEmail.value.trim();
    let d = stayDestination.value;
    let a = accommodation.value;
    let ci = checkIn.value;
    let co = checkOut.value;
    let g = Number(guests.value);
    let f = foodPreference.value;

    if (!n || !e || !d || !a || !ci || !co || !f || g < 1) {
        alert("Please complete all fields.");
        return false;
    }

    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (new Date(ci + "T00:00:00") < today) {
        alert("Check-in cannot be in the past.");
        return false;
    }

    if (new Date(co) <= new Date(ci)) {
        alert("Check-out must be after check-in.");
        return false;
    }

    stayMessage.innerText = "Your accommodation and food request has been recorded!";
    return false;
}

const destinations = {
    hunza: {
        name: "Hunza Valley",
        image: "Hunza Valley.jpg",
        description: "Beautiful mountains, peaceful villages and amazing scenery.",
        hotelPrices: ["Budget: 4,000/night", "Standard: 7,000/night", "Luxury: 12,000/night", "Guest House: 5,000/night"],
        foodPrices: ["Breakfast: 500", "Lunch: 900", "Dinner: 1,000", "Traditional Food: 1,200"],
        transportPrices: ["Taxi: 2,000/trip", "Private Car: 8,000/day", "Jeep: 12,000/day", "Airport: 6,000"],
        activityPrices: ["Attabad Lake: 1,000", "Boating: 2,000/person", "Karimabad: 1,500", "Market Tour: 500"],
        ticketPrices: ["Attabad Lake: 300", "Fort: 500", "Museum: 300"],
        guidePrices: ["Half Day: 2,000", "Full Day: 4,000"],
        prices: ["Standard: 35,000/person", "Premium: 52,000/person", "Family: 125,000"],
        includes: ["Hotel", "Breakfast", "Transport", "Guided sightseeing"],
        excludes: ["Shopping", "Personal expenses", "Extra meals"],
        activities: ["Karimabad", "Attabad Lake", "Local Markets"],
        itinerary: ["Day 1: Arrival", "Day 2: Karimabad", "Day 3: Attabad Lake", "Day 4: Departure"],
        duration: "4 Days / 3 Nights",
        hotel: "Standard or Premium Hotel",
        food: "Breakfast and local food",
        transport: "Private or shared vehicle"
    },

    skardu: {
        name: "Skardu",
        image: "Skardu.jpg",
        description: "Famous for lakes, mountains and beautiful landscapes.",
        hotelPrices: ["Budget: 5,000/night", "Standard: 8,000/night", "Luxury: 15,000/night", "Guest House: 6,000/night"],
        foodPrices: ["Breakfast: 600", "Lunch: 1,000", "Dinner: 1,200", "Traditional Food: 1,500"],
        transportPrices: ["Taxi: 2,500/trip", "Private Car: 9,000/day", "Jeep: 14,000/day", "Airport: 5,000"],
        activityPrices: ["Shangrila Lake: 1,000", "Kachura Lake: 1,500", "Boating: 2,000", "Desert Visit: 1,000"],
        ticketPrices: ["Shangrila: 500", "Lake: 300", "Museum: 500"],
        guidePrices: ["Half Day: 2,500", "Full Day: 4,500"],
        prices: ["Standard: 42,000/person", "Premium: 60,000/person", "Family: 150,000"],
        includes: ["Hotel", "Breakfast", "Transport", "Sightseeing"],
        excludes: ["Shopping", "Personal expenses", "Extra activities"],
        activities: ["Shangrila Lake", "Kachura Lake", "Local Markets"],
        itinerary: ["Day 1: Arrival", "Day 2: Explore Skardu", "Day 3: Lakes", "Day 4: Sightseeing", "Day 5: Departure"],
        duration: "5 Days / 4 Nights",
        hotel: "Standard or Premium Hotel",
        food: "Breakfast and local food",
        transport: "Private vehicle"
    },

    lahore: {
        name: "Lahore",
        image: "Lahore.webp",
        description: "Famous for history, culture, architecture and delicious food.",
        hotelPrices: ["Budget: 3,500/night", "Standard: 6,000/night", "Luxury: 13,000/night", "Guest House: 4,500/night"],
        foodPrices: ["Breakfast: 400", "Lunch: 700", "Dinner: 900", "Traditional Food: 1,200"],
        transportPrices: ["Taxi: 1,500/trip", "Private Car: 6,000/day", "Rickshaw: 500/trip", "Airport: 2,500"],
        activityPrices: ["Old Lahore: 1,000", "Food Street: 1,500", "Walled City: 1,200", "Shopping: 500"],
        ticketPrices: ["Lahore Fort: 100", "Museum: 100", "Monument Museum: 100"],
        guidePrices: ["Half Day: 1,500", "Full Day: 3,000"],
        prices: ["Standard: 20,000/person", "Premium: 32,000/person", "Family: 75,000"],
        includes: ["Hotel", "Breakfast", "City sightseeing"],
        excludes: ["Shopping", "Personal expenses", "Extra meals"],
        activities: ["Lahore Fort", "Badshahi Mosque", "Old Lahore"],
        itinerary: ["Day 1: Arrival", "Day 2: Historical Places", "Day 3: Markets and Departure"],
        duration: "3 Days / 2 Nights",
        hotel: "City Hotel",
        food: "Breakfast and local restaurants",
        transport: "City transport"
    },

    swat: {
        name: "Swat",
        image: "Swat.jpg",
        description: "Famous for green valleys, rivers and beautiful mountain views.",
        hotelPrices: ["Budget: 3,500/night", "Standard: 6,000/night", "Luxury: 11,000/night", "Guest House: 4,500/night"],
        foodPrices: ["Breakfast: 400", "Lunch: 800", "Dinner: 900", "Traditional Food: 1,200"],
        transportPrices: ["Taxi: 1,500/trip", "Private Car: 7,000/day", "Jeep: 10,000/day", "Airport: 4,000"],
        activityPrices: ["Malam Jabba: 1,500", "Chairlift: 2,000", "River Visit: 500", "Market: 500"],
        ticketPrices: ["Museum: 200", "Park: 300", "Chairlift: 2,000"],
        guidePrices: ["Half Day: 1,500", "Full Day: 3,000"],
        prices: ["Standard: 28,000/person", "Premium: 43,000/person", "Family: 100,000"],
        includes: ["Hotel", "Breakfast", "Transport"],
        excludes: ["Shopping", "Personal expenses", "Extra meals"],
        activities: ["Mingora", "Malam Jabba", "River Views"],
        itinerary: ["Day 1: Arrival", "Day 2: Mingora", "Day 3: Scenic Locations", "Day 4: Departure"],
        duration: "4 Days / 3 Nights",
        hotel: "Hotel or Guest House",
        food: "Breakfast and local food",
        transport: "Private vehicle"
    },

    islamabad: {
        name: "Islamabad",
        image: "Islamabad.jpg",
        description: "Known for parks, beautiful viewpoints and modern landmarks.",
        hotelPrices: ["Budget: 4,000/night", "Standard: 7,000/night", "Luxury: 15,000/night", "Guest House: 5,500/night"],
        foodPrices: ["Breakfast: 500", "Lunch: 900", "Dinner: 1,000", "Traditional Food: 1,300"],
        transportPrices: ["Taxi: 1,500/trip", "Private Car: 6,000/day", "Rent a Car: 8,000/day", "Airport: 2,000"],
        activityPrices: ["Daman-e-Koh: 500", "City Tour: 1,500", "Park: 300", "Shopping: 500"],
        ticketPrices: ["Monument Museum: 100", "Lok Virsa: 200", "Faisal Mosque: Free"],
        guidePrices: ["Half Day: 1,500", "Full Day: 3,000"],
        prices: ["Standard: 18,000/person", "Premium: 30,000/person", "Family: 70,000"],
        includes: ["Hotel", "Breakfast", "City tour"],
        excludes: ["Shopping", "Personal expenses", "Extra meals"],
        activities: ["Faisal Mosque", "Pakistan Monument", "Daman-e-Koh"],
        itinerary: ["Day 1: Arrival", "Day 2: Landmarks", "Day 3: Parks and Departure"],
        duration: "3 Days / 2 Nights",
        hotel: "City Hotel",
        food: "Breakfast and local restaurants",
        transport: "City transport"
    },

    multan: {
        name: "Multan",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1000",
        description: "Famous for historic shrines, traditional crafts and cultural heritage.",
        hotelPrices: ["Budget: 3,000/night", "Standard: 5,000/night", "Luxury: 10,000/night", "Guest House: 4,000/night"],
        foodPrices: ["Breakfast: 350", "Lunch: 600", "Dinner: 800", "Traditional Food: 1,000"],
        transportPrices: ["Taxi: 1,000/trip", "Private Car: 5,000/day", "Rickshaw: 300/trip", "Airport: 2,000"],
        activityPrices: ["Shrine Tour: 500", "Bazaar Tour: 500", "Pottery Workshop: 1,500", "City Tour: 1,000"],
        ticketPrices: ["Museum: 100", "Heritage Site: 200", "Shrine: Free"],
        guidePrices: ["Half Day: 1,000", "Full Day: 2,500"],
        prices: ["Standard: 17,000/person", "Premium: 27,000/person", "Family: 65,000"],
        includes: ["Hotel", "Breakfast", "Local sightseeing"],
        excludes: ["Shopping", "Personal expenses", "Extra meals"],
        activities: ["Historic Shrines", "Old Bazaars", "Blue Pottery"],
        itinerary: ["Day 1: Arrival", "Day 2: Heritage Sites", "Day 3: Bazaars and Departure"],
        duration: "3 Days / 2 Nights",
        hotel: "City Hotel",
        food: "Breakfast and local food",
        transport: "Local transport"
    }
};

let params = new URLSearchParams(location.search);
let place = params.get("place");
let data = destinations[place];

function showList(id, items) {
    let list = document.getElementById(id);
    if (!list) return;

    list.innerHTML = "";
    items.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

if (document.getElementById("destinationName")) {
    if (data) {
        destinationName.innerText = data.name;
        destinationImage.src = data.image;
        description.innerText = data.description;
        duration.innerText = data.duration;
        hotel.innerText = data.hotel;
        food.innerText = data.food;
        transport.innerText = data.transport;

        ["hotelPrices", "foodPrices", "transportPrices",
         "activityPrices", "ticketPrices", "guidePrices",
         "prices", "includes", "excludes", "activities",
         "itinerary"].forEach(id => showList(id, data[id]));

        bookPackageButton.onclick = () => {
            location.href = "index.html?book=" + place + "#booking";
        };

    } else {
        destinationName.innerText = "Destination Not Found";
    }
}

let bookingPlace = params.get("book");

if (bookingPlace && document.getElementById("bookingDestination")) {
    if (destinations[bookingPlace]) {
        bookingDestination.value = destinations[bookingPlace].name;
    }
}
