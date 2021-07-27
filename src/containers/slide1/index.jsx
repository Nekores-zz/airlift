import "../../pages/App";
import { Button, Paragraph, Title } from "../../components";
import StatusLoader from "../../components/StatusLoader";
import { Grid, Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

function Slide1() {
  const [pluginStatus, setPluginStatus] = useState(false);
  const [isPlugin, setIsPlugin] = useState(false);

  useEffect(() => {
    setTimeout(() => setPluginStatus(true), 3000);
    if (pluginStatus) {
      setTimeout(() => setIsPlugin(true), 3000);
    }
  });

  return (
    <div className="content-area">
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item sm="4">
            <Title color="purple">Install AirLift to get coins</Title>
            <br />
            <Paragraph>
              In order to reserve your username and collect coin you have to
              install AirLift plugin.
            </Paragraph>

            {pluginStatus ? (
              !isPlugin && (
                <>
                  <br />
                  <StatusLoader
                    statusText="Plugin Installed...."
                    icon={<CheckIcon />}
                  />
                </>
              )
            ) : (
              <>
                <br />
                <StatusLoader statusText="Checking for plugin...." />
                <br />
                <Button> Download</Button>
              </>
            )}
            {isPlugin ? (
              <>
                <br />
                <Button> Get Started</Button>{" "}
              </>
            ) : null}
          </Grid>
          <Grid item>
            <h1> Image </h1>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Slide1;
