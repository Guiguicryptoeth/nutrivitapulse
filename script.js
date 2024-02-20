let currentCountry = '';
let currentGender = '';

function selectCountry(country) {
    currentCountry = country;
    document.getElementById('button-container').style.display = 'none';
    document.getElementById('genderSelection').style.display = 'flex';
}

function selectGender(gender) {
    currentGender = gender;
    document.getElementById('genderSelection').style.display = 'none';
    const productsContainer = document.getElementById('productSelection');
    productsContainer.innerHTML = ''; // Clear previous buttons if any
    const products = getProducts(currentCountry, currentGender);
    products.forEach(product => {
        const productButton = document.createElement('button');
        productButton.className = `button product-button ${product.name.toLowerCase().replace(/\s+/g, '-')}-button`; // Apply a generic class for product buttons

        const imgElement = document.createElement('img'); // Create an <img> element
        imgElement.src = product.img; // Ensure this is a correct path or URL
        imgElement.alt = product.name; // Use the product name as alt text
        imgElement.className = 'product-img'; // Assign a class for styling
        productButton.appendChild(imgElement); // Append the image to the button

        productButton.appendChild(document.createTextNode(' ' + product.name)); // Append the product name as text, adding space for separation

        productButton.onclick = function() { window.location.href = product.url; }; // Set the click handler
        productsContainer.appendChild(productButton); // Append the button to the container
    });
    productsContainer.style.display = 'flex'; // Make the container visible
}

function goBackFromGender() {
    document.getElementById('genderSelection').style.display = 'none';
    document.getElementById('button-container').style.display = 'flex';
}

function goBackFromProducts() {
    document.getElementById('productSelection').style.display = 'none';
    document.getElementById('genderSelection').style.display = 'flex';
}

function getProducts(country, gender) {
    const productMappings = {
        'greece': {
                    'male': [
                        { 
                            name: 'Alphacream', 
                            url: 'https://sscodtrk.com/visit/U3VoaA/U0Fwbw?p=U3VrPQ&source=tiktok&aff_sub=greece&aff_sub2=male', 
                            img: 'images/alphacreamLogo.png' 
                        },
                        { 
                            name: 'Clinical beauty', 
                            url: 'https://sscodtrk.com/track/U3VtRg/U0Fwbw?source=tiktok&aff_sub=greece&aff_sub2=male',
                            img: 'images/clinicalbeautyLogo.png'
                         },
                         {
                            name: 'Herpigo', 
                            url: 'https://sscodtrk.com/track/U0FrZA/U0Fwbw?source=tiktok&aff_sub=greece&aff_sub2=male',
                            img: 'images/herpigoLogo.png'
                         },
                         {
                            name: 'Thunder of Zeus', 
                            url: 'https://sscodtrk.com/track/U3V2Vw/U0Fwbw?source=tiktok&aff_sub=greece&aff_sub2=male',
                            img: 'images/thunderofzeusLogo.png'
                         }
                    ],
                    'female': [
                        { 
                            name: 'Clinical Beauty', 
                            url: 'https://sscodtrk.com/track/U3VtRw/U0Fwbw?source=tiktok&aff_sub=greece&aff_sub2=woman',
                            img: 'images/clinicalbeautyLogo.png'
                        },
                        { 
                            name: 'Optiloss', 
                            url: 'https://sscodtrk.com/visit/U3V6ag/U0Fwbw?p=UlE9PQ&source=tiktok&aff_sub=greece&aff_sub2=woman',
                            img: 'images/optilossLogo.png'
                        },
                        { 
                            name: 'Alphacream', 
                            url: 'https://sscodtrk.com/visit/U0FTQw/U0Fwbw?p=U3VrPQ&source=tiktok&aff_sub=greece&aff_sub2=woman',
                            img: 'images/alphacreamLogo.png'
                        },
                        {
                            name: 'Herpigo', 
                            url: 'https://sscodtrk.com/track/U0FrZQ/U0Fwbw?source=tiktok&aff_sub=greece&aff_sub2=woman',
                            img: 'images/herpigoLogo.png'
                        }
                    ]
                },
                'cyprus': {
                    'male': [
                        { 
                            name: 'Alphacream', 
                            url: 'https://sscodtrk.com/visit/U0FVZQ/U0Fwbw?p=U0FRPQ&source=tiktok&aff_sub=cyprus&aff_sub2=male',
                            img: 'images/alphacreamLogo.png'
                        },
                        { 
                            name: 'Clinical beauty', 
                            url: 'https://sscodtrk.com/track/U3VtQw/U0Fwbw?source=tiktok&aff_sub=cyprus&aff_sub2=male',
                            img: 'images/clinicalbeautyLogo.png'
                        },
                        {
                            name: 'Herpigo', 
                            url: 'https://sscodtrk.com/track/U3Urdw/U0Fwbw?source=tiktok&aff_sub=cyprus&aff_sub2=male',
                            img: 'images/herpigoLogo.png'
                        },
                        {
                            name: 'Thunder of Zeus', 
                            url: 'https://sscodtrk.com/track/U3VwQg/U0Fwbw?source=tiktok&aff_sub=cyprus&aff_sub2=male',
                            img: 'images/thunderofzeusLogo.png'
                        }
                    ],
                    'female': [
                        { 
                            name: 'Clinical Beauty', 
                            url: 'https://sscodtrk.com/track/U3VwQw/U0Fwbw?source=tiktok&aff_sub=cyprus&aff_sub2=woman',
                            img: 'images/clinicalbeautyLogo.png'
                        },
                        { 
                            name: 'Optiloss', 
                            url: 'https://sscodtrk.com/visit/U0Fwag/U0Fwbw?p=U0FvPQ&source=tiktok&aff_sub=cyprus&aff_sub2=woman',
                            img: 'images/optilossLogo.png'
                        },
                        { 
                            name: 'Alphacream', 
                            url: 'https://sscodtrk.com/visit/U3V6cg/U0Fwbw?p=U0FRPQ&source=tiktok&aff_sub=cyprus&aff_sub2=woman',
                            img: 'images/alphacreamLogo.png'
                        },
                        {
                            name: 'Herpigo', 
                            url: 'https://sscodtrk.com/track/U0E3Rw/U0Fwbw?source=tiktok&aff_sub=cyprus&aff_sub2=woman',
                            img: 'images/herpigoLogo.png.png'
                        }
                    ]
                }
            };
    return productMappings[country][gender];
}