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
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getLesson } from "../graphql/queries";
import { updateLesson } from "../graphql/mutations";
const client = generateClient();
export default function LessonUpdateForm(props) {
  const {
    id: idProp,
    lesson: lessonModelProp,
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
    content: "",
    videoURL: "",
    moduleID: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [content, setContent] = React.useState(initialValues.content);
  const [videoURL, setVideoURL] = React.useState(initialValues.videoURL);
  const [moduleID, setModuleID] = React.useState(initialValues.moduleID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = lessonRecord
      ? { ...initialValues, ...lessonRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setContent(
      typeof cleanValues.content === "string" || cleanValues.content === null
        ? cleanValues.content
        : JSON.stringify(cleanValues.content)
    );
    setVideoURL(cleanValues.videoURL);
    setModuleID(cleanValues.moduleID);
    setErrors({});
  };
  const [lessonRecord, setLessonRecord] = React.useState(lessonModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getLesson.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getLesson
        : lessonModelProp;
      setLessonRecord(record);
    };
    queryData();
  }, [idProp, lessonModelProp]);
  React.useEffect(resetStateValues, [lessonRecord]);
  const validations = {
    title: [{ type: "Required" }],
    content: [{ type: "JSON" }],
    videoURL: [],
    moduleID: [{ type: "Required" }],
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
          content: content ?? null,
          videoURL: videoURL ?? null,
          moduleID,
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
            query: updateLesson.replaceAll("__typename", ""),
            variables: {
              input: {
                id: lessonRecord.id,
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
      {...getOverrideProps(overrides, "LessonUpdateForm")}
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
              content,
              videoURL,
              moduleID,
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
      <TextAreaField
        label="Content"
        isRequired={false}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              content: value,
              videoURL,
              moduleID,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextAreaField>
      <TextField
        label="Video url"
        isRequired={false}
        isReadOnly={false}
        value={videoURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              content,
              videoURL: value,
              moduleID,
            };
            const result = onChange(modelFields);
            value = result?.videoURL ?? value;
          }
          if (errors.videoURL?.hasError) {
            runValidationTasks("videoURL", value);
          }
          setVideoURL(value);
        }}
        onBlur={() => runValidationTasks("videoURL", videoURL)}
        errorMessage={errors.videoURL?.errorMessage}
        hasError={errors.videoURL?.hasError}
        {...getOverrideProps(overrides, "videoURL")}
      ></TextField>
      <TextField
        label="Module id"
        isRequired={true}
        isReadOnly={false}
        value={moduleID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              content,
              videoURL,
              moduleID: value,
            };
            const result = onChange(modelFields);
            value = result?.moduleID ?? value;
          }
          if (errors.moduleID?.hasError) {
            runValidationTasks("moduleID", value);
          }
          setModuleID(value);
        }}
        onBlur={() => runValidationTasks("moduleID", moduleID)}
        errorMessage={errors.moduleID?.errorMessage}
        hasError={errors.moduleID?.hasError}
        {...getOverrideProps(overrides, "moduleID")}
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
          isDisabled={!(idProp || lessonModelProp)}
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
              !(idProp || lessonModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
