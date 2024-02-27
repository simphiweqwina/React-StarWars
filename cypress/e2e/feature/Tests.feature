Feature: StarWars Tests

    This feature file will hold tests for starwars app

    Background: The user must be on landing page
        Given the user navigates to the landing page

    @sortby
    Scenario: As a StarWars user I want to sort by title in order to see list updated
        Given user is on landing page
        When the user selects sortby 'Title'
        Then the list shall update
        And the movie 'The Phantom Menace' shall be last in the list

    @movie-details
    Scenario: As a StarWars user I want to view movie details in order to verify species
        Given user is on landing page
        When the user views movie details for 'The Empire Strikes Back'
        Then the user shall see species 'Wookie' displayed

    @movie-details   
    Scenario Outline: As a StarWars user I want to view movie details in order to verify actors are not on the list
        Given user is on landing page
        When the user views movie details for 'The Phantom Menace'
        Then the section <Section> should not be displayed
        Examples:
            | Section      |
            | "Planets"    |
            # | "Camino"   |