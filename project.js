// Validate Application Form
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var insuranceType = document.getElementById('insurance-type').value;

    if (name === "" || email === "" || phone === "") {
        document.getElementById('form-result').textContent = "Please fill out all fields.";
        return;
    }

    document.getElementById('form-result').textContent = `Thank you, ${name}! Your application for ${insuranceType} insurance has been submitted.`;
}

// Submit Crop Loss Report
function submitCropLoss() {
    var farmerName = document.getElementById('farmer-name').value;
    var cropType = document.getElementById('crop-type').value;
    var cause = document.getElementById('cause').value;
    var date = document.getElementById('date').value;
    var area = document.getElementById('area').value;

    if (farmerName === "" || cause === "" || date === "" || area === "") {
        document.getElementById('crop-loss-result').textContent = "Please fill out all fields.";
        return;
    }

    document.getElementById('crop-loss-result').textContent = `Thank you, ${farmerName}. Your crop loss for ${cropType} due to ${cause} has been reported.`;

    // Dynamically show the image of crop loss
    var reportImage = document.querySelector('.report-image');
    reportImage.style.display = 'block';
}


document.getElementById('reveal-contact-btn').addEventListener('click', function() {
    const phone = document.getElementById('phone-number');
    const email = document.getElementById('email-address');
    const address = document.getElementById('address');
    
    phone.textContent = '+91-1234567890';
    email.textContent = 'contact@newexample.com';
    address.textContent = '456, New Road, Mumbai, India';
});

document.getElementById('submit-btn').addEventListener('click', function() {
    const selectedOptions = [];

    // Get all selected natural calamities
    document.querySelectorAll('input[name="calamity"]:checked').forEach((el) => {
        selectedOptions.push(el.value);
    });

    // Get all selected pests and diseases coverage
    document.querySelectorAll('input[name="pests"]:checked').forEach((el) => {
        selectedOptions.push(el.value);
    });

    // Get all selected yield and weather protection
    document.querySelectorAll('input[name="yield"]:checked').forEach((el) => {
        selectedOptions.push(el.value);
    });
    document.querySelectorAll('input[name="weather"]:checked').forEach((el) => {
        selectedOptions.push(el.value);
    });

    // Get price protection
    document.querySelectorAll('input[name="market"]:checked').forEach((el) => {
        selectedOptions.push(el.value);
    });

    // Display the selected options in the summary
    const summaryList = document.getElementById('selected-options');
    summaryList.innerHTML = ''; // Clear previous selection
    selectedOptions.forEach((option) => {
        const li = document.createElement('li');
        li.textContent = option;
        summaryList.appendChild(li);
    });
});
