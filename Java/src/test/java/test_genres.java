
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class GenreSelectionTest {

    private List<String> validGenres;
    private List<String> selectedGenres;

    @BeforeEach
    void setUp() {
        validGenres = Arrays.asList("fantasy", "sci-fi", "adventure", "mystery");
        selectedGenres = new ArrayList<>();
    }

    private void selectGenres(List<String> genres) {
        if (genres != null && !genres.isEmpty()) {
            selectedGenres = genres.stream()
                    .filter(validGenres::contains)
                    .toList();
        } else {
            selectedGenres = new ArrayList<>();
        }
    }

    @Test
    void testNoGenreSelected() {
        selectGenres(new ArrayList<>());
        assertEquals(new ArrayList<>(), selectedGenres, "No genres should be selected when none are provided.");
    }

    @Test
    void testOneGenreSelected() {
        selectGenres(List.of("fantasy"));
        assertEquals(List.of("fantasy"), selectedGenres, "Only the selected genre should be stored.");
    }

    @Test
    void testInvalidGenreSelected() {
        selectGenres(List.of("backpack"));
        assertEquals(new ArrayList<>(), selectedGenres, "Invalid genres should be ignored.");
    }

    @Test
    void testMultipleGenresSelected() {
        selectGenres(Arrays.asList("fantasy", "mystery", "invalid"));
        assertEquals(List.of("fantasy", "mystery"), selectedGenres, "Only valid genres should be stored.");
    }
}
