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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getStudentProfile, listCourseEnrollments } from "../graphql/queries";
import {
  updateCourseEnrollment,
  updateStudentProfile,
} from "../graphql/mutations";
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
export default function StudentProfileUpdateForm(props) {
  const {
    id: idProp,
    studentProfile: studentProfileModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    cognitoUserID: "",
    name: "",
    email: "",
    birthdate: "",
    courseEnrollments: [],
  };
  const [cognitoUserID, setCognitoUserID] = React.useState(
    initialValues.cognitoUserID
  );
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [courseEnrollments, setCourseEnrollments] = React.useState(
    initialValues.courseEnrollments
  );
  const [courseEnrollmentsLoading, setCourseEnrollmentsLoading] =
    React.useState(false);
  const [courseEnrollmentsRecords, setCourseEnrollmentsRecords] =
    React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = studentProfileRecord
      ? {
          ...initialValues,
          ...studentProfileRecord,
          courseEnrollments: linkedCourseEnrollments,
        }
      : initialValues;
    setCognitoUserID(cleanValues.cognitoUserID);
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setCourseEnrollments(cleanValues.courseEnrollments ?? []);
    setCurrentCourseEnrollmentsValue(undefined);
    setCurrentCourseEnrollmentsDisplayValue("");
    setErrors({});
  };
  const [studentProfileRecord, setStudentProfileRecord] = React.useState(
    studentProfileModelProp
  );
  const [linkedCourseEnrollments, setLinkedCourseEnrollments] = React.useState(
    []
  );
  const canUnlinkCourseEnrollments = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getStudentProfile.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getStudentProfile
        : studentProfileModelProp;
      const linkedCourseEnrollments = record?.courseEnrollments?.items ?? [];
      setLinkedCourseEnrollments(linkedCourseEnrollments);
      setStudentProfileRecord(record);
    };
    queryData();
  }, [idProp, studentProfileModelProp]);
  React.useEffect(resetStateValues, [
    studentProfileRecord,
    linkedCourseEnrollments,
  ]);
  const [
    currentCourseEnrollmentsDisplayValue,
    setCurrentCourseEnrollmentsDisplayValue,
  ] = React.useState("");
  const [currentCourseEnrollmentsValue, setCurrentCourseEnrollmentsValue] =
    React.useState(undefined);
  const courseEnrollmentsRef = React.createRef();
  const getIDValue = {
    courseEnrollments: (r) => JSON.stringify({ id: r?.id }),
  };
  const courseEnrollmentsIdSet = new Set(
    Array.isArray(courseEnrollments)
      ? courseEnrollments.map((r) => getIDValue.courseEnrollments?.(r))
      : getIDValue.courseEnrollments?.(courseEnrollments)
  );
  const getDisplayValue = {
    courseEnrollments: (r) =>
      `${r?.progress ? r?.progress + " - " : ""}${r?.id}`,
  };
  const validations = {
    cognitoUserID: [{ type: "Required" }],
    name: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    birthdate: [{ type: "Required" }],
    courseEnrollments: [],
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
  const fetchCourseEnrollmentsRecords = async (value) => {
    setCourseEnrollmentsLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ progress: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listCourseEnrollments.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listCourseEnrollments?.items;
      var loaded = result.filter(
        (item) =>
          !courseEnrollmentsIdSet.has(getIDValue.courseEnrollments?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCourseEnrollmentsRecords(newOptions.slice(0, autocompleteLength));
    setCourseEnrollmentsLoading(false);
  };
  React.useEffect(() => {
    fetchCourseEnrollmentsRecords("");
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
          cognitoUserID,
          name,
          email,
          birthdate,
          courseEnrollments: courseEnrollments ?? null,
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
          const promises = [];
          const courseEnrollmentsToLink = [];
          const courseEnrollmentsToUnLink = [];
          const courseEnrollmentsSet = new Set();
          const linkedCourseEnrollmentsSet = new Set();
          courseEnrollments.forEach((r) =>
            courseEnrollmentsSet.add(getIDValue.courseEnrollments?.(r))
          );
          linkedCourseEnrollments.forEach((r) =>
            linkedCourseEnrollmentsSet.add(getIDValue.courseEnrollments?.(r))
          );
          linkedCourseEnrollments.forEach((r) => {
            if (!courseEnrollmentsSet.has(getIDValue.courseEnrollments?.(r))) {
              courseEnrollmentsToUnLink.push(r);
            }
          });
          courseEnrollments.forEach((r) => {
            if (
              !linkedCourseEnrollmentsSet.has(getIDValue.courseEnrollments?.(r))
            ) {
              courseEnrollmentsToLink.push(r);
            }
          });
          courseEnrollmentsToUnLink.forEach((original) => {
            if (!canUnlinkCourseEnrollments) {
              throw Error(
                `CourseEnrollment ${original.id} cannot be unlinked from StudentProfile because undefined is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateCourseEnrollment.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                  },
                },
              })
            );
          });
          courseEnrollmentsToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateCourseEnrollment.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            cognitoUserID: modelFields.cognitoUserID,
            name: modelFields.name,
            email: modelFields.email,
          };
          promises.push(
            client.graphql({
              query: updateStudentProfile.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: studentProfileRecord.id,
                  ...modelFieldsToSave,
                },
              },
            })
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "StudentProfileUpdateForm")}
      {...rest}
    >
      <TextField
        label="Cognito user id"
        isRequired={true}
        isReadOnly={false}
        value={cognitoUserID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoUserID: value,
              name,
              email,
              birthdate,
              courseEnrollments,
            };
            const result = onChange(modelFields);
            value = result?.cognitoUserID ?? value;
          }
          if (errors.cognitoUserID?.hasError) {
            runValidationTasks("cognitoUserID", value);
          }
          setCognitoUserID(value);
        }}
        onBlur={() => runValidationTasks("cognitoUserID", cognitoUserID)}
        errorMessage={errors.cognitoUserID?.errorMessage}
        hasError={errors.cognitoUserID?.hasError}
        {...getOverrideProps(overrides, "cognitoUserID")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoUserID,
              name: value,
              email,
              birthdate,
              courseEnrollments,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoUserID,
              name,
              email: value,
              birthdate,
              courseEnrollments,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              cognitoUserID,
              name,
              email,
              birthdate,
              courseEnrollments: values,
            };
            const result = onChange(modelFields);
            values = result?.courseEnrollments ?? values;
          }
          setCourseEnrollments(values);
          setCurrentCourseEnrollmentsValue(undefined);
          setCurrentCourseEnrollmentsDisplayValue("");
        }}
        currentFieldValue={currentCourseEnrollmentsValue}
        label={"Course enrollments"}
        items={courseEnrollments}
        hasError={errors?.courseEnrollments?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "courseEnrollments",
            currentCourseEnrollmentsValue
          )
        }
        errorMessage={errors?.courseEnrollments?.errorMessage}
        getBadgeText={getDisplayValue.courseEnrollments}
        setFieldValue={(model) => {
          setCurrentCourseEnrollmentsDisplayValue(
            model ? getDisplayValue.courseEnrollments(model) : ""
          );
          setCurrentCourseEnrollmentsValue(model);
        }}
        inputFieldRef={courseEnrollmentsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Course enrollments"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search CourseEnrollment"
          value={currentCourseEnrollmentsDisplayValue}
          options={courseEnrollmentsRecords.map((r) => ({
            id: getIDValue.courseEnrollments?.(r),
            label: getDisplayValue.courseEnrollments?.(r),
          }))}
          isLoading={courseEnrollmentsLoading}
          onSelect={({ id, label }) => {
            setCurrentCourseEnrollmentsValue(
              courseEnrollmentsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCourseEnrollmentsDisplayValue(label);
            runValidationTasks("courseEnrollments", label);
          }}
          onClear={() => {
            setCurrentCourseEnrollmentsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchCourseEnrollmentsRecords(value);
            if (errors.courseEnrollments?.hasError) {
              runValidationTasks("courseEnrollments", value);
            }
            setCurrentCourseEnrollmentsDisplayValue(value);
            setCurrentCourseEnrollmentsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "courseEnrollments",
              currentCourseEnrollmentsDisplayValue
            )
          }
          errorMessage={errors.courseEnrollments?.errorMessage}
          hasError={errors.courseEnrollments?.hasError}
          ref={courseEnrollmentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "courseEnrollments")}
        ></Autocomplete>
      </ArrayField>
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
          isDisabled={!(idProp || studentProfileModelProp)}
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
              !(idProp || studentProfileModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
