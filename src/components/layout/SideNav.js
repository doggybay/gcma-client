import React from 'react'
import { Button, Container, Feed, Grid } from 'semantic-ui-react'


const SideNav = () => {
  const menuItems = ['Customers', 'Tee Times', 'Available Tee Times', 'Add A New Customer', 'Add A New Tee Time']
  
  const listOfButons = menuItems.map(menuItem => (
    <Feed.Event>
      <Button color="black">
        {menuItem}
      </Button>
    </Feed.Event>))

  return (
    <Feed>
      {listOfButons}
    </Feed>
  );
}

export default SideNav