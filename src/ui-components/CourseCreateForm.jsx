/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createCourse } from "../graphql/mutations";
const client = generateClient();
export default function CourseCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    description: "",
    subject: "",
    difficulty: "",
    creator: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [subject, setSubject] = React.useState(initialValues.subject);
  const [difficulty, setDifficulty] = React.useState(initialValues.difficulty);
  const [creator, setCreator] = React.useState(initialValues.creator);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setSubject(initialValues.subject);
    setDifficulty(initialValues.difficulty);
    setCreator(initialValues.creator);
    setErrors({});
  };
  const validations = {
    title: [{ type: "Required" }],
    description: [],
    subject: [{ type: "Required" }],
    difficulty: [],
    creator: [{ type: "Required" }],
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
          title,
          description,
          subject,
          difficulty,
          creator,
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
            query: createCourse.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CourseCreateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              description,
              subject,
              difficulty,
              creator,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description: value,
              subject,
              difficulty,
              creator,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <SelectField
        label="Subject"
        placeholder="Please select an option"
        isDisabled={false}
        value={subject}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              subject: value,
              difficulty,
              creator,
            };
            const result = onChange(modelFields);
            value = result?.subject ?? value;
          }
          if (errors.subject?.hasError) {
            runValidationTasks("subject", value);
          }
          setSubject(value);
        }}
        onBlur={() => runValidationTasks("subject", subject)}
        errorMessage={errors.subject?.errorMessage}
        hasError={errors.subject?.hasError}
        {...getOverrideProps(overrides, "subject")}
      >
        <option
          children="Math"
          value="MATH"
          {...getOverrideProps(overrides, "subjectoption0")}
        ></option>
        <option
          children="Computer science"
          value="COMPUTER_SCIENCE"
          {...getOverrideProps(overrides, "subjectoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Difficulty"
        isRequired={false}
        isReadOnly={false}
        value={difficulty}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              subject,
              difficulty: value,
              creator,
            };
            const result = onChange(modelFields);
            value = result?.difficulty ?? value;
          }
          if (errors.difficulty?.hasError) {
            runValidationTasks("difficulty", value);
          }
          setDifficulty(value);
        }}
        onBlur={() => runValidationTasks("difficulty", difficulty)}
        errorMessage={errors.difficulty?.errorMessage}
        hasError={errors.difficulty?.hasError}
        {...getOverrideProps(overrides, "difficulty")}
      ></TextField>
      <TextField
        label="Creator"
        isRequired={true}
        isReadOnly={false}
        value={creator}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              subject,
              difficulty,
              creator: value,
            };
            const result = onChange(modelFields);
            value = result?.creator ?? value;
          }
          if (errors.creator?.hasError) {
            runValidationTasks("creator", value);
          }
          setCreator(value);
        }}
        onBlur={() => runValidationTasks("creator", creator)}
        errorMessage={errors.creator?.errorMessage}
        hasError={errors.creator?.hasError}
        {...getOverrideProps(overrides, "creator")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
