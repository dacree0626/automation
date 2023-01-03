from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("https://www.saucedemo.com/")

signin_button = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, "login-button"))
)