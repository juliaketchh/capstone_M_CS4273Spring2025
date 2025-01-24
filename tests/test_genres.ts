const assert = require('assert');
const { describe, it, beforeEach } = require('mocha');

describe('Genre Selection Tests', () => {
    let validGenres;
    let selectedGenres;

    beforeEach(() => {
        validGenres = ["fantasy", "sci-fi", "adventure", "mystery"];
        selectedGenres = [];
    });

    const selectGenres = (genres) => {
        if (genres && genres.length > 0) {
            selectedGenres = genres.filter(genre => validGenres.includes(genre));
        } else {
            selectedGenres = [];
        }
    };

    it('should handle no genre selected', () => {
        selectGenres([]);
        assert.deepStrictEqual(selectedGenres, [], "No genres should be selected when none are provided.");
    });

    it('should handle one genre selected', () => {
        selectGenres(["fantasy"]);
        assert.deepStrictEqual(selectedGenres, ["fantasy"], "Only the selected genre should be stored.");
    });

    it('should handle invalid genre selected', () => {
        selectGenres(["backpack"]);
        assert.deepStrictEqual(selectedGenres, [], "Invalid genres should be ignored.");
    });

    it('should handle multiple genres selected', () => {
        selectGenres(["fantasy", "mystery", "invalid"]);
        assert.deepStrictEqual(selectedGenres, ["fantasy", "mystery"], "Only valid genres should be stored.");
    });
});
