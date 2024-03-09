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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getNCEUserSettings } from "../graphql/queries";
import { updateNCEUserSettings } from "../graphql/mutations";
const client = generateClient();
export default function NCEUserSettingsUpdateForm(props) {
  const {
    id: idProp,
    nCEUserSettings: nCEUserSettingsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    notificationsEnabled: false,
    darkModeEnabled: false,
    language: "",
    isAdmin: false,
  };
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(
    initialValues.notificationsEnabled
  );
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(
    initialValues.darkModeEnabled
  );
  const [language, setLanguage] = React.useState(initialValues.language);
  const [isAdmin, setIsAdmin] = React.useState(initialValues.isAdmin);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = nCEUserSettingsRecord
      ? { ...initialValues, ...nCEUserSettingsRecord }
      : initialValues;
    setNotificationsEnabled(cleanValues.notificationsEnabled);
    setDarkModeEnabled(cleanValues.darkModeEnabled);
    setLanguage(cleanValues.language);
    setIsAdmin(cleanValues.isAdmin);
    setErrors({});
  };
  const [nCEUserSettingsRecord, setNCEUserSettingsRecord] = React.useState(
    nCEUserSettingsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getNCEUserSettings.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getNCEUserSettings
        : nCEUserSettingsModelProp;
      setNCEUserSettingsRecord(record);
    };
    queryData();
  }, [idProp, nCEUserSettingsModelProp]);
  React.useEffect(resetStateValues, [nCEUserSettingsRecord]);
  const validations = {
    notificationsEnabled: [{ type: "Required" }],
    darkModeEnabled: [{ type: "Required" }],
    language: [{ type: "Required" }],
    isAdmin: [{ type: "Required" }],
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
          notificationsEnabled,
          darkModeEnabled,
          language,
          isAdmin,
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
            query: updateNCEUserSettings.replaceAll("__typename", ""),
            variables: {
              input: {
                id: nCEUserSettingsRecord.id,
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
      {...getOverrideProps(overrides, "NCEUserSettingsUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Notifications enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={notificationsEnabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              notificationsEnabled: value,
              darkModeEnabled,
              language,
              isAdmin,
            };
            const result = onChange(modelFields);
            value = result?.notificationsEnabled ?? value;
          }
          if (errors.notificationsEnabled?.hasError) {
            runValidationTasks("notificationsEnabled", value);
          }
          setNotificationsEnabled(value);
        }}
        onBlur={() =>
          runValidationTasks("notificationsEnabled", notificationsEnabled)
        }
        errorMessage={errors.notificationsEnabled?.errorMessage}
        hasError={errors.notificationsEnabled?.hasError}
        {...getOverrideProps(overrides, "notificationsEnabled")}
      ></SwitchField>
      <SwitchField
        label="Dark mode enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={darkModeEnabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              notificationsEnabled,
              darkModeEnabled: value,
              language,
              isAdmin,
            };
            const result = onChange(modelFields);
            value = result?.darkModeEnabled ?? value;
          }
          if (errors.darkModeEnabled?.hasError) {
            runValidationTasks("darkModeEnabled", value);
          }
          setDarkModeEnabled(value);
        }}
        onBlur={() => runValidationTasks("darkModeEnabled", darkModeEnabled)}
        errorMessage={errors.darkModeEnabled?.errorMessage}
        hasError={errors.darkModeEnabled?.hasError}
        {...getOverrideProps(overrides, "darkModeEnabled")}
      ></SwitchField>
      <TextField
        label="Language"
        isRequired={true}
        isReadOnly={false}
        value={language}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              notificationsEnabled,
              darkModeEnabled,
              language: value,
              isAdmin,
            };
            const result = onChange(modelFields);
            value = result?.language ?? value;
          }
          if (errors.language?.hasError) {
            runValidationTasks("language", value);
          }
          setLanguage(value);
        }}
        onBlur={() => runValidationTasks("language", language)}
        errorMessage={errors.language?.errorMessage}
        hasError={errors.language?.hasError}
        {...getOverrideProps(overrides, "language")}
      ></TextField>
      <SwitchField
        label="Is admin"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isAdmin}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              notificationsEnabled,
              darkModeEnabled,
              language,
              isAdmin: value,
            };
            const result = onChange(modelFields);
            value = result?.isAdmin ?? value;
          }
          if (errors.isAdmin?.hasError) {
            runValidationTasks("isAdmin", value);
          }
          setIsAdmin(value);
        }}
        onBlur={() => runValidationTasks("isAdmin", isAdmin)}
        errorMessage={errors.isAdmin?.errorMessage}
        hasError={errors.isAdmin?.hasError}
        {...getOverrideProps(overrides, "isAdmin")}
      ></SwitchField>
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
          isDisabled={!(idProp || nCEUserSettingsModelProp)}
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
              !(idProp || nCEUserSettingsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
