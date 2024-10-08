import { removeEmojis } from './character-utils';

describe('removeEmojis', () => {
    test('should remove emojis from the string', () => {
        const stringWithEmojis = 'Hello 😀 World 🌍!';
        const stringWithoutEmojis = removeEmojis(stringWithEmojis);
        expect(stringWithoutEmojis).toBe('Hello  World !');
    });

    test('should handle an empty string', () => {
        const emptyString = '';
        const result = removeEmojis(emptyString);
        expect(result).toBe('');
    });

    test('should handle a string without emojis', () => {
        const stringWithoutEmojis = 'Hello World!';
        const result = removeEmojis(stringWithoutEmojis);
        expect(result).toBe(stringWithoutEmojis);
    });
});
