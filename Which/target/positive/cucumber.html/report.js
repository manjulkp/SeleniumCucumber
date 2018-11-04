$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TelevisionReview.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Television Review Page is working.",
  "description": "In order to validate that \nthe Television Review page is working\nDoing the Acceptance Testing",
  "id": "acceptance-testing-to-validate-television-review-page-is-working.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tvreview"
    }
  ]
});
formatter.before({
  "duration": 3168502893,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Validate Television Review Page with filters",
  "description": "",
  "id": "acceptance-testing-to-validate-television-review-page-is-working.;validate-television-review-page-with-filters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on the Home Page \"https://www.which.co.uk/reviews/televisions\" of Which Website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the Screen size is selected as \"20-28\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the Screen type is \"LCD\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I see the Television review display for the filters that is applied",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.which.co.uk/reviews/televisions",
      "offset": 23
    }
  ],
  "location": "TelevisionWithFilter.i_am_on_the_Home_Page_of_Which_Website(String)"
});
formatter.result({
  "duration": 9993642013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20-28",
      "offset": 32
    }
  ],
  "location": "TelevisionWithFilter.the_Screen_size_is_selected_as(String)"
});
formatter.result({
  "duration": 428336157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LCD",
      "offset": 20
    }
  ],
  "location": "TelevisionWithFilter.the_Screen_type_is(String)"
});
formatter.result({
  "duration": 337613387,
  "status": "passed"
});
formatter.match({
  "location": "TelevisionWithFilter.i_see_the_Television_review_display_for_the_filters_that_is_applied()"
});
formatter.result({
  "duration": 16080775850,
  "status": "passed"
});
formatter.after({
  "duration": 695496228,
  "status": "passed"
});
formatter.before({
  "duration": 2374208247,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate Television Review Page with Sort By",
  "description": "",
  "id": "acceptance-testing-to-validate-television-review-page-is-working.;validate-television-review-page-with-sort-by",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on the Home Page \"https://www.which.co.uk/reviews/televisions\" of Which Website",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the sort by is selected as \"Price (low to high)\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I see the Television review display according to the sort by option",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I am able to scroll up and down",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select \"3\" television product with \"Add to Compare\" to compare the product",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I see that the selected products are added to compare pool",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "the option \" Add to compare \" is changed to \"Remove from compare\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select compare",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the user is navigated to \"Compare Television - Which?\" screen",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the added products to be compared are seen",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.which.co.uk/reviews/televisions",
      "offset": 23
    }
  ],
  "location": "TelevisionWithFilter.i_am_on_the_Home_Page_of_Which_Website(String)"
});
formatter.result({
  "duration": 3780827628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (low to high)",
      "offset": 28
    }
  ],
  "location": "TelevisionByMenuSteps.the_sort_by_is_selected_as(String)"
});
formatter.result({
  "duration": 1551404264,
  "status": "passed"
});
formatter.match({
  "location": "TelevisionByMenuSteps.i_see_the_Television_review_display_according_to_the_sort_by_option()"
});
formatter.result({
  "duration": 13856630798,
  "status": "passed"
});
formatter.match({
  "location": "TelevisionByMenuSteps.i_am_able_to_scroll_up_and_down()"
});
formatter.result({
  "duration": 9069750069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 10
    },
    {
      "val": "Add to Compare",
      "offset": 38
    }
  ],
  "location": "TelevisionByMenuSteps.i_select_television_product_with_to_compare_the_product(String,String)"
});
formatter.result({
  "duration": 19877721562,
  "status": "passed"
});
formatter.match({
  "location": "TelevisionByMenuSteps.i_see_that_the_selected_products_are_added_to_compare_pool()"
});
formatter.result({
  "duration": 9058282860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Add to compare ",
      "offset": 12
    },
    {
      "val": "Remove from compare",
      "offset": 45
    }
  ],
  "location": "TelevisionByMenuSteps.the_option_is_changed_to(String,String)"
});
formatter.result({
  "duration": 69502342,
  "status": "passed"
});
formatter.match({
  "location": "TelevisionByMenuSteps.i_select_compare()"
});
formatter.result({
  "duration": 1708346968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compare Television - Which?",
      "offset": 26
    }
  ],
  "location": "TelevisionByMenuSteps.the_user_is_navigated_to_screen(String)"
});
formatter.result({
  "duration": 30631186,
  "status": "passed"
});
formatter.match({
  "location": "TelevisionByMenuSteps.the_added_products_to_be_compared_are_seen()"
});
formatter.result({
  "duration": 11722451953,
  "status": "passed"
});
formatter.after({
  "duration": 873330081,
  "status": "passed"
});
formatter.before({
  "duration": 2437849198,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validate Television Review Page with different menu - say Best Buy",
  "description": "",
  "id": "acceptance-testing-to-validate-television-review-page-is-working.;validate-television-review-page-with-different-menu---say-best-buy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I am on the Home Page \"https://www.which.co.uk/reviews/televisions\" of Which Website",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "the user select \"Best Buy\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the user is navigated to \"  Best Buy televisions - Which?\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "the page is refershed",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I see the webpage is still \"  Best Buy televisions - Which?\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select  \"Televisions\" from top corner menu under TV \u0026 home entertainment",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I see that user is navigated to \"Television reviews - Which?\" screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.which.co.uk/reviews/televisions",
      "offset": 23
    }
  ],
  "location": "TelevisionWithFilter.i_am_on_the_Home_Page_of_Which_Website(String)"
});
formatter.result({
  "duration": 9430534999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Best Buy",
      "offset": 17
    }
  ],
  "location": "TelevisionByBestBuy.the_user_select(String)"
});
formatter.result({
  "duration": 12474696980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "  Best Buy televisions - Which?",
      "offset": 26
    }
  ],
  "location": "TelevisionByBestBuy.the_user_is_navigated_to(String)"
});
formatter.result({
  "duration": 32956164,
  "status": "passed"
});
formatter.match({
  "location": "TelevisionByBestBuy.the_page_is_refershed()"
});
formatter.result({
  "duration": 8868007151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "  Best Buy televisions - Which?",
      "offset": 28
    }
  ],
  "location": "TelevisionByBestBuy.i_see_the_webpage_is_still(String)"
});
formatter.result({
  "duration": 28700160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Televisions",
      "offset": 11
    }
  ],
  "location": "TelevisionByBestBuy.i_select_from_top_corner_menu_under_TV_home_entertainment(String)"
});
formatter.result({
  "duration": 21265592872,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: The element reference of \u003ca href\u003d\"/reviews/sound-bars\"\u003e is stale; either the element is no longer attached to the DOM, it is not in the current frame context, or the document has been refreshed\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.0\u0027, revision: \u00272ecb7d9a\u0027, time: \u00272018-10-31T20:22:52\u0027\nSystem info: host: \u0027kwiff-mbp-mputtasetty-2.local\u0027, ip: \u0027fe80:0:0:0:1cbb:c43d:8e:1977%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 63.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.23.0, moz:headless: false, moz:processID: 44437, moz:profile: /var/folders/xb/7kfrvyg95vq..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 17.7.0, rotatable: false, setWindowRect: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c50a3bef-6062-ea43-a02f-4c6a6d9463fb\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:166)\n\tat pages.actions.TelevisionBestBuy.selectHomeEntertain(TelevisionBestBuy.java:34)\n\tat steps.TelevisionByBestBuy.i_select_from_top_corner_menu_under_TV_home_entertainment(TelevisionByBestBuy.java:36)\n\tat ✽.When I select  \"Televisions\" from top corner menu under TV \u0026 home entertainment(TelevisionReview.feature:31)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Television reviews - Which?",
      "offset": 33
    }
  ],
  "location": "TelevisionByBestBuy.i_see_that_user_is_navigated_to_screen(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1150742988,
  "status": "passed"
});
});