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
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getExercise } from "../graphql/queries";
import { updateExercise } from "../graphql/mutations";
const client = generateClient();
export default function ExerciseUpdateForm(props) {
  const {
    id: idProp,
    exercise: exerciseModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    question: "",
    solution: "",
    lessonID: "",
    exerciseType: "",
    data: "",
  };
  const [question, setQuestion] = React.useState(initialValues.question);
  const [solution, setSolution] = React.useState(initialValues.solution);
  const [lessonID, setLessonID] = React.useState(initialValues.lessonID);
  const [exerciseType, setExerciseType] = React.useState(
    initialValues.exerciseType
  );
  const [data, setData] = React.useState(initialValues.data);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = exerciseRecord
      ? { ...initialValues, ...exerciseRecord }
      : initialValues;
    setQuestion(cleanValues.question);
    setSolution(cleanValues.solution);
    setLessonID(cleanValues.lessonID);
    setExerciseType(cleanValues.exerciseType);
    setData(
      typeof cleanValues.data === "string" || cleanValues.data === null
        ? cleanValues.data
        : JSON.stringify(cleanValues.data)
    );
    setErrors({});
  };
  const [exerciseRecord, setExerciseRecord] = React.useState(exerciseModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getExercise.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getExercise
        : exerciseModelProp;
      setExerciseRecord(record);
    };
    queryData();
  }, [idProp, exerciseModelProp]);
  React.useEffect(resetStateValues, [exerciseRecord]);
  const validations = {
    question: [{ type: "Required" }],
    solution: [],
    lessonID: [{ type: "Required" }],
    exerciseType: [{ type: "Required" }],
    data: [{ type: "JSON" }],
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
          question,
          solution: solution ?? null,
          lessonID,
          exerciseType,
          data: data ?? null,
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
            query: updateExercise.replaceAll("__typename", ""),
            variables: {
              input: {
                id: exerciseRecord.id,
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
      {...getOverrideProps(overrides, "ExerciseUpdateForm")}
      {...rest}
    >
      <TextField
        label="Question"
        isRequired={true}
        isReadOnly={false}
        value={question}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question: value,
              solution,
              lessonID,
              exerciseType,
              data,
            };
            const result = onChange(modelFields);
            value = result?.question ?? value;
          }
          if (errors.question?.hasError) {
            runValidationTasks("question", value);
          }
          setQuestion(value);
        }}
        onBlur={() => runValidationTasks("question", question)}
        errorMessage={errors.question?.errorMessage}
        hasError={errors.question?.hasError}
        {...getOverrideProps(overrides, "question")}
      ></TextField>
      <TextField
        label="Solution"
        isRequired={false}
        isReadOnly={false}
        value={solution}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question,
              solution: value,
              lessonID,
              exerciseType,
              data,
            };
            const result = onChange(modelFields);
            value = result?.solution ?? value;
          }
          if (errors.solution?.hasError) {
            runValidationTasks("solution", value);
          }
          setSolution(value);
        }}
        onBlur={() => runValidationTasks("solution", solution)}
        errorMessage={errors.solution?.errorMessage}
        hasError={errors.solution?.hasError}
        {...getOverrideProps(overrides, "solution")}
      ></TextField>
      <TextField
        label="Lesson id"
        isRequired={true}
        isReadOnly={false}
        value={lessonID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question,
              solution,
              lessonID: value,
              exerciseType,
              data,
            };
            const result = onChange(modelFields);
            value = result?.lessonID ?? value;
          }
          if (errors.lessonID?.hasError) {
            runValidationTasks("lessonID", value);
          }
          setLessonID(value);
        }}
        onBlur={() => runValidationTasks("lessonID", lessonID)}
        errorMessage={errors.lessonID?.errorMessage}
        hasError={errors.lessonID?.hasError}
        {...getOverrideProps(overrides, "lessonID")}
      ></TextField>
      <SelectField
        label="Exercise type"
        placeholder="Please select an option"
        isDisabled={false}
        value={exerciseType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question,
              solution,
              lessonID,
              exerciseType: value,
              data,
            };
            const result = onChange(modelFields);
            value = result?.exerciseType ?? value;
          }
          if (errors.exerciseType?.hasError) {
            runValidationTasks("exerciseType", value);
          }
          setExerciseType(value);
        }}
        onBlur={() => runValidationTasks("exerciseType", exerciseType)}
        errorMessage={errors.exerciseType?.errorMessage}
        hasError={errors.exerciseType?.hasError}
        {...getOverrideProps(overrides, "exerciseType")}
      >
        <option
          children="Coding"
          value="CODING"
          {...getOverrideProps(overrides, "exerciseTypeoption0")}
        ></option>
        <option
          children="Problem solving"
          value="PROBLEM_SOLVING"
          {...getOverrideProps(overrides, "exerciseTypeoption1")}
        ></option>
      </SelectField>
      <TextAreaField
        label="Data"
        isRequired={false}
        isReadOnly={false}
        value={data}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question,
              solution,
              lessonID,
              exerciseType,
              data: value,
            };
            const result = onChange(modelFields);
            value = result?.data ?? value;
          }
          if (errors.data?.hasError) {
            runValidationTasks("data", value);
          }
          setData(value);
        }}
        onBlur={() => runValidationTasks("data", data)}
        errorMessage={errors.data?.errorMessage}
        hasError={errors.data?.hasError}
        {...getOverrideProps(overrides, "data")}
      ></TextAreaField>
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
          isDisabled={!(idProp || exerciseModelProp)}
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
              !(idProp || exerciseModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
