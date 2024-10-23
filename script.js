const candidates = {
    '22': 'Bolsonaro',
    '13': 'Lula',
    '12': 'Ciro Gomes',
    '27': 'Eymael',
    '56': 'Eneas',
    '00': 'Branco'
};

let input = '';

function encrypt(data) {
    const secretKey = 'SenhaParaCriptografiaDaUrna';
    return CryptoJS.AES.encrypt(data, secretKey).toString();
}

function decrypt(data) {
    const secretKey = 'SenhaParaCriptografiaDaUrna'; 
    const bytes = CryptoJS.AES.decrypt(data, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

function addNumber(num) {
    input += num;
    document.getElementById('display').innerText = input;
}

function clearInput() {
    input = '';
    document.getElementById('display').innerText = 'Digite o número';
}

function confirmVote() {
    const encryptedVote = encrypt(input);
    console.log(`Voto criptografado: ${encryptedVote}`);
    const decryptedVote = decrypt(encryptedVote);
    console.log(`Voto descriptografado: ${decryptedVote}`);

    if (candidates[decryptedVote]) {
        document.getElementById('result').innerText = `Você votou em: ${candidates[decryptedVote]}`;
    } else {
        document.getElementById('result').innerText = 'Candidato não encontrado!';
    }
    input = ''; 
    document.getElementById('display').innerText = 'Digite o número';
}

function cancelVote() {
    clearInput();
    document.getElementById('result').innerText = 'Voto anulado!';
}