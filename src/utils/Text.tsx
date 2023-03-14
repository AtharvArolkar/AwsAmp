import { Text } from "@aws-amplify/ui-react";
import { PropsWithChildren } from "react";
import TextString from "../api/interface/text-string";
function TextComp(props :TextString) {
  return (
    <Text
      as="span"
      fontSize={["1px","5px","8px", "15px"]}
      fontFamily="sans-serif"
      lineHeight="normal"
    >
      {props.data}
    </Text>
  );
}
export default TextComp;
