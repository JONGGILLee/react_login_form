import React from "react";

import { Grid, Text, Button } from "../elements";

const Header = (props) => {
  return (
    <React.Fragment>
      <Grid is_flex padding="3px 16px">
        <Grid>
          <Text margin="0px" size="25px" bold>
            시행
          </Text>
        </Grid>
        <Grid is_flex>
          <Button text="로그인"></Button>
          <Button text="회원가입"></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;