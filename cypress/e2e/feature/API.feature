Feature: API Testing with Cucumber

    Featre will be used to run tests against API

    @API
    Scenario: API returns movie count of 6
        Given I get movie data from endpoint 'https://swapi.dev/api/films'
        Then the count shall be '6'

    @API
    Scenario: Director of the 3rd movie should be Richard Marquand
        Given I get movie data from endpoint 'https://swapi.dev/api/films'
        Then the director of movie number '3' shall be 'Richard Marquand'

    @API
    Scenario: Director of 5th movie is NOT Gary Kurtz,Rick McCallum
        Given I get movie data from endpoint 'https://swapi.dev/api/films'
        Then the producer of movie number '5' shall NOT be 'Gary Kurtz,Rick McCallum'