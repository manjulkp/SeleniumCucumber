package pages.actions;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import pages.locators.TelevisionBestBuyLocator;
import pages.locators.TelevisionFiltersLocators;
import utils.SeleniumDriver;

public class TelevisionBestBuy {
	
TelevisionBestBuyLocator televisionBestBuyLocators=null;
	
	
	public TelevisionBestBuy()
	{
		this.televisionBestBuyLocators=new TelevisionBestBuyLocator();
		PageFactory.initElements(SeleniumDriver.getDriver(), televisionBestBuyLocators);
	}
	
	public void selectMenu()
	{
		televisionBestBuyLocators.bestBuy.click();
	}
	
	public void selectHomeEntertain( String text) throws InterruptedException
	{
		 SeleniumDriver.waitForPageToLoad();
		 televisionBestBuyLocators.telHomeEntertain.click();
		 List <WebElement> ele = televisionBestBuyLocators.menuTelHomeEntertain;
		 for(WebElement option :ele) {
	 		    if (option.getText().equals(text)) {
	 		        option.click();
	 		    }
		 SeleniumDriver.waitForPageToLoad();
		
	  }
	}
	
	

}
