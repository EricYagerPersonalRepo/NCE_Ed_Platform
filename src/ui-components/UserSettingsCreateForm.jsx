/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { listStudentProfiles } from "../graphql/queries";
import { createUserSettings } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function UserSettingsCreateForm(props) {
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
    studentProfile: undefined,
    notificationsEnabled: false,
    darkModeEnabled: false,
    language: "",
  };
  const [studentProfile, setStudentProfile] = React.useState(
    initialValues.studentProfile
  );
  const [studentProfileLoading, setStudentProfileLoading] =
    React.useState(false);
  const [studentProfileRecords, setStudentProfileRecords] = React.useState([]);
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(
    initialValues.notificationsEnabled
  );
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(
    initialValues.darkModeEnabled
  );
  const [language, setLanguage] = React.useState(initialValues.language);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setStudentProfile(initialValues.studentProfile);
    setCurrentStudentProfileValue(undefined);
    setCurrentStudentProfileDisplayValue("");
    setNotificationsEnabled(initialValues.notificationsEnabled);
    setDarkModeEnabled(initialValues.darkModeEnabled);
    setLanguage(initialValues.language);
    setErrors({});
  };
  const [
    currentStudentProfileDisplayValue,
    setCurrentStudentProfileDisplayValue,
  ] = React.useState("");
  const [currentStudentProfileValue, setCurrentStudentProfileValue] =
    React.useState(undefined);
  const studentProfileRef = React.createRef();
  const getIDValue = {
    studentProfile: (r) => JSON.stringify({ id: r?.id }),
  };
  const studentProfileIdSet = new Set(
    Array.isArray(studentProfile)
      ? studentProfile.map((r) => getIDValue.studentProfile?.(r))
      : getIDValue.studentProfile?.(studentProfile)
  );
  const getDisplayValue = {
    studentProfile: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    studentProfile: [
      { type: "Required", validationMessage: "StudentProfile is required." },
    ],
    notificationsEnabled: [{ type: "Required" }],
    darkModeEnabled: [{ type: "Required" }],
    language: [],
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
  const fetchStudentProfileRecords = async (value) => {
    setStudentProfileLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listStudentProfiles.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listStudentProfiles?.items;
      var loaded = result.filter(
        (item) => !studentProfileIdSet.has(getIDValue.studentProfile?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setStudentProfileRecords(newOptions.slice(0, autocompleteLength));
    setStudentProfileLoading(false);
  };
  React.useEffect(() => {
    fetchStudentProfileRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          studentProfile,
          notificationsEnabled,
          darkModeEnabled,
          language,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          const modelFieldsToSave = {
            studentProfileID: modelFields?.studentProfile?.id,
            notificationsEnabled: modelFields.notificationsEnabled,
            darkModeEnabled: modelFields.darkModeEnabled,
            language: modelFields.language,
          };
          await client.graphql({
            query: createUserSettings.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFieldsToSave,
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
      {...getOverrideProps(overrides, "UserSettingsCreateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              studentProfile: value,
              notificationsEnabled,
              darkModeEnabled,
              language,
            };
            const result = onChange(modelFields);
            value = result?.studentProfile ?? value;
          }
          setStudentProfile(value);
          setCurrentStudentProfileValue(undefined);
          setCurrentStudentProfileDisplayValue("");
        }}
        currentFieldValue={currentStudentProfileValue}
        label={"Student profile"}
        items={studentProfile ? [studentProfile] : []}
        hasError={errors?.studentProfile?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("studentProfile", currentStudentProfileValue)
        }
        errorMessage={errors?.studentProfile?.errorMessage}
        getBadgeText={getDisplayValue.studentProfile}
        setFieldValue={(model) => {
          setCurrentStudentProfileDisplayValue(
            model ? getDisplayValue.studentProfile(model) : ""
          );
          setCurrentStudentProfileValue(model);
        }}
        inputFieldRef={studentProfileRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Student profile"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search StudentProfile"
          value={currentStudentProfileDisplayValue}
          options={studentProfileRecords
            .filter(
              (r) => !studentProfileIdSet.has(getIDValue.studentProfile?.(r))
            )
            .map((r) => ({
              id: getIDValue.studentProfile?.(r),
              label: getDisplayValue.studentProfile?.(r),
            }))}
          isLoading={studentProfileLoading}
          onSelect={({ id, label }) => {
            setCurrentStudentProfileValue(
              studentProfileRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentStudentProfileDisplayValue(label);
            runValidationTasks("studentProfile", label);
          }}
          onClear={() => {
            setCurrentStudentProfileDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchStudentProfileRecords(value);
            if (errors.studentProfile?.hasError) {
              runValidationTasks("studentProfile", value);
            }
            setCurrentStudentProfileDisplayValue(value);
            setCurrentStudentProfileValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "studentProfile",
              currentStudentProfileDisplayValue
            )
          }
          errorMessage={errors.studentProfile?.errorMessage}
          hasError={errors.studentProfile?.hasError}
          ref={studentProfileRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "studentProfile")}
        ></Autocomplete>
      </ArrayField>
      <SwitchField
        label="Notifications enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={notificationsEnabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              studentProfile,
              notificationsEnabled: value,
              darkModeEnabled,
              language,
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
              studentProfile,
              notificationsEnabled,
              darkModeEnabled: value,
              language,
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
        isRequired={false}
        isReadOnly={false}
        value={language}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              studentProfile,
              notificationsEnabled,
              darkModeEnabled,
              language: value,
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
