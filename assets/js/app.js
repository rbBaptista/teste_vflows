$(document).ready(function () {
    $(".btn-success").click(function () {
        let newProduct = `
        <div class="d-flex align-items-start">
        <div class="col-1 d-flex justify-content-center mt-3">
            <a class="btn btn-danger" href=#><svg xmlns="http://www.w3.org/2000/svg" width="16"
                    height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
            </a>
        </div>
        <div class="col-11">
            <div class="card m-3">
                <div class="card-body">
                    <div class="row align-items-start">
                        <div class="col">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1"
                                    class="form-label">Produto</label>
                                <input type="text" class="form-control" id="produto"
                                    placeholder="Produto">
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-start">
                        <div class="col-3">
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">UND.
                                    Medida</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>UND. Medida</option>
                                    <option value="1">litro (l)</option>
                                    <option value="2">metro (m)</option>
                                    <option value="3">grama (g)</option>
                                    <option value="4">quilograma (kg)</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">QDTDE.
                                    em
                                    Estoque</label>
                                <input type="text" class="form-control" id="qdtdeEmEstoque"
                                    placeholder="QDTDE. em Estoque">
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Valor
                                    Unitario</label>
                                <input type="text" class="form-control" id="valorUnitario"
                                    placeholder="Valor Unitario">
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Valor
                                    Total</label>
                                <input type="text" class="form-control" id="valorTotal"
                                    placeholder="" value="" disabled>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
        $(".accordion-body-produto").append(newProduct);
    });

    $(document).on('click', '.btn-danger', function () {
        if ($('.d-flex.align-items-start').length > 1) {
            $(this).closest('.d-flex.align-items-start').remove();
        } else {
            alert("Não é possível excluir a última div");
        }
    });

    $('input[type="submit"]').click(function(e) {
        e.preventDefault(); // Evita o envio do formulário

        if ($('#razaoSocial').val() && $('#cnpj').val() && $('#cidade').val() && $('#estado').val() && $('#cep').val()) {
            let data = {
                campo1: $('#razaoSocial').val(),
                campo2: $('#cnpj').val(),
                campo3: $('#nomeFantasia').val(),
                campo4: $('#cidade').val(),
                campo5: $('#estado').val(),
                campo6: $('#cep').val(),
                // Adicione mais campos conforme necessário
            };

            let json = JSON.stringify(data);

            console.log(json); // Mostra o JSON no console
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });

});