"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create an instance of the Translator 
const translator_1 = require("./translator");
const translator = new translator_1.Translator();
// Test translation from text to numeric
const textMessage = "hello world";
const numericMessage = translator.translateToNumeric(textMessage);
console.log(`Text to Numeric: ${numericMessage}`);
// Test translation from numeric to text
const numericCode = "4433555555666096667775553";
const translatedText = translator.translateToText(numericCode);
console.log(`Numeric to Text: ${translatedText}`);
