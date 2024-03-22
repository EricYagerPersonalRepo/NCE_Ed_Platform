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
import { createBroadcastNotification } from "../graphql/mutations";
const client = generateClient();
export default function BroadcastNotificationCreateForm(props) {
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
    targetStudent: "",
    title: "",
    message: "",
    createdAt: "",
    type: "",
    redirect: "",
  };
  const [targetStudent, setTargetStudent] = React.useState(
    initialValues.targetStudent
  );
  const [title, setTitle] = React.useState(initialValues.title);
  const [message, setMessage] = React.useState(initialValues.message);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [type, setType] = React.useState(initialValues.type);
  const [redirect, setRedirect] = React.useState(initialValues.redirect);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTargetStudent(initialValues.targetStudent);
    setTitle(initialValues.title);
    setMessage(initialValues.message);
    setCreatedAt(initialValues.createdAt);
    setType(initialValues.type);
    setRedirect(initialValues.redirect);
    setErrors({});
  };
  const validations = {
    targetStudent: [],
    title: [{ type: "Required" }],
    message: [{ type: "Required" }],
    createdAt: [{ type: "Required" }],
    type: [{ type: "Required" }],
    redirect: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          targetStudent,
          title,
          message,
          createdAt,
          type,
          redirect,
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
            query: createBroadcastNotification.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "BroadcastNotificationCreateForm")}
      {...rest}
    >
      <TextField
        label="Target student"
        isRequired={false}
        isReadOnly={false}
        value={targetStudent}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              targetStudent: value,
              title,
              message,
              createdAt,
              type,
              redirect,
            };
            const result = onChange(modelFields);
            value = result?.targetStudent ?? value;
          }
          if (errors.targetStudent?.hasError) {
            runValidationTasks("targetStudent", value);
          }
          setTargetStudent(value);
        }}
        onBlur={() => runValidationTasks("targetStudent", targetStudent)}
        errorMessage={errors.targetStudent?.errorMessage}
        hasError={errors.targetStudent?.hasError}
        {...getOverrideProps(overrides, "targetStudent")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              targetStudent,
              title: value,
              message,
              createdAt,
              type,
              redirect,
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
        label="Message"
        isRequired={true}
        isReadOnly={false}
        value={message}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              targetStudent,
              title,
              message: value,
              createdAt,
              type,
              redirect,
            };
            const result = onChange(modelFields);
            value = result?.message ?? value;
          }
          if (errors.message?.hasError) {
            runValidationTasks("message", value);
          }
          setMessage(value);
        }}
        onBlur={() => runValidationTasks("message", message)}
        errorMessage={errors.message?.errorMessage}
        hasError={errors.message?.hasError}
        {...getOverrideProps(overrides, "message")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              targetStudent,
              title,
              message,
              createdAt: value,
              type,
              redirect,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              targetStudent,
              title,
              message,
              createdAt,
              type: value,
              redirect,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Message"
          value="MESSAGE"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Alert"
          value="ALERT"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="Reminder"
          value="REMINDER"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Redirect"
        isRequired={false}
        isReadOnly={false}
        value={redirect}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              targetStudent,
              title,
              message,
              createdAt,
              type,
              redirect: value,
            };
            const result = onChange(modelFields);
            value = result?.redirect ?? value;
          }
          if (errors.redirect?.hasError) {
            runValidationTasks("redirect", value);
          }
          setRedirect(value);
        }}
        onBlur={() => runValidationTasks("redirect", redirect)}
        errorMessage={errors.redirect?.errorMessage}
        hasError={errors.redirect?.hasError}
        {...getOverrideProps(overrides, "redirect")}
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
