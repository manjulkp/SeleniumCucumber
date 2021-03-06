package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import pages.locators.TelevisionFiltersLocators;
import utils.SeleniumDriver;

public class TelevisionFilter {
	
	public static int count;
	
	TelevisionFiltersLocators televisionFiltersLocators=null;
	
	
	public TelevisionFilter()
	{
		
		this.televisionFiltersLocators=new TelevisionFiltersLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), televisionFiltersLocators);
	}
	
	public void selectScreenSize()
	{
		SeleniumDriver.scrollToElement(TelevisionFiltersLocators.screenSize);
	}
	
	public void selectScreenType()
	{
		SeleniumDriver.scrollToElement(TelevisionFiltersLocators.screenSize);
	}
	
	public int getCountBeforeFilter ()
	{
       String beforeCount = TelevisionFiltersLocators.count.getText();
       count = Integer.parseInt(beforeCount);
       System.out.println(count);
       return count;
	}
	
	public int getCountAfterFilter ()
	{
       String afterCount = TelevisionFiltersLocators.count.getText();
       int countAfter = Integer.parseInt(afterCount);
       return countAfter;
	} 
     
	public void checkFilterisApplied()
	{

		SeleniumDriver.waitForPageToLoad();
		int afterCount = getCountAfterFilter();
		System.out.println(count);
		System.out.println(afterCount);
		Assert.assertTrue(count>afterCount,"The filter is not applied successfully");
	}
	
	
	

}
