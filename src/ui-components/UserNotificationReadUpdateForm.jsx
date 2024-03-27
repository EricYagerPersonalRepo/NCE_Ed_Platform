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
import { getUserNotificationRead } from "../graphql/queries";
import { updateUserNotificationRead } from "../graphql/mutations";
const client = generateClient();
export default function UserNotificationReadUpdateForm(props) {
  const {
    id: idProp,
    userNotificationRead: userNotificationReadModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    notificationID: "",
    readAt: "",
    readBy: "",
  };
  const [notificationID, setNotificationID] = React.useState(
    initialValues.notificationID
  );
  const [readAt, setReadAt] = React.useState(initialValues.readAt);
  const [readBy, setReadBy] = React.useState(initialValues.readBy);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userNotificationReadRecord
      ? { ...initialValues, ...userNotificationReadRecord }
      : initialValues;
    setNotificationID(cleanValues.notificationID);
    setReadAt(cleanValues.readAt);
    setReadBy(cleanValues.readBy);
    setErrors({});
  };
  const [userNotificationReadRecord, setUserNotificationReadRecord] =
    React.useState(userNotificationReadModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUserNotificationRead.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUserNotificationRead
        : userNotificationReadModelProp;
      setUserNotificationReadRecord(record);
    };
    queryData();
  }, [idProp, userNotificationReadModelProp]);
  React.useEffect(resetStateValues, [userNotificationReadRecord]);
  const validations = {
    notificationID: [{ type: "Required" }],
    readAt: [],
    readBy: [{ type: "Required" }],
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
          notificationID,
          readAt: readAt ?? null,
          readBy,
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
            query: updateUserNotificationRead.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userNotificationReadRecord.id,
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
      {...getOverrideProps(overrides, "UserNotificationReadUpdateForm")}
      {...rest}
    >
      <TextField
        label="Notification id"
        isRequired={true}
        isReadOnly={false}
        value={notificationID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              notificationID: value,
              readAt,
              readBy,
            };
            const result = onChange(modelFields);
            value = result?.notificationID ?? value;
          }
          if (errors.notificationID?.hasError) {
            runValidationTasks("notificationID", value);
          }
          setNotificationID(value);
        }}
        onBlur={() => runValidationTasks("notificationID", notificationID)}
        errorMessage={errors.notificationID?.errorMessage}
        hasError={errors.notificationID?.hasError}
        {...getOverrideProps(overrides, "notificationID")}
      ></TextField>
      <TextField
        label="Read at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={readAt && convertToLocal(new Date(readAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              notificationID,
              readAt: value,
              readBy,
            };
            const result = onChange(modelFields);
            value = result?.readAt ?? value;
          }
          if (errors.readAt?.hasError) {
            runValidationTasks("readAt", value);
          }
          setReadAt(value);
        }}
        onBlur={() => runValidationTasks("readAt", readAt)}
        errorMessage={errors.readAt?.errorMessage}
        hasError={errors.readAt?.hasError}
        {...getOverrideProps(overrides, "readAt")}
      ></TextField>
      <TextField
        label="Read by"
        isRequired={true}
        isReadOnly={false}
        value={readBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              notificationID,
              readAt,
              readBy: value,
            };
            const result = onChange(modelFields);
            value = result?.readBy ?? value;
          }
          if (errors.readBy?.hasError) {
            runValidationTasks("readBy", value);
          }
          setReadBy(value);
        }}
        onBlur={() => runValidationTasks("readBy", readBy)}
        errorMessage={errors.readBy?.errorMessage}
        hasError={errors.readBy?.hasError}
        {...getOverrideProps(overrides, "readBy")}
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
          isDisabled={!(idProp || userNotificationReadModelProp)}
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
              !(idProp || userNotificationReadModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
