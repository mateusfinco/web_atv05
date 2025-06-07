document.getElementById('simulador-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const valorStr = document.getElementById('valor').value.trim();
    const banco = parseFloat(document.getElementById('banco').value);
    const parcelas = parseInt(document.getElementById('parcelas').value);

    if (!nome || !valorStr || isNaN(banco) || isNaN(parcelas)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const valor = parseFloat(valorStr.replace(/[^\d,]/g, '').replace(',', '.'));

    const valorTotal = valor * Math.pow(banco, parcelas);
    const valorParcela = valorTotal / parcelas;

    window.location.href = `resultado.html?valorParcela=${valorParcela}&valorTotal=${valorTotal}&parcelas=${parcelas}&nome=${encodeURIComponent(nome)}`;
});

function formatarCampo(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });
}
