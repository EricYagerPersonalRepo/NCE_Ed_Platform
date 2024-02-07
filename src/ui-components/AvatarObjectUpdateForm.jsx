/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getAvatarObject } from "../graphql/queries";
import { updateAvatarObject } from "../graphql/mutations";
const client = generateClient();
export default function AvatarObjectUpdateForm(props) {
  const {
    id: idProp,
    avatarObject: avatarObjectModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    bucket: "",
    key: "",
    region: "",
  };
  const [bucket, setBucket] = React.useState(initialValues.bucket);
  const [key, setKey] = React.useState(initialValues.key);
  const [region, setRegion] = React.useState(initialValues.region);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = avatarObjectRecord
      ? { ...initialValues, ...avatarObjectRecord }
      : initialValues;
    setBucket(cleanValues.bucket);
    setKey(cleanValues.key);
    setRegion(cleanValues.region);
    setErrors({});
  };
  const [avatarObjectRecord, setAvatarObjectRecord] = React.useState(
    avatarObjectModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAvatarObject.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAvatarObject
        : avatarObjectModelProp;
      setAvatarObjectRecord(record);
    };
    queryData();
  }, [idProp, avatarObjectModelProp]);
  React.useEffect(resetStateValues, [avatarObjectRecord]);
  const validations = {
    bucket: [{ type: "Required" }],
    key: [{ type: "Required" }],
    region: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          bucket,
          key,
          region,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateAvatarObject.replaceAll("__typename", ""),
            variables: {
              input: {
                id: avatarObjectRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AvatarObjectUpdateForm")}
      {...rest}
    >
      <TextField
        label="Bucket"
        isRequired={true}
        isReadOnly={false}
        value={bucket}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bucket: value,
              key,
              region,
            };
            const result = onChange(modelFields);
            value = result?.bucket ?? value;
          }
          if (errors.bucket?.hasError) {
            runValidationTasks("bucket", value);
          }
          setBucket(value);
        }}
        onBlur={() => runValidationTasks("bucket", bucket)}
        errorMessage={errors.bucket?.errorMessage}
        hasError={errors.bucket?.hasError}
        {...getOverrideProps(overrides, "bucket")}
      ></TextField>
      <TextField
        label="Key"
        isRequired={true}
        isReadOnly={false}
        value={key}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bucket,
              key: value,
              region,
            };
            const result = onChange(modelFields);
            value = result?.key ?? value;
          }
          if (errors.key?.hasError) {
            runValidationTasks("key", value);
          }
          setKey(value);
        }}
        onBlur={() => runValidationTasks("key", key)}
        errorMessage={errors.key?.errorMessage}
        hasError={errors.key?.hasError}
        {...getOverrideProps(overrides, "key")}
      ></TextField>
      <TextField
        label="Region"
        isRequired={true}
        isReadOnly={false}
        value={region}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bucket,
              key,
              region: value,
            };
            const result = onChange(modelFields);
            value = result?.region ?? value;
          }
          if (errors.region?.hasError) {
            runValidationTasks("region", value);
          }
          setRegion(value);
        }}
        onBlur={() => runValidationTasks("region", region)}
        errorMessage={errors.region?.errorMessage}
        hasError={errors.region?.hasError}
        {...getOverrideProps(overrides, "region")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || avatarObjectModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || avatarObjectModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
