import { OutlinedInput as InputMui } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { styleSheet } from "../jss/components/textfield";

function TextField(props) {
  const { classes, inputLabel } = props;
  return (
    <>
      <span className={classes.inputLabel}> {inputLabel}</span>
      <InputMui classes={{ root: classes.root }} {...props} />
    </>
  );
}

export default withStyles(styleSheet, { name: "TextField" })(TextField);
