"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Translator = void 0;
class Translator {
    constructor() {
        this.translationMap = {
            '2': 'a', '22': 'b', '222': 'c',
            '3': 'd', '33': 'e', '333': 'f',
            '4': 'g', '44': 'h', '444': 'i',
            '5': 'j', '55': 'k', '555': 'l',
            '6': 'm', '66': 'n', '666': 'o',
            '7': 'p', '77': 'q', '777': 'r', '7777': 's',
            '8': 't', '88': 'u', '888': 'v',
            '9': 'w', '99': 'x', '999': 'y', '9999': 'z',
            '0': ' ',
        };
    }
    findBestMatch(numeric) {
        let bestMatch = '';
        for (let i = numeric.length; i >= 0; i--) {
            const candidate = numeric.substring(0, i);
            if (this.translationMap[candidate]) {
                bestMatch = candidate;
                break;
            }
        }
        return bestMatch;
    }
    translateToNumeric(text) {
        return text
            .toLowerCase()
            .split('')
            .map(char => this.translationMap[char] || '')
            .join(' ');
    }
    translateToText(numeric) {
        const words = numeric.split(' ');
        let translatedText = '';
        for (let word of words) {
            let wordText = '';
            let remainingNumeric = word;
            while (remainingNumeric.length > 0) {
                const bestMatch = this.findBestMatch(remainingNumeric);
                if (bestMatch) {
                    wordText += this.translationMap[bestMatch];
                    remainingNumeric = remainingNumeric.slice(bestMatch.length);
                }
                else {
                    // No match found, skip this part of the numeric code
                    remainingNumeric = remainingNumeric.slice(1);
                }
            }
            translatedText += wordText + ' ';
        }
        return translatedText.trim();
    }
}
exports.Translator = Translator;
