package steps;

import org.openqa.selenium.JavascriptExecutor;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.actions.TelevisionFilter;
import utils.SeleniumDriver;
import utils.SeleniumHelper;

public class TelevisionWithFilter {
	
	TelevisionFilter televisionFilter = new TelevisionFilter();
	
	@Given("^I am on the Home Page \"([^\"]*)\" of Which Website$")
	public void i_am_on_the_Home_Page_of_Which_Website(String webSiteURL) throws Throwable {
		SeleniumDriver.openPage(webSiteURL);
		SeleniumDriver.verifyEquals("Television reviews - Which?");
		    
	}

	@When("^the Screen size is selected as \"([^\"]*)\"$")
	public void the_Screen_size_is_selected_as(String arg1) throws Throwable {
		televisionFilter.getCountBeforeFilter();
	    televisionFilter.selectScreenSize();
	}

	@When("^the Screen type is \"([^\"]*)\"$")
	public void the_Screen_type_is(String arg1) throws Throwable {
		televisionFilter.selectScreenType();
	   
	}

	@Then("^I see the Television review display for the filters that is applied$")
	public void i_see_the_Television_review_display_for_the_filters_that_is_applied() throws Throwable {
	  Thread.sleep(7000);
	  
	  televisionFilter.checkFilterisApplied();
	}

}
