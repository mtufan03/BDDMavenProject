@inventory @log
  Feature:User can select Items from Inventory

#
#    User can Remove items from Inventory Page

    Scenario: User can Select and Add items to the cart from Inventory Page
#      Given User is in login page
#      When  User enters username and password and click
#      Then  User can log in
      Given User is in Inventory page
      When User select and click add item
      Then The item is in cart
