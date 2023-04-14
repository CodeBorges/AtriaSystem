let amountProfile = 3;
let userApiUrl = "https://api.randomuser.me/?results= " + amountProfile;
const userCardContainer = document.getElementById("user-list");
const addUserBtn = document.getElementById("add-user-btn");

const fetchUsers = async () => {
    try {
        const response = await fetch(userApiUrl);
        const data = await response.json();
        const users = data.results;
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};

const renderUserCards = (users) => {
    userCardContainer.innerHTML = "";
    users.forEach((user) => {
        const userCard = document.createElement("div");
        userCard.className = "user-card";
        userCard.innerHTML = `
      <img src="${user.picture.medium}" alt="Profile Picture">
      <h2>${user.name.first} ${user.name.last}</h2>
      <p><i class="fas fa-phone"></i> ${user.phone}</p>
      <p><i class="fas fa-birthday-cake"></i> ${new Date(user.dob.date).toLocaleDateString()}</p>
      <p><i class="fas ${user.gender === "male" ? "fa-mars" : "fa-venus"}"></i> ${user.gender}</p>
    `;
        userCardContainer.appendChild(userCard);
    });
};

addUserBtn.addEventListener("click", async () => {
    amountProfile += 3;
    userApiUrl = "https://api.randomuser.me/?results= " + amountProfile;
    const users = await fetchUsers();
    renderUserCards(users);
});

fetchUsers().then(renderUserCards);
