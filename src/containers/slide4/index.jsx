import { Paragraph, Title } from "../../components";
import { Grid, Container, withStyles } from "@material-ui/core";
import { styleSheet } from "../../jss/pages/slide4";
import imgDemo1 from "../../assets/demo1.png";
import imgDemo2 from "../../assets/demo2.png";
import imgDemo3 from "../../assets/demo3.png";
import imgDemo4 from "../../assets/demo4.png";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const mockData = [
  {
    img: imgDemo1,
    title: (
      <>
        AirLift augments your <br /> digital experience
      </>
    ),
  },
  {
    img: imgDemo2,
    title: (
      <>
        AirLift the content you allow on <br />
        your platform
      </>
    ),
  },
  {
    img: imgDemo3,
    title: (
      <>
        AirLift protects your voice on decentralized
        <br /> user owned network
      </>
    ),
  },
  {
    img: imgDemo4,
    title: (
      <>
        AirLift is secured by industry leading crptography <br /> to eliminate
        censorship and manipulation
      </>
    ),
  },
];

function Slide4(props) {
  const { classes } = props;
  const history = useHistory();
  const [demoData, setDemoData] = useState(null);
  const [index, setIndex] = useState(0);
  const [tes, setTes] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === mockData.length - 1
            ? history.push("/welcome")
            : prevIndex + 1
        ),
      5000
    );
    setTes(0);
    return () => {};
  }, [index]);
  return (
    <div className={classes.root}>
      <div className="overlay">
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="slideShow"
          >
            <Grid
              item
              className="slideshowSlider"
              style={{
                transform: `translate3d(${-index * 100}%, 0, 0)`,
              }}
            >
              {mockData.map((item, index) => {
                return (
                  <div className="slide" key={index}>
                    <div className="contentArea">
                      <span className="slideNum">
                        {index + 1} of {mockData.length}
                      </span>
                      <img src={item.img} alt="demo 1 image" />
                      <div className={classes.bottomPart}>
                        <Title color="purple"> {item.title}</Title>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default withStyles(styleSheet, { name: "Slide4" })(Slide4);