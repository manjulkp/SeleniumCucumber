package pages.locators;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.How;

public class TelevisionSortByMenuLocators {
	
	@FindBy(how=How.XPATH,using="//select[@name='sortby']")
	public static WebElement sortByMenu;

	
	@FindBys({
	    @FindBy(how = How.XPATH, using = "//p[@data-test-element='product-amount']")
	})
	public static List<WebElement> getPrice;
	
	@FindBy(how=How.XPATH,using="//button[@class='_1e2c2 action-add']")
	public static WebElement addToCompare;
	
	@FindBy(how=How.XPATH,using="//a[@class='view-comparison button button-primary icon-right']")
	public static WebElement CompareButton;
	
	@FindBys({
	@FindBy(how=How.XPATH,using="//button[@class='action-remove icon-close']")
	})
	public static List<WebElement> productCountInComparePool;
	
	@FindBy(how=How.XPATH,using="//button[contains(text(),'Remove from compare')]")
	public static WebElement removeCompare;
	
	@FindBys({
		@FindBy(how=How.XPATH,using="//span[@class='comparison-price']")
		})
		public static List<WebElement> productCountInCompareScreen;
	
	
	
}
