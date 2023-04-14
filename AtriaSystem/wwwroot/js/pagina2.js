function mostrarInfoModal(foto, nome, sobrenome, telefone, dataNascimento, sexo) {

    document.getElementById('modal-body').innerHTML = `
                <div class="card" style="width: 18rem;">
                    <div class="text-center">
                    <img src="${foto}" class="card-img-top rounded-circle w-50 m-3" alt="">
                    </div>
                    <div class="card-body border-top">
                        <label style="opacity: 0.5">Name</label>
                        <p class="card-text">${nome} ${sobrenome}</p>
                        <label style="opacity: 0.5">Phone</label>
                        <p><i class="fas fa-phone"></i> ${telefone}</p>
                        <label style="opacity: 0.5">Birthday Date</label>
                        <p><i class="fas fa-birthday-cake"></i> ${dataNascimento}</p>
                        <label style="opacity: 0.5">Genre</label>
                        <p><i class="fas ${sexo === 'male' ? 'fa-mars' : 'fa-venus'}"></i> ${sexo}</p>
                    </div>
                </div>
            `;
    $('#infoModal').modal('toggle');
}
