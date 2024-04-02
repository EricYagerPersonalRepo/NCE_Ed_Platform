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
import { getCourseApproval } from "../graphql/queries";
import { updateCourseApproval } from "../graphql/mutations";
const client = generateClient();
export default function CourseApprovalUpdateForm(props) {
  const {
    id: idProp,
    courseApproval: courseApprovalModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    status: "",
    comments: "",
    approvingAdmin: "",
  };
  const [status, setStatus] = React.useState(initialValues.status);
  const [comments, setComments] = React.useState(initialValues.comments);
  const [approvingAdmin, setApprovingAdmin] = React.useState(
    initialValues.approvingAdmin
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = courseApprovalRecord
      ? { ...initialValues, ...courseApprovalRecord }
      : initialValues;
    setStatus(cleanValues.status);
    setComments(cleanValues.comments);
    setApprovingAdmin(cleanValues.approvingAdmin);
    setErrors({});
  };
  const [courseApprovalRecord, setCourseApprovalRecord] = React.useState(
    courseApprovalModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCourseApproval.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCourseApproval
        : courseApprovalModelProp;
      setCourseApprovalRecord(record);
    };
    queryData();
  }, [idProp, courseApprovalModelProp]);
  React.useEffect(resetStateValues, [courseApprovalRecord]);
  const validations = {
    status: [{ type: "Required" }],
    comments: [],
    approvingAdmin: [{ type: "Required" }],
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
          status,
          comments: comments ?? null,
          approvingAdmin,
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
            query: updateCourseApproval.replaceAll("__typename", ""),
            variables: {
              input: {
                id: courseApprovalRecord.id,
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
      {...getOverrideProps(overrides, "CourseApprovalUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status: value,
              comments,
              approvingAdmin,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Pending"
          value="PENDING"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Approved"
          value="APPROVED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Disapproved"
          value="DISAPPROVED"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Comments"
        isRequired={false}
        isReadOnly={false}
        value={comments}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              comments: value,
              approvingAdmin,
            };
            const result = onChange(modelFields);
            value = result?.comments ?? value;
          }
          if (errors.comments?.hasError) {
            runValidationTasks("comments", value);
          }
          setComments(value);
        }}
        onBlur={() => runValidationTasks("comments", comments)}
        errorMessage={errors.comments?.errorMessage}
        hasError={errors.comments?.hasError}
        {...getOverrideProps(overrides, "comments")}
      ></TextField>
      <TextField
        label="Approving admin"
        isRequired={true}
        isReadOnly={false}
        value={approvingAdmin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              comments,
              approvingAdmin: value,
            };
            const result = onChange(modelFields);
            value = result?.approvingAdmin ?? value;
          }
          if (errors.approvingAdmin?.hasError) {
            runValidationTasks("approvingAdmin", value);
          }
          setApprovingAdmin(value);
        }}
        onBlur={() => runValidationTasks("approvingAdmin", approvingAdmin)}
        errorMessage={errors.approvingAdmin?.errorMessage}
        hasError={errors.approvingAdmin?.hasError}
        {...getOverrideProps(overrides, "approvingAdmin")}
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
          isDisabled={!(idProp || courseApprovalModelProp)}
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
              !(idProp || courseApprovalModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
