
// script.js

let map;  // Declare the map variable outside to keep track of initialization

// Create custom icons with specific colors and refined shapes
const userIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', // Example animated person icon URL
    iconSize: [40, 40], // Adjusted size of the icon
    iconAnchor: [20, 40], // Adjusted anchor point for correct positioning
    popupAnchor: [0, -40] // Point from which the popup should open relative to the iconAnchor
});

const hospitalIcon = L.icon({
    iconUrl: 'https://img.icons8.com/doodle/48/hospital.png', // Example animated hospital icon from Icons8
    iconSize: [40, 40], // Adjusted size of the icon
    iconAnchor: [20, 40], // Adjusted anchor point for correct positioning
    popupAnchor: [0, -40] // Point from which the popup should open relative to the iconAnchor
});



const hospitals = [
    {
        name: "Circumcision, Cosmetic Breast Surgery Hospital",
        rating: "-",
        reviews: null,
        type: "Hospital",
        address: "42-133",
        distance: "89 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"9am-4:30pm",
        lat: 17.50372789469704,
        lon: 78.42233684199866
    },
    {
        name: "Ushodaya Multispeciality Dental Clinic",
        rating: 4.9,
        reviews: 30,
        type: "Dental clinic",
        address: "H.no 993/A, Allwyn Colony phase 1, Kukatpally, opp. Hanuman Temple",
        distance: "180 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"9:30am-9pm",
        lat: 17.502703971151476,
        lon:  78.42017137771046
    },
    {
        name: "Sujatha Clinic",
        rating: 5.0,
        reviews: 10,
        type: "Hospital",
        address: "Road No: 1, Allywn Colony, Hanuman Temple Lane, Opp, Meeseva St",
        distance: "200 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"10:30am-8:30pm",
        lat: 17.503489146287944,
        lon:  78.41989975349865
    },
    {
        name: "Padmaja hospitals Jagathgiri Gutta",
        rating: 4.2,
        reviews: 54,
        type: "Hospital",
        address: "42-133",
        distance: "240 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"Open 24 hrs",
        lat: 17.502059956112223, 
        lon: 78.4237722146939
    },
    {
        name: "Dr.p.satyanarayana Clinic",
        rating: 3.0,
        reviews: 2,
        type: "Hospital",
        address: "42-149/1",
        distance: "270 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"9am-1pm",
        lat: 17.502237297033346,
        lon: 78.4241779835261
    },
    {
        name: "Keerthi Clinic",
        rating: 5.0,
        reviews: 1,
        type: "Medical clinic",
        address: "Near 1st Phase Bustop, Alwyn Colony, Kukatpally",
        distance: "290 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"9am-10pm",
        lat: 17.502036434900884, 
        lon: 78.41923960629654
    },
    {
        name: "Vijaya Dental",
        rating: 4.9,
        reviews: 493,
        type: "Hospital",
        address: "#4-32-403, A/7 opp Bhavani bajaj show room, Above K. V. R CLINIC first floor",
        distance: "300 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"10am-9pm",
        lat: 17.502013988888038, 
        lon: 78.41917232099864
    },
    {
        name: "Charan Sai Pharmacy",
        rating: "-",
        reviews: null,
        type: "Medical clinic",
        address: "B -60",
        distance: "350 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"Not specified",
        lat: 17.50124439464311, 
        lon: 78.4193617246305
    },
    {
        name: "Manoj Hospial",
        rating: 2.3,
        reviews: 3,
        type: "Hospital",
        address: "4-34-68,Venkateswara Nagar, Opp.Thirumala Wines,Jagadhgirigutta",
        distance: "350 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"Open 24 hrs",
        lat: 17.50176198686067, 
        lon: 78.42455975064503
    },
    {
        name: "Santhosh Clinic",
        rating: 5.0,
        reviews: 1,
        type: "Medical clinic",
        address: "Maisamma Nagar, Jagathgiri Gutta, Hyderabad, Telangana 500072",
        distance: "350 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"9am-9pm",
        lat: 17.501919567916904, 
        lon: 78.42479432099854
    },
    {
        name: "Sai Clinic",
        rating: 1.0,
        reviews: 1,
        type: "Medical clinic",
        address: "Pipe Line Road",
        distance: "400 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"9am-9:30pm",
        lat: 17.501618792176142, 
        lon: 78.41849521910814
    },
    {
        name: "MOTHER CARE CLINIC",
        rating: 4.3,
        reviews: 22,
        type: "Medical clinic",
        address: "Hyderabad, Telangana",
        distance: "400 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"10am-8:30pm",
        lat: 17.502092983414233, 
        lon: 78.42526319518278
    },
    {
        name: "Apollo Diagnostics Kukatpalli",
        rating: 4.9,
        reviews: 128,
        type: "Diagnostic center",
        address: "H, 436, Allwyn Colony Rd",
        distance: "400 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"6:30am-9pm",
        lat: 17.501863592657454, 
        lon: 78.41816454719218
    },
    {
        name: "Sudha Poly Clinic",
        rating: "-",
        reviews: null,
        type: "Medical clinic",
        address: "GC39+597, Road No. 1",
        distance: "350 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"Temporarily closed",
        lat: 17.502929615521346, 
        lon: 78.41842218904844
    },
    {
        name: "Manikanta Medical & General Stores",
        rating: 5.0,
        reviews: 2,
        type: "Medical Center",
        address: "Srilaxmi clinic, manikanta medical Store, Pipe Line Road",
        distance: "400 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"Temporarily closed",
        lat: 17.501760497980648, 
        lon: 78.42509802332061
    },
    {
        name: "Care And Cure Multispeciality hospital",
        rating: 4.3,
        reviews: 86,
        type: "Hospital",
        address: "H.NO: 4, 32-72-794",
        distance: "450 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"Open 24 hrs",
        lat: 17.50146658097583, 
        lon: 78.41787895959826
    },
    {
        name: "Arundhati Medical Hall",
        rating: 4.0,
        reviews: 4,
        type: "Medical clinic",
        address: "GC2G+G73, HMT Rd",
        distance: "450 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"Not specified",
        lat: 17.501254543902473, 
        lon: 78.42571382892856
    },
    {
        name: "Venkateshwara Clinic",
        rating: "-",
        reviews: null,
        type: "Medical clinic",
        address: "FCXF+PHW, Jagadgirigutta Rd No.5",
        distance: "450 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"9am-10pm",
        lat: 17.49936395200367, 
        lon: 78.42396526210261
    },
    {
        name: "Kids Care Children Clinic",
        rating: 2.2,
        reviews: 24,
        type: "Children's hospital",
        address: "GC3G+6GC, Indira Gandhi Cross Rd",
        distance: "500 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"Open 24 hrs",
        lat: 17.50306740015843, 
        lon: 78.42627565350212
    },
    {
        name: "Sri Sai Nath Clinic",
        rating: "-",
        reviews: null,
        type: "Medical clinic",
        address: "GC2G+X94, Caman, beside Jagathgirigutta Bustop",
        distance: "450 m",
        Services: "Basic",
        contactInfo:"09440516828",
        operatingHours:"Temporarily closed",
        lat: 17.50239079708292, 
        lon: 78.42594708170952
    },
    {
        name: "My Health Hospitals",
        rating: "4.8",
        reviews: null,
        type: "Hospital",
        address: "H.No 15-24-212 MIG-212, Rd Number 1, Housing Board Colony, K P H B Phase 1, Kukatpally, Hyderabad",
        distance: "3.6 km",
        Services: "Urology, Gastroenterology, Vascular Surgery, Gynecology, Orthopedics, Neurology, General Surgery",
        contactInfo: "09111674111",
        operatingHours: "24 hours",
        lat: 17.493001581134962,
        lon: 78.40201516428273
    },
    {
        name: "Remedy Hospitals",
        rating: "4.4",
        reviews: null,
        type: "Hospital",
        address: "Road No. 4, opp. Chandana Brothers Show Room, Kukatpally Housing Board Colony, Kukatpally, Hyderabad",
        distance: "3.5 km",
        Services: "Emergency Services & Trauma Care Unit, General Surgery, Cardiology, ENT, Obstetrics and Gynecology, Nephrology, Psychiatry, Gastroenterology, Medical Oncology, Endocrinology, Rheumatology, Dental, Dietetics, General Medicine",
        contactInfo: "096663 63699",
        operatingHours: "24 hours",
        lat: 17.49470956308115,
        lon: 78.39857041863978
    },
    {
        name: "Prasad Hospital",
        rating: "4.6",
        reviews: null,
        type: "Hospital",
        address: "MIG-204, Road No.1, Opposite Hotel Sitara Grand, MIG-205, Rd Number 1, Kukatpally Housing Board Colony, Kukatpally, Hyderabad",
        distance: "3.5 km",
        Services: "Paediatrics & NICU, Mother and Child, Gynaecology & Obstetrics, General Medicine, Cardiology, Dermatology, ENT, Orthopedic & Trauma Care, Pulmonology, Gastroenterology, Neurology",
        contactInfo: "04023152315",
        operatingHours: "24 hours",
        lat: 17.49205472505446,
        lon: 78.40158608856298
    },
    {
        name: "Padmaja Hospital",
        rating: "4.3",
        reviews: null,
        type: "Hospital",
        address: "MIG-144, Rd Number 1, above Padmaja Hospital, KPHB Phase 2, Kukatpally, Hyderabad",
        distance: "4.5 km",
        Services: "General Medicine, Orthopedic, Knee Surgery, Rhinoplasty Surgery, Kidney Stones, ENT, Mastoidectomy Surgery, Gynecology, Radiology, Spinal Problems, Hernia Surgery, Laparoscopic Surgery, Tonsil Cure Surgery, Varicose Veins, Bariatric Surgery, Gynecomastia, Plastic Surgery, Urology, Gastroenterology, Neurology, Arthroscopic Surgery, Craniotomy Surgery, Hip Replacement, Piles Treatment, Laparoscopic Cholecystectomy",
        contactInfo: "07288803555",
        operatingHours: "24 hours",
        lat: 17.48690274103304,
        lon: 78.3994506463871
    },
    {
        name: "Meditech Multi Speciality Hospitals",
        rating: "4.6",
        reviews: null,
        type: "Hospital",
        address: "44-048/2, Beerappa Nagar, Jagathgirigutta, Quthbullapur, Hyderabad",
        distance: "2 km",
        Services: "Not specified",
        contactInfo: "09030333181",
        operatingHours: "24 hours",
        lat: 17.502182129704845,
        lon: 78.42922530538537
    }
];

// Function to calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Function to get the user's location and filter hospitals within 5 km
function getUserLocation() {
    console.log("Attempting to get user location...");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError, { enableHighAccuracy: true });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Function to handle the user's location
function showPosition(position) {
    console.log("User's position received:", position);
    const userLat = position.coords.latitude;
    const userLon = position.coords.longitude;

    console.log(`User's coordinates: Latitude ${userLat}, Longitude ${userLon}`);

    // Filter hospitals within 5 km radius
    const nearbyHospitals = hospitals.filter(hospital => {
        const distance = calculateDistance(userLat, userLon, hospital.lat, hospital.lon);
        console.log(`Distance to ${hospital.name}: ${distance.toFixed(2)} km`);  // Debugging distance

        hospital.distance = distance.toFixed(2); // Add distance to the hospital object
        return distance <= 5; // Filter hospitals within 5 km radius
    });

    // Debugging filtered hospitals
    console.log("Nearby hospitals within 5 km:", nearbyHospitals);

    // Display the hospitals on the List Section
    if (document.querySelector("#hospitalList")) {
        displayHospitals(nearbyHospitals);
    }

    // Display the hospitals on the Detailed Info Section
    if (document.querySelector("#hospitalTable")) {
        displayHospitalDetails(nearbyHospitals);
    }

    // Display the hospitals on the Map Section
    if (document.querySelector("#mapContainer")) {
        displayMap(userLat, userLon, nearbyHospitals);
    }
}

// Function to handle geolocation errors
function showError(error) {
    console.log("Geolocation error:", error);
    let status = document.getElementById("status") || document.getElementById("mapStatus");
    switch(error.code) {
        case error.PERMISSION_DENIED:
            status.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            status.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            status.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            status.innerHTML = "An unknown error occurred.";
            break;
    }
}

// Function to display hospitals in the list section
function displayHospitals(hospitals) {
    console.log("Displaying hospitals list:", hospitals);
    const hospitalList = document.querySelector("#hospitalList");
    hospitalList.innerHTML = ""; // Clear previous results

    if (hospitals.length > 0) {
        hospitals.forEach(hospital => {
            const li = document.createElement("li");
            li.textContent = `${hospital.name} (${hospital.distance} km away)`;
            hospitalList.appendChild(li);
        });
        hospitalList.style.display = "block";
        document.getElementById("status").style.display = "none";
    } else {
        document.getElementById("status").innerHTML = "No hospitals found within a 5km radius.";
    }
}

// Function to display detailed information of hospitals in the detailed info section
function displayHospitalDetails(hospitals) {
    console.log("Displaying hospital details:", hospitals);
    const tableBody = document.querySelector("#hospitalTable tbody");
    tableBody.innerHTML = ""; // Clear previous results

    hospitals.forEach(hospital => {
        // Use a fallback if services are undefined or not an array
        const services = Array.isArray(hospital.services) ? hospital.services.join(", ") : "No services listed";

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${hospital.name}</td>
            <td>${hospital.distance} km</td>
            <td>${hospital.type}</td>
            <td>${hospital.address}</td>
            <td>${hospital.contactInfo}</td>
            <td>${hospital.Services}</td>
            <td>${hospital.operatingHours}</td>
            <td>${hospital.rating}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to display hospitals on the map (for Map Section)
function displayMap(userLat, userLon, hospitals) {
    console.log("Displaying map with hospitals");

    // Check if the map is already initialized
    if (map) {
        map.remove(); // Remove the existing map before re-initializing
    }

    map = L.map('mapContainer').setView([userLat, userLon], 13);

    // Set up the OSM layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Add a marker for the user's location with custom sky blue icon
    L.marker([userLat, userLon], { icon: userIcon }).addTo(map)
        .bindPopup('You are here.')
        .openPopup();

    // Add a circle to represent the 5km radius
    L.circle([userLat, userLon], { 
        color: 'blue', 
        fillColor: '#add8e6',
        fillOpacity: 0.5,
        radius: 5000 // Radius in meters (5km)
    }).addTo(map);

    // Add markers for each hospital within the 5km radius with custom animated hospital icon
    hospitals.forEach(hospital => {
        const services = Array.isArray(hospital.services) ? hospital.services.join(", ") : "No services listed";

        L.marker([hospital.lat, hospital.lon], { icon: hospitalIcon }).addTo(map)
            .bindPopup(`<b>${hospital.name}</b><br>${hospital.address}<br>Services: ${services}<br>Operating Hours: ${hospital.operatingHours}<br>Contact Info: ${hospital.contactInfo}`)
            .openPopup();
    });
}

// Event listener for the button on the Home Section
document.querySelector('#findHospitalsBtn').addEventListener('click', () => {
    console.log("Find Hospitals button clicked");
    getUserLocation();
});

// Automatically get location and display map when the page loads
window.onload = () => {
    console.log("Page loaded, initializing map and location fetch");
    getUserLocation();
};

