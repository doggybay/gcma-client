import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const Gears = () => (
  <Header as='h2' icon>
    <Icon name='settings' />
    Account Settings
    <Header.Subheader>
      Manage your account settings and set e-mail preferences.
    </Header.Subheader>
  </Header>
)

export default Gears