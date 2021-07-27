import "../../pages/App";
import { Button, Paragraph, Title } from "../../components";
import StatusLoader from "../../components/StatusLoader";
import { Grid, Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import CheckIcon from "@material-ui/icons/Check";

function Slide2() {
  const [pluginStatus, setPluginStatus] = useState(false);
  const [text, setText] = useState(false);

  useEffect(() => {
    setTimeout(() => setPluginStatus(true), 3000);
    if (pluginStatus) {
      setTimeout(() => setText("Loaded"), 2000);
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
            <h1> {text}</h1>
            <Title color="purple">Install AirLift to get coins</Title>
            <Paragraph>
              In order to reserve your username and collect coin you have to
              install AirLift plugin.
            </Paragraph>
            {pluginStatus ? (
              <StatusLoader
                statusText="Plugin Installed...."
                icon={<CheckIcon />}
              />
            ) : (
              <>
                <StatusLoader statusText="Checking for plugin...." />
                <Button> Download</Button>
              </>
            )}
          </Grid>
          <Grid item>
            <h1> image herew</h1>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Slide2;
