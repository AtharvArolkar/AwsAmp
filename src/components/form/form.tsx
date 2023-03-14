import {
  Button,
  Flex,
  TextField,
  View,
  Text,
  Grid,
} from "@aws-amplify/ui-react";
import { SyntheticEvent, useState } from "react";
import usePostEngage from "../../api/hooks/usePostEngage";
import IengagementRequest from "../../api/interface/engagement-request";

export default function Form() {
  const [best_dateVal, setBestDate] = useState("");
  const [before_dateVal, setBeforeDate] = useState("");
  const [after_dateVal, setAfterDate] = useState("");

//   const [postData, setPostData] = usePostEngage();

  const handleSubmit = (e: React.FormEvent) => {
    // const formData=new FormData(e.currentTarget)
    e.preventDefault();
    // console.log(best_date+" "+before_date+" "+after_date)
    const data: IengagementRequest = {
      best_date: best_dateVal,
      before_date: before_dateVal,
      after_date: after_dateVal,
    };
    // setPostData(data);
    // console.log(formData);
  };
  return (
    <Flex
      direction="column"
      alignItems="center"
      as="form"
      justifyContent="center"
      onSubmit={handleSubmit}
    >
      <View
        as="div"
        borderRadius="6px"
        border="1px solid var(--amplify-colors-black)"
        maxWidth="100%"
        padding="1rem"
        width="20rem"
      >
        <Grid gap="1rem">
          <Text as="strong" lineHeight="2em" fontWeight={800} fontSize="1.5em">
            Form
          </Text>
          <TextField
            type="text"
            label="Best Days"
            labelHidden={true}
            placeholder="Best Days"
            name="best_days"
            onChange={(e) => setBestDate(e.currentTarget.value)}
          />
          <TextField
            type="text"
            label="Before Days"
            labelHidden={true}
            placeholder="Before Days"
            name="before_days"
            onChange={(e) => setBeforeDate(e.currentTarget.value)}
          />
          <TextField
            type="text"
            label="After Days"
            labelHidden={true}
            placeholder="After Days"
            name="after_days"
            onChange={(e) => setAfterDate(e.currentTarget.value)}
          />
          <Button type="submit" variation="primary">
            Submit
          </Button>
        </Grid>
      </View>
    </Flex>
  );
}
