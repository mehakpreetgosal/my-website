function uploadImage(){
    alert("Image Uploaded");
}

async function uploadImage() {

    const fileInput =
        document.getElementById("imageInput");

    const file =
        fileInput.files[0];

    if (!file) {
        alert("Please select an image");
        return;
    }

    const formData = new FormData();

    formData.append("file", file);

    const response =
        await fetch(
            "http://127.0.0.1:8000/predict",
            {
                method: "POST",
                body: formData
            }
        );

    const data =
        await response.json();

    document.getElementById(
        "scientificName"
    ).textContent =
        data.scientific_name;

    document.getElementById(
        "family"
    ).textContent =
        data.family;

    document.getElementById(
        "habitat"
    ).textContent =
        data.habitat;

    document.getElementById(
        "country"
    ).textContent =
        data.countries;

    document.getElementById(
        "dangerLevel"
    ).textContent =
        data.danger_level;

    document.getElementById(
        "characteristics"
    ).textContent =
        data.characteristics;

    document.getElementById(
        "confidence"
    ).textContent =
        data.confidence + "%";
}