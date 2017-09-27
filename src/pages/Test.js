/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from "react";

import { Container, Box } from "rebass";

import ProfilePreview from "../components/ProfilePreview";
import ChallengePreview from "../components/ChallengePreview";

import Button from "material-ui/Button";

class Test extends Component {
  render() {
    return (
      <Container pt={4} is="main">
        <Button raised color="primary">
          Text
        </Button>
        <Box mb={3}>
          <ProfilePreview />
        </Box>
        <ChallengePreview />
      </Container>
    );
  }
}
export default Test;
