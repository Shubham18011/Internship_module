

// function populateDropdown() {
//     const dropdown = document.getElementById("branch");
//     for (let i = 0; i < branches.length; i++) {
//         const option = document.createElement("option");
//         option.value = branches[i];
//         option.text = branches[i];
//         dropdown.appendChild(option);
//     }
// }

// Populate the dropdown when the page loads
// populateDropdown();


//Function getting called when form is submited 
document.getElementById('counselingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Fetch and process college data based on the form inputs
    // Display the list of colleges in the "collegeList" div
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const rank = parseInt(document.getElementById('rank').value);
    const branch = document.getElementById('branch').value;

    // Age validation
    if (age < 17 || 50 < age) {
        document.getElementById('collegeList').innerHTML = `<div class= "warning">Invaild age!!<br>The age should be 17 or above.</div>`;
        return;
    }

    // Rank validation
    if (rank <= 0 || rank >= 100) {
        document.getElementById('collegeList').innerHTML = `<div class= "warning">Invaild Rank !!<br>Rank Should be between 1 to 100</div>`;
        return;
    }

    // Array of colleges with their names and locations based on rank ranges
    let filteredColleges = engineeringColleges.filter(college => {
        const minRank = college[1];
        const branches = college[2];
        return minRank >= rank && (branches.includes(branch));
    }).sort((a, b) => a[1] - b[1]);

    let tableHTML = '<table ><thead><tr><th>Min Rank</th><th>College Name</th><th>Branches</th><th>City & State</th></tr></thead><tbody>';

    filteredColleges.forEach(college => {
        tableHTML += '<tr>';
        tableHTML += `<td>${college[1]}</td>`; // Min Rank
        tableHTML += `<td>${college[0]}</td>`; // College Name
        tableHTML += `<td>${college[2].join(', ')}</td>`; // Branches
        tableHTML += `<td>${college[3]}</td>`; // City
        tableHTML += '</tr>';
    });
    tableHTML += '</tbody></table>';

    const collegeOutput = document.getElementById('collegeList');
    collegeOutput.style = `padding: 20px;`;
    collegeOutput.innerHTML = `<h2>Colleges for ${name}</h2><p>Based on your rank <span style=" font-weight: bold;">${rank}</span> and branch <span style=" font-weight: bold;">${branch}</span>, this is the best college recommended:<h3>${filteredColleges[0][0]}</h3>Following are list colleges you can have:</p>${tableHTML}`;

});



// List of Colleges
const engineeringColleges = [
    ["IIT Madras", 1, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Chennai, Tamil Nadu"],
    ["IIT Delhi", 2, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Delhi"],
    ["IIT Bombay", 3, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Mumbai, Maharashtra"],
    ["IIT Kanpur", 4, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Kanpur, Uttar Pradesh"],
    ["IIT Kharagpur", 5, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Kharagpur, West Bengal"],
    ["IIT Roorkee", 6, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Roorkee, Uttarakhand"],
    ["IIT Guwahati", 7, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Guwahati, Assam"],
    ["NIT Tiruchirappalli", 8, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Tiruchirappalli, Tamil Nadu"],
    ["IIT Hyderabad", 9, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Hyderabad, Telangana"],
    ["NIT Surathkal", 10, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Surathkal, Karnataka"],
    ["Jadavpur University", 11, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Kolkata, West Bengal"],
    ["VIT Vellore", 12, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Vellore, Tamil Nadu"],
    ["IIT BHU Varanasi", 13, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Varanasi, Uttar Pradesh"],
    ["ISM Dhanbad", 14, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Dhanbad, Jharkhand"],
    ["NIT Rourkela", 15, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Rourkela, Odisha"],
    ["IIT Indore", 16, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Indore, Madhya Pradesh"],
    ["Anna University", 17, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Chennai, Tamil Nadu"],
    ["ICT Mumbai", 18, ["Chemical", "Biotechnology", "Food Engineering"], "Mumbai, Maharashtra"],
    ["Amrita Coimbatore", 19, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Coimbatore, Tamil Nadu"],
    ["IIT Mandi", 20, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Mandi, Himachal Pradesh"],
    ["NIT Warangal", 21, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Warangal, Telangana"],
    ["IIT Ropar", 22, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Rupnagar, Punjab"],
    ["IIT Gandhinagar", 23, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Gandhinagar, Gujarat"],
    ["SRM Chennai", 24, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Chennai, Tamil Nadu"],
    ["Amity Noida", 25, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Gautam Budh Nagar, Uttar Pradesh"],
    ["Jamia Millia Islamia", 26, ["Civil", "Computer Science", "Electrical", "Mechanical"], "New Delhi"],
    ["SOA Bhubaneswar", 27, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bhubaneswar, Odisha"],
    ["Thapar Patiala", 28, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Patiala, Punjab"],
    ["BITS Pilani", 29, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Pilani, Rajasthan"],
    ["IIT Jodhpur", 30, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Jodhpur, Rajasthan"],
    ["NIT Calicut", 31, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Kozhikode, Kerala"],
    ["VNIT Nagpur", 32, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Nagpur, Maharashtra"],
    ["IIT Patna", 33, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Patna, Bihar"],
    ["NIT Durgapur", 34, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Durgapur, West Bengal"],
    ["DTU Delhi", 35, ["Civil", "Computer Science", "Electrical", "Mechanical"], "New Delhi"],
    ["IIT Bhubaneswar", 36, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bhubaneswar, Odisha"],
    ["AMU Aligarh", 37, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Aligarh, Uttar Pradesh"],
    ["NIT Silchar", 38, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Silchar, Assam"],
    ["Kalasalingam", 39, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Srivilliputtur, Tamil Nadu"],
    ["IIEST Shibpur", 40, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Howrah, West Bengal"],
    ["SASTRA Thanjavur", 41, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Thanjavur, Tamil Nadu"],
    ["KIIT Bhubaneswar", 42, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bhubaneswar, Odisha"],
    ["IIST Thiruvananthapuram", 43, ["Computer Science"], "Thiruvananthapuram, Kerala"],
    ["KL University Vijayawada", 44, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Vaddeswaram, Andhra Pradesh"],
    ["Chandigarh University", 45, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Mohali, Punjab"],
    ["MNIT Jaipur", 46, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Jaipur, Rajasthan"],
    ["MNNIT Allahabad", 47, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Prayagraj, Uttar Pradesh"],
    ["SSN College Chennai", 48, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Kancheepuram, Tamil Nadu"],
    ["VTU Belgaum", 49, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Belgaum, Karnataka"],
    ["NIT Kurukshetra", 50, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Kurukshetra, Haryana"],
    ["LPU Punjab", 51, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Phagwara, Punjab"],
    ["NIT Jalandhar", 52, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Jalandhar, Punjab"],
    ["BIT Mesra", 53, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Ranchi, Jharkhand"],
    ["Sathyabama Chennai", 54, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Chennai, Tamil Nadu"],
    ["MIT Manipal", 55, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Manipal, Karnataka"],
    ["IIT Tirupati", 56, ["Civil", "Computer Science", "Electrical", "Mechanical"], "YERPEDU, Andhra Pradesh"],
    ["PSG Coimbatore", 57, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Coimbatore, Tamil Nadu"],
    ["SVNIT Surat", 58, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Surat, Gujarat"],
    ["Banasthali Rajasthan", 59, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Banasthali, Rajasthan"],
    ["NIT Meghalaya", 60, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Shillong, Meghalaya"],
    ["UPES Dehradun", 61, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Dehradun, Uttarakhand"],
    ["IIIT Hyderabad", 62, ["Computer Science", "Electrical", "Mechanical"], "Hyderabad, Telangana"],
    ["NIT Patna", 63, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Patna, Bihar"],
    ["Graphic Era Dehradun", 64, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Dehradun, Uttarakhand"],
    ["NIT Raipur", 65, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Raipur, Chhattisgarh"],
    ["NIT Srinagar", 66, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Srinagar, Jammu and Kashmir"],
    ["MSRIT Bengaluru", 67, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bengaluru, Karnataka"],
    ["IIT Palakkad", 68, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Kerala"],
    ["IIIT Delhi", 69, ["Computer Science", "Electrical"], "New Delhi"],
    ["MANIT Bhopal", 70, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bhopal, Madhya Pradesh"],
    ["DIAT Pune", 71, ["Computer Science", "Mechanical"], "Pune, Maharashtra"],
    ["COEP Pune", 72, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Pune, Maharashtra"],
    ["SKCET Coimbatore", 73, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Coimbatore, Tamil Nadu"],
    ["GGSIPU Delhi", 74, ["Civil", "Computer Science", "Electrical", "Mechanical"], "New Delhi"],
    ["MUJ Jaipur", 75, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Jaipur, Rajasthan"],
    ["JNTU Hyderabad", 76, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Hyderabad, Telangana"],
    ["AU Visakhapatnam", 77, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Visakhapatnam, Andhra Pradesh"],
    ["ABV IIITM Gwalior", 78, ["Computer Science", "Electrical", "Mechanical"], "Gwalior, Madhya Pradesh"],
    ["NSUT Delhi", 79, ["Civil", "Computer Science", "Electrical", "Mechanical"], "South West Delhi"],
    ["NIT Agartala", 80, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Agartala, Tripura"],
    ["IIIT Bangalore", 81, ["Computer Science", "Electrical", "Mechanical"], "Bengaluru, Karnataka"],
    ["IIITDM Jabalpur", 82, ["Mechanical", "Electrical"], "Jabalpur, Madhya Pradesh"],
    ["BMSCE Bengaluru", 83, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bengaluru, Karnataka"],
    ["Vel Tech Chennai", 84, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Chennai, Tamil Nadu"],
    ["TCE Madurai", 85, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Madurai, Tamil Nadu"],
    ["NIFTEM Thanjavur", 86, ["Food Technology", "Entrepreneurship", "Management"], "Thanjavur, Tamil Nadu"],
    ["PEC Chandigarh", 87, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Chandigarh"],
    ["NIT Goa", 88, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Ponda, Goa"],
    ["RVCE Bengaluru", 89, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bengaluru, Karnataka"],
    ["NIT Jamshedpur", 90, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Jamshedpur, Jharkhand"],
    ["SR University Telangana", 91, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Warangal, Telangana"],
    ["Panjab University", 92, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Chandigarh"],
    ["IIIT Allahabad", 93, ["Computer Science", "Electrical"], "Prayagraj, Uttar Pradesh"],
    ["JIIT Noida", 94, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Noida, Uttar Pradesh"],
    ["REC Chennai", 95, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Chennai, Tamil Nadu"],
    ["Northcap University", 96, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Gurugram, Haryana"],
    ["SIT Tumkur", 97, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Tumkur, Karnataka"],
    ["CVRGU Bhubaneswar", 98, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bhubaneswar, Odisha"],
    ["Vignan Guntur", 99, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Guntur, Andhra Pradesh"],
    ["PESU Bengaluru", 100, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bengaluru, Karnataka"],
    ["CUK Kochi", 101, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Kochi, Kerala"],
    ["NIT Uttarakhand", 102, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Srinagar, Uttarakhand"],
    ["GLA University", 103, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Mathura, Uttar Pradesh"],
    ["Sathyabama University", 104, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Chennai, Tamil Nadu"],
    ["KIET Ghaziabad", 105, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Ghaziabad, Uttar Pradesh"],
    ["IIT Bhilai", 106, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bhilai, Chhattisgarh"],
    ["NIT Delhi", 107, ["Civil", "Computer Science", "Electrical", "Mechanical"], "New Delhi"],
    ["Manipal University", 108, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Jaipur, Rajasthan"],
    ["VIT Vellore", 109, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Vellore, Tamil Nadu"],
    ["GLA University", 110, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Mathura, Uttar Pradesh"],
    ["JSS Academy Noida", 111, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Noida, Uttar Pradesh"],
    ["NIT Goa", 112, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Ponda, Goa"],
    ["BML Munjal University", 113, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Gurugram, Haryana"],
    ["PDM Bahadurgarh", 114, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bahadurgarh, Haryana"],
    ["Dr. DY Patil Pune", 115, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Pune, Maharashtra"],
    ["Chitkara Punjab", 116, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Punjab"],
    ["SRM University", 117, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Chennai, Tamil Nadu"],
    ["Bennett University", 118, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Greater Noida, Uttar Pradesh"],
    ["Sage University", 119, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Indore, Madhya Pradesh"],
    ["KIIT University", 120, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bhubaneswar, Odisha"],
    ["Sharda University", 121, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Greater Noida, Uttar Pradesh"],
    ["Rungta University", 122, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Raipur, Chhattisgarh"],
    ["ICFAI Hyderabad", 123, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Hyderabad, Telangana"],
    ["Adamas University", 124, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Kolkata, West Bengal"],
    ["Hindustan Institute", 125, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Chennai, Tamil Nadu"],
    ["NIIT University", 126, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Neemrana, Rajasthan"],
    ["GD Goenka University", 127, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Gurugram, Haryana"],
    ["Parul University", 128, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Vadodara, Gujarat"],
    ["Jain University", 129, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bengaluru, Karnataka"],
    ["Reva University", 130, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bengaluru, Karnataka"],
    ["Rama University", 131, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Kanpur, Uttar Pradesh"],
    ["Graphic Era Hill", 132, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Dehradun, Uttarakhand"],
    ["Shiv Nadar University", 133, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Greater Noida, Uttar Pradesh"],
    ["Mangalayatan University", 134, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Aligarh, Uttar Pradesh"],
    ["St. Xaviers Mumbai", 135, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Mumbai, Maharashtra"],
    ["GNA University", 136, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Phagwara, Punjab"],
    ["IIIT Pune", 137, ["Computer Science", "Electrical", "Mechanical"], "Pune, Maharashtra"],
    ["ISBM University", 138, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Chhattisgarh"],
    ["Mody University", 139, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Lakshmangarh, Rajasthan"],
    ["Manipal University Jaipur", 140, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Jaipur, Rajasthan"],
    ["CMR University", 141, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bengaluru, Karnataka"],
    ["IMS Ghaziabad", 142, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Ghaziabad, Uttar Pradesh"],
    ["Galgotias University", 143, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Greater Noida, Uttar Pradesh"],
    ["Invertis University", 144, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bareilly, Uttar Pradesh"],
    ["BBD University", 145, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Lucknow, Uttar Pradesh"],
    ["GLA University", 146, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Mathura, Uttar Pradesh"],
    ["Dayananda Sagar University", 147, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bengaluru, Karnataka"],
    ["Swami Vivekanand University", 148, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Sagar, Madhya Pradesh"],
    ["Kaziranga University", 149, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Jorhat, Assam"],
    ["REVA University", 150, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bengaluru, Karnataka"],
    ["Chandigarh University", 151, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Mohali, Punjab"],
    ["IIT Dharwad", 152, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Dharwad, Karnataka"],
    ["NIT Arunachal Pradesh", 153, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Yupia, Arunachal Pradesh"],
    ["NIT Puducherry", 154, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Karaikal, Puducherry"],
    ["NIT Mizoram", 155, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Aizawl, Mizoram"],
    ["IIT Jammu", 156, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Jammu, Jammu and Kashmir"],
    ["IIMT University", 157, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Meerut, Uttar Pradesh"],
    ["AIIMS Bhopal", 158, ["Biomedical", "Biotechnology"], "Bhopal, Madhya Pradesh"],
    ["SRM University Sonepat", 159, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Sonepat, Haryana"],
    ["NIT Sikkim", 160, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Ravangla, Sikkim"],
    ["NIT Uttarakhand", 161, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Srinagar, Uttarakhand"],
    ["NIT Delhi", 162, ["Civil", "Computer Science", "Electrical", "Mechanical"], "New Delhi"],
    ["IIT Bhilai", 163, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bhilai, Chhattisgarh"],
    ["Manipal University", 164, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Jaipur, Rajasthan"],
    ["VIT Vellore", 165, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Vellore, Tamil Nadu"],
    ["GLA University", 166, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Mathura, Uttar Pradesh"],
    ["JSS Academy Noida", 167, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Noida, Uttar Pradesh"],
    ["NIT Goa", 168, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Ponda, Goa"],
    ["BML Munjal University", 169, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Gurugram, Haryana"],
    ["MUJ Jaipur", 170, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Jaipur, Rajasthan"],
    ["JNTU Hyderabad", 171, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Hyderabad, Telangana"],
    ["AU Visakhapatnam", 172, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Visakhapatnam, Andhra Pradesh"],
    ["ABV IIITM Gwalior", 173, ["Computer Science", "Electrical", "Mechanical"], "Gwalior, Madhya Pradesh"],
    ["NSUT Delhi", 174, ["Civil", "Computer Science", "Electrical", "Mechanical"], "New Delhi"],
    ["NIT Agartala", 175, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Agartala, Tripura"],
    ["IIIT Bangalore", 176, ["Computer Science", "Electrical", "Mechanical"], "Bengaluru, Karnataka"],
    ["IIITDM Jabalpur", 177, ["Mechanical", "Design", "Manufacturing"], "Jabalpur, Madhya Pradesh"],
    ["BMSCE Bengaluru", 178, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bengaluru, Karnataka"],
    ["Vel Tech Chennai", 179, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Chennai, Tamil Nadu"],
    ["Thiagarajar Madurai", 180, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Madurai, Tamil Nadu"],
    ["NIFTEM Thanjavur", 181, ["Food Technology", "Entrepreneurship", "Management"], "Thanjavur, Tamil Nadu"],
    ["PEC Chandigarh", 182, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Chandigarh"],
    ["NIT Goa", 183, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Ponda, Goa"],
    ["RVCE Bengaluru", 184, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bengaluru, Karnataka"],
    ["NIT Jamshedpur", 185, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Jamshedpur, Jharkhand"],
    ["SR University Telangana", 186, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Warangal, Telangana"],
    ["Panjab University", 187, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Chandigarh"],
    ["IIIT Allahabad", 188, ["Computer Science", "Electrical"], "Prayagraj, Uttar Pradesh"],
    ["JIIT Noida", 189, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Noida, Uttar Pradesh"],
    ["REC Chennai", 190, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Chennai, Tamil Nadu"],
    ["Northcap University", 191, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Gurugram, Haryana"],
    ["SIT Tumkur", 192, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Tumkur, Karnataka"],
    ["CVRGU Bhubaneswar", 193, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bhubaneswar, Odisha"],
    ["Vignan Guntur", 194, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Guntur, Andhra Pradesh"],
    ["PESU Bengaluru", 195, ["Civil", "Computer Science", "Electrical", "Mechanical"], "Bengaluru, Karnataka"]
];

