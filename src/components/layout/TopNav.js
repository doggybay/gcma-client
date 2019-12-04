import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import { Navbar, NavbarBrand } from 'reactstrap'

const TopNav = () => (
  <Navbar color="success" expans="md">
    <NavbarBrand href="/">
      <Header as="h3" color="grey" icon>
        <Icon name="golf ball" color="grey" />
        Golf Course Track
      </Header>
    </NavbarBrand>
  </Navbar>
);

export default TopNav

// <Header as="h2" icon>
//       <Icon name="settings" />
//       Account Settings
//       <Header.Subheader>
//         Manage your account settings and set e-mail preferences.
//       </Header.Subheader>
//     </Header>