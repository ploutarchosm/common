export function passwordGenerator(length = 16){
    const data = {
        chars:
            '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        passwordLength: length,
        password: '',
    };

    for (let i = 0; i <= data.passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * data.chars.length);
        data.password += data.chars.substring(randomNumber, randomNumber + 1);
    }
    return data.password;
}
