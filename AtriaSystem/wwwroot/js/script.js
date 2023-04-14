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
        userCard.addEventListener("click", () => {
            // Preencher o conteúdo do modal com as informações do usuário
            const modal = document.getElementById("modal-body");
            modal.innerHTML = `
<div class="card" style="width: 18rem;">
                    <div class="text-center">
                    <img src="${user.picture.medium}" class="card-img-top rounded-circle w-50 m-3" alt="">
                    </div>
                    <div class="card-body border-top">
                        <label style="opacity: 0.5">Name</label>
                        <p class="card-text">${user.name.first} ${user.name.last}</p>
                        <label style="opacity: 0.5">Phone</label>
                        <p><i class="fas fa-phone"></i> ${user.phone}</p>
                        <label style="opacity: 0.5">Birthday Date</label>
                        <p><i class="fas fa-birthday-cake"></i> ${new Date(user.dob.date).toLocaleDateString() }</p>
                        <label style="opacity: 0.5">Genre</label>
                        <p><i class="fas ${user.gender === 'male' ? 'fa-mars' : 'fa-venus'}"></i> ${user.gender}</p>
                    </div>
                </div>
            `;
            // Exibir o modal
            $('#infoModal').modal('toggle');
        });
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
