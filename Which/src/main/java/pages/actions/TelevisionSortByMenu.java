package pages.actions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.locators.TelevisionFiltersLocators;
import pages.locators.TelevisionSortByMenuLocators;
import utils.SeleniumDriver;

public class TelevisionSortByMenu {
	public static int countProduct;
	
TelevisionSortByMenuLocators televisionSortByMenuLocators=null;
	
	
	public TelevisionSortByMenu()
	{
		
		this.televisionSortByMenuLocators=new TelevisionSortByMenuLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), televisionSortByMenuLocators);
	}
	
	public void selectMenu(String menu)
	{
		SeleniumDriver.select(televisionSortByMenuLocators.sortByMenu, menu);
	}
	
	public  void verifLowToHighDisplay()
	{
		SeleniumDriver.waitForPageToLoad();
		List<WebElement> price = televisionSortByMenuLocators.getPrice;
	    
	    double value1 =0;
	    for(int i =0;i<price.size()-1;i++)
	    {
	    	String t = price.get(i).getText();
	    	t = t.substring(1);
	    	t = t.replace(",", "");
	    	double  value = Double.parseDouble(t);
	    	
			//System.out.println(value);
	    	if(value1<=value)
	    	{
	    		value1=value;
	    	}else
	    	{
	    		System.out.println("incorrect display when the menu is set from low to high ");
	    	}
	}
	}
	
	public  int addToCompare(int count)
	{
		
    	for(int o=0;o<count;o++)
    	{
    		televisionSortByMenuLocators.addToCompare.click();
    		SeleniumDriver.partialScroll();
    		televisionSortByMenuLocators.CompareButton.click();
    		SeleniumDriver.backNavigation();
    		SeleniumDriver.partialScroll();
    		
    		
    	}
    	countProduct =count;
    	return countProduct;
	}
	
	public void getProductCount()
	{
		SeleniumDriver.waitForPageToLoad();
		int actualCount = televisionSortByMenuLocators.productCountInComparePool.size();
		System.out.println(actualCount);
		System.out.println(countProduct);
		
		SeleniumDriver.backNavigation();
		Assert.assertTrue(actualCount == countProduct ,"The product added are seen in Compare television screen");
		
	}
	
	public void removeFromCompare()
	{
		Assert.assertTrue(SeleniumDriver.isElementPresent(televisionSortByMenuLocators.removeCompare), "The button is not changed from add to compare to remove from compare ");
	}
	
	public void compareClick()
	{
		televisionSortByMenuLocators.CompareButton.click();
	}
	
	public void getProductCountInCompareScreen()
	{
		SeleniumDriver.waitForPageToLoad();
		int actualCount = televisionSortByMenuLocators.productCountInCompareScreen.size();
		Assert.assertTrue(actualCount == countProduct ,"The product added are seen in Compare television screen");
    }
	
	
}
