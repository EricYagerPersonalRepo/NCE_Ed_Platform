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
import { getInstructorBiography } from "../graphql/queries";
import { updateInstructorBiography } from "../graphql/mutations";
const client = generateClient();
export default function InstructorBiographyUpdateForm(props) {
  const {
    id: idProp,
    instructorBiography: instructorBiographyModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    overview: "",
  };
  const [overview, setOverview] = React.useState(initialValues.overview);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = instructorBiographyRecord
      ? { ...initialValues, ...instructorBiographyRecord }
      : initialValues;
    setOverview(cleanValues.overview);
    setErrors({});
  };
  const [instructorBiographyRecord, setInstructorBiographyRecord] =
    React.useState(instructorBiographyModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getInstructorBiography.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getInstructorBiography
        : instructorBiographyModelProp;
      setInstructorBiographyRecord(record);
    };
    queryData();
  }, [idProp, instructorBiographyModelProp]);
  React.useEffect(resetStateValues, [instructorBiographyRecord]);
  const validations = {
    overview: [{ type: "Required" }],
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
          overview,
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
            query: updateInstructorBiography.replaceAll("__typename", ""),
            variables: {
              input: {
                id: instructorBiographyRecord.id,
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
      {...getOverrideProps(overrides, "InstructorBiographyUpdateForm")}
      {...rest}
    >
      <TextField
        label="Overview"
        isRequired={true}
        isReadOnly={false}
        value={overview}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              overview: value,
            };
            const result = onChange(modelFields);
            value = result?.overview ?? value;
          }
          if (errors.overview?.hasError) {
            runValidationTasks("overview", value);
          }
          setOverview(value);
        }}
        onBlur={() => runValidationTasks("overview", overview)}
        errorMessage={errors.overview?.errorMessage}
        hasError={errors.overview?.hasError}
        {...getOverrideProps(overrides, "overview")}
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
          isDisabled={!(idProp || instructorBiographyModelProp)}
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
              !(idProp || instructorBiographyModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
