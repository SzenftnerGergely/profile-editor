//Picture preview
let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("profile-pic-input");

inputFile.onchange = function () {
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
};

//Collect data from Form
let profilePageForm = document.getElementById("profilePageForm");

profilePageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let firstName = document.getElementById("firstname").value
  let surname = document.getElementById("lastname").value
  let country = document.getElementById("country").value
  let zipCode = document.getElementById("post").value
  let city = document.getElementById("city").value
  let street = document.getElementById("address").value
  let houseNumber = document.getElementById("number").value
  let introduction = document.getElementById("introduction").value
  let inputFile = document.getElementById("profile-pic-input");

  //Send form data to Server
  async function upload(formData) {
    try {
      const response = await fetch("http://localhost:9000/", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  const formData = new FormData();
  
  formData.append("firstName", firstName);
  formData.append("surname", surname);
  formData.append("country", country);
  formData.append("zipCode", zipCode);
  formData.append("city", city);
  formData.append("street", street);
  formData.append("houseNumber", houseNumber);
  formData.append("introduction", introduction);
  formData.append("picture", inputFile.files[0]);
  
  upload(formData);
});

//Even for Delete-Btn
document.getElementById("delete-btn").addEventListener("click", (e) => {
  e.preventDefault();

  document.getElementById("firstname").value = ""
  document.getElementById("lastname").value = ""
  document.getElementById("country").value = ""
  document.getElementById("post").value = ""
  document.getElementById("city").value = ""
  document.getElementById("address").value = ""
  document.getElementById("number").value = ""
  document.getElementById("introduction").value = ""
  profilePic.src = "./public/placeholder.png"
})