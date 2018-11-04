@tvreview
Feature: Acceptance testing to validate Television Review Page is working.
  In order to validate that 
  the Television Review page is working
  Doing the Acceptance Testing

  Scenario: Validate Television Review Page with filters
    Given I am on the Home Page "https://www.which.co.uk/reviews/televisions" of Which Website
    When the Screen size is selected as "20-28"
    And the Screen type is "LCD"
    Then I see the Television review display for the filters that is applied

  Scenario: Validate Television Review Page with Sort By
    Given I am on the Home Page "https://www.which.co.uk/reviews/televisions" of Which Website
    When the sort by is selected as "Price (low to high)"
    Then I see the Television review display according to the sort by option
    And I am able to scroll up and down
    When I select "3" television product with "Add to Compare" to compare the product
    Then I see that the selected products are added to compare pool
    And the option " Add to compare " is changed to "Remove from compare"
    When I select compare
    Then the user is navigated to "Compare Television - Which?" screen
    And the added products to be compared are seen

  Scenario: Validate Television Review Page with different menu - say Best Buy
    Given I am on the Home Page "https://www.which.co.uk/reviews/televisions" of Which Website
    When the user select "Best Buy"
    Then the user is navigated to "  Best Buy televisions - Which?"
    When the page is refershed
    Then I see the webpage is still "  Best Buy televisions - Which?"
    When I select  "Televisions" from top corner menu under TV & home entertainment
    Then I see that user is navigated to "Television reviews - Which?" screen
