/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  Flex,
  Image,
  PhoneNumberField,
  SelectField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function SignUp(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="80px 80px 80px 80px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SignUp")}
      {...rest}
    >
      <Flex
        gap="48px"
        direction="row"
        width="1160px"
        height="658px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 41139293725")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 313")}
        >
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 406")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="600"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Student Information "
              {...getOverrideProps(overrides, "Student Information")}
            ></Text>
            <Flex
              gap="24px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 426")}
            >
              <TextField
                width="unset"
                height="unset"
                label="First name"
                grow="1"
                shrink="1"
                basis="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "TextField39293730")}
              ></TextField>
              <TextField
                width="unset"
                height="unset"
                label="Last name"
                grow="1"
                shrink="1"
                basis="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "TextField39293731")}
              ></TextField>
            </Flex>
          </Flex>
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 409")}
          >
            <TextField
              width="unset"
              height="unset"
              label="Street address"
              shrink="0"
              alignSelf="stretch"
              placeholder=""
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField39293733")}
            ></TextField>
            <Flex
              gap="24px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 425")}
            >
              <TextField
                width="unset"
                height="unset"
                label="City"
                grow="1"
                shrink="1"
                basis="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "TextField39293735")}
              ></TextField>
              <TextField
                width="unset"
                height="unset"
                label="Zip code"
                grow="1"
                shrink="1"
                basis="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "TextField39293736")}
              ></TextField>
              <SelectField
                width="100px"
                height="unset"
                label="State"
                shrink="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField")}
              ></SelectField>
            </Flex>
          </Flex>
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 410")}
          >
            <TextField
              width="unset"
              height="unset"
              label="Email address"
              shrink="0"
              alignSelf="stretch"
              placeholder=""
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField39293739")}
            ></TextField>
            <PhoneNumberField
              width="unset"
              height="unset"
              label="Phone number"
              shrink="0"
              alignSelf="stretch"
              placeholder=""
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "PhoneNumberField")}
            ></PhoneNumberField>
          </Flex>
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 41139293741")}
          >
            <Button
              width="unset"
              height="unset"
              shrink="0"
              alignSelf="stretch"
              size="large"
              isDisabled={false}
              variation="primary"
              children="Sign Up"
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
        </Flex>
        <Image
          width="unset"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
