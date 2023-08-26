document.addEventListener('DOMContentLoaded', () => {
    const translateEarthButton = document.getElementById('translateEarthBtn');
    const earthMessageInput = document.getElementById('earthMessage');
    const translatedEarthMessage = document.getElementById('translatedEarthMessage');
    const earthNumericCode = document.getElementById('earthNumericCode');

    const translateMarsButton = document.getElementById('translateMarsBtn');
    const marsMessageInput = document.getElementById('marsMessage');
    const translatedMarsMessage = document.getElementById('translatedMarsMessage');
    const marsNumericCode = document.getElementById('marsNumericCode');

    translateEarthButton.addEventListener('click', async () => {
        const message = earthMessageInput.value;
        const response = await translateMessage(message, 'earth', 'mars');
        translatedEarthMessage.textContent = `Earth Translated: ${response.message}`;
        earthNumericCode.textContent = `Numeric Code: ${response.numericCode}`;
    });

    translateMarsButton.addEventListener('click', async () => {
        const message = marsMessageInput.value;
        const response = await translateMessage(message, 'mars', 'earth');
        translatedMarsMessage.textContent = `Mars Translated: ${response.message}`;
        marsNumericCode.textContent = `Numeric Code: ${response.numericCode}`;
    });

    async function translateMessage(message, sender, receiver) {
        const url = '/message';
        const headers = {
            'Content-Type': 'application/json',
            'x-sender': sender,
            'x-receiver': receiver
        };
        const body = JSON.stringify({ message });

        const response = await fetch(url, {
            method: 'POST',
            headers,
            body
        });

        return response.json();
    }
});
