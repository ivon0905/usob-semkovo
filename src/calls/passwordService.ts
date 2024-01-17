const hashPassword = (password: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    let hashHex = '';
    window.crypto.subtle.digest('SHA-256', data)
        .then(hash => {
            const hashArray = Array.from(new Uint8Array(hash));
            hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');      
        })
        .catch(error => console.error('Error generating hash password:', error));

        return hashHex;
}

const passwordService =  {
    hashPassword
}

export default passwordService;