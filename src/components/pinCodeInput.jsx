import { withStyles } from "@material-ui/core";
import { styleSheet } from "../jss/components/pinCodeInput";

function PinCodeInput(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <input className="pinInput" maxLength="1" autoFocus="true" />
      <input className="pinInput" maxLength="1" />
      <input className="pinInput" maxLength="1" />
      <input className="pinInput" maxLength="1" />
      <input className="pinInput" maxLength="1" />
      <input className="pinInput" maxLength="1" />
      <input className="pinInput" maxLength="1" />
      <input className="pinInput" maxLength="1" />
    </div>
  );
}

export default withStyles(styleSheet, { name: "PinCodeInput" })(PinCodeInput);
