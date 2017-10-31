import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PageTitle from '../components/PageTitle'
import BenefitsNav from '../components/BenefitsNav'
import FluidContainer from '../components/extended/FluidContainer'

import PlaylistAddCheckIcon from 'material-ui-icons/PlaylistAddCheck'

// Views
import BenefitsForHackers from '../components/BenefitsForHackers'
import BenefitsForChallengers from '../components/BenefitsForChallengers'

class Benefits extends React.Component {
  render() {
    return (
      <main>
        <FluidContainer tight>
          <PageTitle title="Benefits">
            <PlaylistAddCheckIcon />
          </PageTitle>
          <BenefitsNav />
          <Switch>
            <Route path="/benefits" exact component={BenefitsForHackers} />
            <Route
              path="/benefits/challengers"
              exact
              component={BenefitsForChallengers}
            />
          </Switch>
        </FluidContainer>
      </main>
    )
  }
}

export default Benefits
