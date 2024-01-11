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
    {/* <input type="radio" value="HTML"></input> */ }
    let tableHTML = '<table ><thead><tr><th>Selected</th><th>Min Rank</th><th>College Name</th><th>Branches</th><th>City & State</th><th>Seates avaliable(out of 1000)</th></tr></thead><tbody>';
    let i = 0;
    filteredColleges.forEach(college => {
        tableHTML += '<tr>';
        tableHTML += `<td><input type="checkbox" name="choice" class="limitCheckbox" value="${i}"></input></td>`; // Selected
        tableHTML += `<td>${college[1]}</td>`; // Min Rank
        tableHTML += `<td>${college[0]}</td>`; // College Name
        tableHTML += `<td>${college[2].join(', ')}</td>`; // Branches
        tableHTML += `<td>${college[3]}</td>`; // City
        tableHTML += `<td>${college[4]}</td>`; // City
        tableHTML += '</tr>';
        i++;
    });
    tableHTML += '</tbody></table>';

    const collegeOutput = document.getElementById('collegeList');
    collegeOutput.style = `padding: 20px;`;
    collegeOutput.innerHTML = `<h2>Colleges for ${name}</h2><p>Based on your rank <span style=" font-weight: bold;">${rank}</span> and branch <span style=" font-weight: bold;">${branch}</span>, this is the best college recommended:<h3>${filteredColleges[0][0]}</h3>Following are list colleges you can have. You can select only 3 checkboxes at a time:</p>
    ${tableHTML}<button id="SaveCollage">Save</button>`;

    //only 3 checkboxes can be selected at a time
    const checkboxes = document.querySelectorAll('.limitCheckbox');
    let checkedCount = 0;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                checkedCount++;
                if (checkedCount > 3) {
                    this.checked = false;
                    checkedCount--;
                }
            } else {
                checkedCount--;
            }

            checkboxes.forEach(cb => {
                if (!cb.checked && checkedCount >= 3) {
                    cb.disabled = true;
                } else {
                    cb.disabled = false;
                }
            });
        });
    });
    document.getElementById('SaveCollage').addEventListener('click', function () {
        if (checkedCount != 3) {
            alert('Warning!! Select at least 3 colleges to proceed.');
            return;
        }
        let SelectedcollegeList = [];
        let CollegeAllocated;
        let maxSeatAvaliable = 0;
        checkboxes.forEach(checkbox => {
            if (!checkbox.disabled) {
                SelectedcollegeList.push(filteredColleges[checkbox.value]);
                if (filteredColleges[checkbox.value][4] > maxSeatAvaliable) {
                    CollegeAllocated = filteredColleges[checkbox.value][0];
                    maxSeatAvaliable = filteredColleges[checkbox.value][4];
                }
            }
        })
        localStorage.clear();
        localStorage.setItem("CollegeAllocated",CollegeAllocated);
        location.href = "/result.html";
    });
});
// List of Colleges
const engineeringColleges = [
    [
        "IIT Madras",
        1,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Chennai, Tamil Nadu",
        248
    ],
    [
        "IIT Delhi",
        2,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Delhi",
        290
    ],
    [
        "IIT Bombay",
        3,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Mumbai, Maharashtra",
        359
    ],
    [
        "IIT Kanpur",
        4,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Kanpur, Uttar Pradesh",
        191
    ],
    [
        "IIT Kharagpur",
        5,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Kharagpur, West Bengal",
        302
    ],
    [
        "IIT Roorkee",
        6,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Roorkee, Uttarakhand",
        151
    ],
    [
        "IIT Guwahati",
        7,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Guwahati, Assam",
        592
    ],
    [
        "NIT Tiruchirappalli",
        8,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Tiruchirappalli, Tamil Nadu",
        526
    ],
    [
        "IIT Hyderabad",
        9,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Hyderabad, Telangana",
        495
    ],
    [
        "NIT Surathkal",
        10,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Surathkal, Karnataka",
        882
    ],
    [
        "Jadavpur University",
        11,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Kolkata, West Bengal",
        903
    ],
    [
        "VIT Vellore",
        12,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Vellore, Tamil Nadu",
        721
    ],
    [
        "IIT BHU Varanasi",
        13,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Varanasi, Uttar Pradesh",
        120
    ],
    [
        "ISM Dhanbad",
        14,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Dhanbad, Jharkhand",
        63
    ],
    [
        "NIT Rourkela",
        15,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Rourkela, Odisha",
        103
    ],
    [
        "IIT Indore",
        16,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Indore, Madhya Pradesh",
        979
    ],
    [
        "Anna University",
        17,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Chennai, Tamil Nadu",
        762
    ],
    [
        "ICT Mumbai",
        18,
        [
            "Chemical",
            "Biotechnology",
            "Food Engineering"
        ],
        "Mumbai, Maharashtra",
        200
    ],
    [
        "Amrita Coimbatore",
        19,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Coimbatore, Tamil Nadu",
        782
    ],
    [
        "IIT Mandi",
        20,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Mandi, Himachal Pradesh",
        542
    ],
    [
        "NIT Warangal",
        21,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Warangal, Telangana",
        267
    ],
    [
        "IIT Ropar",
        22,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Rupnagar, Punjab",
        371
    ],
    [
        "IIT Gandhinagar",
        23,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Gandhinagar, Gujarat",
        442
    ],
    [
        "SRM Chennai",
        24,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Chennai, Tamil Nadu",
        722
    ],
    [
        "Amity Noida",
        25,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Gautam Budh Nagar, Uttar Pradesh",
        819
    ],
    [
        "Jamia Millia Islamia",
        26,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "New Delhi",
        462
    ],
    [
        "SOA Bhubaneswar",
        27,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bhubaneswar, Odisha",
        242
    ],
    [
        "Thapar Patiala",
        28,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Patiala, Punjab",
        436
    ],
    [
        "BITS Pilani",
        29,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Pilani, Rajasthan",
        674
    ],
    [
        "IIT Jodhpur",
        30,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Jodhpur, Rajasthan",
        641
    ],
    [
        "NIT Calicut",
        31,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Kozhikode, Kerala",
        390
    ],
    [
        "VNIT Nagpur",
        32,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Nagpur, Maharashtra",
        450
    ],
    [
        "IIT Patna",
        33,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Patna, Bihar",
        263
    ],
    [
        "NIT Durgapur",
        34,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Durgapur, West Bengal",
        196
    ],
    [
        "DTU Delhi",
        35,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "New Delhi",
        810
    ],
    [
        "IIT Bhubaneswar",
        36,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bhubaneswar, Odisha",
        867
    ],
    [
        "AMU Aligarh",
        37,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Aligarh, Uttar Pradesh",
        915
    ],
    [
        "NIT Silchar",
        38,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Silchar, Assam",
        57
    ],
    [
        "Kalasalingam",
        39,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Srivilliputtur, Tamil Nadu",
        515
    ],
    [
        "IIEST Shibpur",
        40,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Howrah, West Bengal",
        912
    ],
    [
        "SASTRA Thanjavur",
        41,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Thanjavur, Tamil Nadu",
        55
    ],
    [
        "KIIT Bhubaneswar",
        42,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bhubaneswar, Odisha",
        757
    ],
    [
        "IIST Thiruvananthapuram",
        43,
        [
            "Computer Science"
        ],
        "Thiruvananthapuram, Kerala",
        363
    ],
    [
        "KL University Vijayawada",
        44,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Vaddeswaram, Andhra Pradesh",
        19
    ],
    [
        "Chandigarh University",
        45,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Mohali, Punjab",
        232
    ],
    [
        "MNIT Jaipur",
        46,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Jaipur, Rajasthan",
        590
    ],
    [
        "MNNIT Allahabad",
        47,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Prayagraj, Uttar Pradesh",
        359
    ],
    [
        "SSN College Chennai",
        48,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Kancheepuram, Tamil Nadu",
        59
    ],
    [
        "VTU Belgaum",
        49,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Belgaum, Karnataka",
        137
    ],
    [
        "NIT Kurukshetra",
        50,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Kurukshetra, Haryana",
        182
    ],
    [
        "LPU Punjab",
        51,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Phagwara, Punjab",
        100
    ],
    [
        "NIT Jalandhar",
        52,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Jalandhar, Punjab",
        92
    ],
    [
        "BIT Mesra",
        53,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Ranchi, Jharkhand",
        628
    ],
    [
        "Sathyabama Chennai",
        54,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Chennai, Tamil Nadu",
        601
    ],
    [
        "MIT Manipal",
        55,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Manipal, Karnataka",
        47
    ],
    [
        "IIT Tirupati",
        56,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "YERPEDU, Andhra Pradesh",
        847
    ],
    [
        "PSG Coimbatore",
        57,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Coimbatore, Tamil Nadu",
        102
    ],
    [
        "SVNIT Surat",
        58,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Surat, Gujarat",
        93
    ],
    [
        "Banasthali Rajasthan",
        59,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Banasthali, Rajasthan",
        490
    ],
    [
        "NIT Meghalaya",
        60,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Shillong, Meghalaya",
        180
    ],
    [
        "UPES Dehradun",
        61,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Dehradun, Uttarakhand",
        416
    ],
    [
        "IIIT Hyderabad",
        62,
        [
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Hyderabad, Telangana",
        357
    ],
    [
        "NIT Patna",
        63,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Patna, Bihar",
        716
    ],
    [
        "Graphic Era Dehradun",
        64,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Dehradun, Uttarakhand",
        455
    ],
    [
        "NIT Raipur",
        65,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Raipur, Chhattisgarh",
        705
    ],
    [
        "NIT Srinagar",
        66,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Srinagar, Jammu and Kashmir",
        634
    ],
    [
        "MSRIT Bengaluru",
        67,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bengaluru, Karnataka",
        516
    ],
    [
        "IIT Palakkad",
        68,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Kerala",
        661
    ],
    [
        "IIIT Delhi",
        69,
        [
            "Computer Science",
            "Electrical"
        ],
        "New Delhi",
        946
    ],
    [
        "MANIT Bhopal",
        70,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bhopal, Madhya Pradesh",
        121
    ],
    [
        "DIAT Pune",
        71,
        [
            "Computer Science",
            "Mechanical"
        ],
        "Pune, Maharashtra",
        744
    ],
    [
        "COEP Pune",
        72,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Pune, Maharashtra",
        570
    ],
    [
        "SKCET Coimbatore",
        73,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Coimbatore, Tamil Nadu",
        325
    ],
    [
        "GGSIPU Delhi",
        74,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "New Delhi",
        840
    ],
    [
        "MUJ Jaipur",
        75,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Jaipur, Rajasthan",
        637
    ],
    [
        "JNTU Hyderabad",
        76,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Hyderabad, Telangana",
        775
    ],
    [
        "AU Visakhapatnam",
        77,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Visakhapatnam, Andhra Pradesh",
        629
    ],
    [
        "ABV IIITM Gwalior",
        78,
        [
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Gwalior, Madhya Pradesh",
        733
    ],
    [
        "NSUT Delhi",
        79,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "South West Delhi",
        379
    ],
    [
        "NIT Agartala",
        80,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Agartala, Tripura",
        539
    ],
    [
        "IIIT Bangalore",
        81,
        [
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bengaluru, Karnataka",
        133
    ],
    [
        "IIITDM Jabalpur",
        82,
        [
            "Mechanical",
            "Electrical"
        ],
        "Jabalpur, Madhya Pradesh",
        784
    ],
    [
        "BMSCE Bengaluru",
        83,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bengaluru, Karnataka",
        151
    ],
    [
        "Vel Tech Chennai",
        84,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Chennai, Tamil Nadu",
        987
    ],
    [
        "TCE Madurai",
        85,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Madurai, Tamil Nadu",
        712
    ],
    [
        "NIFTEM Thanjavur",
        86,
        [
            "Food Technology",
            "Entrepreneurship",
            "Management"
        ],
        "Thanjavur, Tamil Nadu",
        608
    ],
    [
        "PEC Chandigarh",
        87,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Chandigarh",
        10
    ],
    [
        "NIT Goa",
        88,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Ponda, Goa",
        264
    ],
    [
        "RVCE Bengaluru",
        89,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bengaluru, Karnataka",
        676
    ],
    [
        "NIT Jamshedpur",
        90,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Jamshedpur, Jharkhand",
        275
    ],
    [
        "SR University Telangana",
        91,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Warangal, Telangana",
        660
    ],
    [
        "Panjab University",
        92,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Chandigarh",
        884
    ],
    [
        "IIIT Allahabad",
        93,
        [
            "Computer Science",
            "Electrical"
        ],
        "Prayagraj, Uttar Pradesh",
        983
    ],
    [
        "JIIT Noida",
        94,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Noida, Uttar Pradesh",
        161
    ],
    [
        "REC Chennai",
        95,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Chennai, Tamil Nadu",
        669
    ],
    [
        "Northcap University",
        96,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Gurugram, Haryana",
        511
    ],
    [
        "SIT Tumkur",
        97,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Tumkur, Karnataka",
        69
    ],
    [
        "CVRGU Bhubaneswar",
        98,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bhubaneswar, Odisha",
        608
    ],
    [
        "Vignan Guntur",
        99,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Guntur, Andhra Pradesh",
        758
    ],
    [
        "PESU Bengaluru",
        100,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bengaluru, Karnataka",
        469
    ],
    [
        "CUK Kochi",
        101,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Kochi, Kerala",
        860
    ],
    [
        "NIT Uttarakhand",
        102,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Srinagar, Uttarakhand",
        357
    ],
    [
        "GLA University",
        103,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Mathura, Uttar Pradesh",
        877
    ],
    [
        "Sathyabama University",
        104,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Chennai, Tamil Nadu",
        922
    ],
    [
        "KIET Ghaziabad",
        105,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Ghaziabad, Uttar Pradesh",
        764
    ],
    [
        "IIT Bhilai",
        106,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bhilai, Chhattisgarh",
        427
    ],
    [
        "NIT Delhi",
        107,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "New Delhi",
        812
    ],
    [
        "Manipal University",
        108,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Jaipur, Rajasthan",
        666
    ],
    [
        "VIT Vellore",
        109,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Vellore, Tamil Nadu",
        853
    ],
    [
        "GLA University",
        110,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Mathura, Uttar Pradesh",
        173
    ],
    [
        "JSS Academy Noida",
        111,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Noida, Uttar Pradesh",
        131
    ],
    [
        "NIT Goa",
        112,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Ponda, Goa",
        789
    ],
    [
        "BML Munjal University",
        113,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Gurugram, Haryana",
        845
    ],
    [
        "PDM Bahadurgarh",
        114,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bahadurgarh, Haryana",
        584
    ],
    [
        "Dr. DY Patil Pune",
        115,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Pune, Maharashtra",
        335
    ],
    [
        "Chitkara Punjab",
        116,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Punjab",
        617
    ],
    [
        "SRM University",
        117,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Chennai, Tamil Nadu",
        906
    ],
    [
        "Bennett University",
        118,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Greater Noida, Uttar Pradesh",
        320
    ],
    [
        "Sage University",
        119,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Indore, Madhya Pradesh",
        937
    ],
    [
        "KIIT University",
        120,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bhubaneswar, Odisha",
        616
    ],
    [
        "Sharda University",
        121,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Greater Noida, Uttar Pradesh",
        710
    ],
    [
        "Rungta University",
        122,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Raipur, Chhattisgarh",
        469
    ],
    [
        "ICFAI Hyderabad",
        123,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Hyderabad, Telangana",
        929
    ],
    [
        "Adamas University",
        124,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Kolkata, West Bengal",
        613
    ],
    [
        "Hindustan Institute",
        125,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Chennai, Tamil Nadu",
        808
    ],
    [
        "NIIT University",
        126,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Neemrana, Rajasthan",
        236
    ],
    [
        "GD Goenka University",
        127,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Gurugram, Haryana",
        352
    ],
    [
        "Parul University",
        128,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Vadodara, Gujarat",
        780
    ],
    [
        "Jain University",
        129,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bengaluru, Karnataka",
        356
    ],
    [
        "Reva University",
        130,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bengaluru, Karnataka",
        875
    ],
    [
        "Rama University",
        131,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Kanpur, Uttar Pradesh",
        95
    ],
    [
        "Graphic Era Hill",
        132,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Dehradun, Uttarakhand",
        896
    ],
    [
        "Shiv Nadar University",
        133,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Greater Noida, Uttar Pradesh",
        236
    ],
    [
        "Mangalayatan University",
        134,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Aligarh, Uttar Pradesh",
        621
    ],
    [
        "St. Xaviers Mumbai",
        135,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Mumbai, Maharashtra",
        491
    ],
    [
        "GNA University",
        136,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Phagwara, Punjab",
        965
    ],
    [
        "IIIT Pune",
        137,
        [
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Pune, Maharashtra",
        698
    ],
    [
        "ISBM University",
        138,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Chhattisgarh",
        830
    ],
    [
        "Mody University",
        139,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Lakshmangarh, Rajasthan",
        600
    ],
    [
        "Manipal University Jaipur",
        140,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Jaipur, Rajasthan",
        953
    ],
    [
        "CMR University",
        141,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bengaluru, Karnataka",
        90
    ],
    [
        "IMS Ghaziabad",
        142,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Ghaziabad, Uttar Pradesh",
        892
    ],
    [
        "Galgotias University",
        143,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Greater Noida, Uttar Pradesh",
        171
    ],
    [
        "Invertis University",
        144,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bareilly, Uttar Pradesh",
        896
    ],
    [
        "BBD University",
        145,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Lucknow, Uttar Pradesh",
        105
    ],
    [
        "GLA University",
        146,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Mathura, Uttar Pradesh",
        722
    ],
    [
        "Dayananda Sagar University",
        147,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bengaluru, Karnataka",
        834
    ],
    [
        "Swami Vivekanand University",
        148,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Sagar, Madhya Pradesh",
        882
    ],
    [
        "Kaziranga University",
        149,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Jorhat, Assam",
        31
    ],
    [
        "REVA University",
        150,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bengaluru, Karnataka",
        428
    ],
    [
        "Chandigarh University",
        151,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Mohali, Punjab",
        811
    ],
    [
        "IIT Dharwad",
        152,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Dharwad, Karnataka",
        10
    ],
    [
        "NIT Arunachal Pradesh",
        153,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Yupia, Arunachal Pradesh",
        37
    ],
    [
        "NIT Puducherry",
        154,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Karaikal, Puducherry",
        632
    ],
    [
        "NIT Mizoram",
        155,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Aizawl, Mizoram",
        460
    ],
    [
        "IIT Jammu",
        156,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Jammu, Jammu and Kashmir",
        985
    ],
    [
        "IIMT University",
        157,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Meerut, Uttar Pradesh",
        586
    ],
    [
        "AIIMS Bhopal",
        158,
        [
            "Biomedical",
            "Biotechnology"
        ],
        "Bhopal, Madhya Pradesh",
        983
    ],
    [
        "SRM University Sonepat",
        159,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Sonepat, Haryana",
        349
    ],
    [
        "NIT Sikkim",
        160,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Ravangla, Sikkim",
        658
    ],
    [
        "NIT Uttarakhand",
        161,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Srinagar, Uttarakhand",
        48
    ],
    [
        "NIT Delhi",
        162,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "New Delhi",
        276
    ],
    [
        "IIT Bhilai",
        163,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bhilai, Chhattisgarh",
        218
    ],
    [
        "Manipal University",
        164,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Jaipur, Rajasthan",
        136
    ],
    [
        "VIT Vellore",
        165,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Vellore, Tamil Nadu",
        142
    ],
    [
        "GLA University",
        166,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Mathura, Uttar Pradesh",
        219
    ],
    [
        "JSS Academy Noida",
        167,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Noida, Uttar Pradesh",
        1000
    ],
    [
        "NIT Goa",
        168,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Ponda, Goa",
        255
    ],
    [
        "BML Munjal University",
        169,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Gurugram, Haryana",
        188
    ],
    [
        "MUJ Jaipur",
        170,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Jaipur, Rajasthan",
        968
    ],
    [
        "JNTU Hyderabad",
        171,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Hyderabad, Telangana",
        956
    ],
    [
        "AU Visakhapatnam",
        172,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Visakhapatnam, Andhra Pradesh",
        408
    ],
    [
        "ABV IIITM Gwalior",
        173,
        [
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Gwalior, Madhya Pradesh",
        168
    ],
    [
        "NSUT Delhi",
        174,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "New Delhi",
        472
    ],
    [
        "NIT Agartala",
        175,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Agartala, Tripura",
        129
    ],
    [
        "IIIT Bangalore",
        176,
        [
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bengaluru, Karnataka",
        139
    ],
    [
        "IIITDM Jabalpur",
        177,
        [
            "Mechanical",
            "Design",
            "Manufacturing"
        ],
        "Jabalpur, Madhya Pradesh",
        233
    ],
    [
        "BMSCE Bengaluru",
        178,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bengaluru, Karnataka",
        160
    ],
    [
        "Vel Tech Chennai",
        179,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Chennai, Tamil Nadu",
        806
    ],
    [
        "Thiagarajar Madurai",
        180,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Madurai, Tamil Nadu",
        632
    ],
    [
        "NIFTEM Thanjavur",
        181,
        [
            "Food Technology",
            "Entrepreneurship",
            "Management"
        ],
        "Thanjavur, Tamil Nadu",
        195
    ],
    [
        "PEC Chandigarh",
        182,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Chandigarh",
        800
    ],
    [
        "NIT Goa",
        183,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Ponda, Goa",
        753
    ],
    [
        "RVCE Bengaluru",
        184,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bengaluru, Karnataka",
        572
    ],
    [
        "NIT Jamshedpur",
        185,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Jamshedpur, Jharkhand",
        443
    ],
    [
        "SR University Telangana",
        186,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Warangal, Telangana",
        361
    ],
    [
        "Panjab University",
        187,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Chandigarh",
        496
    ],
    [
        "IIIT Allahabad",
        188,
        [
            "Computer Science",
            "Electrical"
        ],
        "Prayagraj, Uttar Pradesh",
        802
    ],
    [
        "JIIT Noida",
        189,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Noida, Uttar Pradesh",
        353
    ],
    [
        "REC Chennai",
        190,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Chennai, Tamil Nadu",
        633
    ],
    [
        "Northcap University",
        191,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Gurugram, Haryana",
        428
    ],
    [
        "SIT Tumkur",
        192,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Tumkur, Karnataka",
        292
    ],
    [
        "CVRGU Bhubaneswar",
        193,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bhubaneswar, Odisha",
        435
    ],
    [
        "Vignan Guntur",
        194,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Guntur, Andhra Pradesh",
        982
    ],
    [
        "PESU Bengaluru",
        195,
        [
            "Civil",
            "Computer Science",
            "Electrical",
            "Mechanical"
        ],
        "Bengaluru, Karnataka",
        141
    ]
];

