import unittest

class TestGenreSelection(unittest.TestCase):
    def setUp(self):
        # Initialize valid genres and selected genres for each test
        self.valid_genres = ["fantasy", "sci-fi", "adventure", "mystery"]
        self.selected_genres = []

    def select_genres(self, genres):
        # Simulates genre selection logic in the program
        if genres:
            self.selected_genres = [genre for genre in genres if genre in self.valid_genres]
        else:
            self.selected_genres = []

    def test_no_genre_selected(self):
        # Test case: No genres are selected
        self.select_genres([])
        self.assertEqual(self.selected_genres, [], "No genres should be selected when none are provided.")

    def test_one_genre_selected(self):
        # Test case: A single valid genre is selected
        self.select_genres(["fantasy"])
        self.assertEqual(self.selected_genres, ["fantasy"], "Only the selected genre should be stored.")

    def test_invalid_genre_selected(self):
        # Test case: An invalid genre is selected
        self.select_genres(["backpack"])
        self.assertEqual(self.selected_genres, [], "Invalid genres should be ignored.")

    def test_multiple_genres_selected(self):
        # Test case: Multiple genres are selected, including valid and invalid genres
        self.select_genres(["fantasy", "mystery", "invalid"])
        self.assertEqual(self.selected_genres, ["fantasy", "mystery"], "Only valid genres should be stored.")

if __name__ == "__main__":
    unittest.main()
