// URL variables for the APIs


document.getElementById('nameForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    console.log(name);
    const agifyUrl = `https://api.agify.io?name=${name}`;
    const genderizeUrl = `https://api.genderize.io?name=${name}`;
    const nationalizeUrl = `https://api.nationalize.io?name=${name}`;

    // Students will write async code here to fetch data from the APIs
    // and update the DOM with the results.
    
    // They should use Promise.all to handle the multiple fetch requests.
    
    // Error handling should also be implemented.

    const ageHtml = document.getElementById("ageResult");
    const genderHtml = document.getElementById("genderResult");
    const nationityHtml = document.getElementById("nationalityResult");

    const getAge = async () => {
        const response = await fetch(agifyUrl);
        if (!response.ok) {
                throw new Error("Network response was not ok for agify");
        }
        console.log(response);
        return response.json();
    };

    const getGender = async () => {
        return fetch(genderizeUrl).then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok for genderize");
            }
            return response.json();
        })
    };

    const getNationality = async () => {
        return fetch(nationalizeUrl).then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok for nationalize");
            }
            return response.json();
        })
    };

    let fetchPromises = [];
    let age = "";
    let gender = "";
    let nationality = ""; 

    fetchPromises.push(
        getAge().then((ageData) => {
        age = `Age: ${ageData.age}`;
        })
    );
    fetchPromises.push(
        getGender().then((genderData) => {
        gender = `Gender: ${genderData.gender}`;
    })
    );
    fetchPromises.push(getNationality().then((nationalityData) => {
        nationality = `Country: ${nationalityData.country[0].country_id }`;
    })
    );

    Promise.all(fetchPromises)
        .then((list) => {
            list.forEach((fact) => {
                console.log(fact);
            })
            ageHtml.innerHTML = age;
            genderHtml.innerHTML = gender;
            nationityHtml.innerHTML = nationality;
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
            ageHtml.innerHTML = "Error";
            genderHtml.innerHTML = "Error";
            nationityHtml.innerHTML = "Error";
        })
});