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
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import {
  getStudentProfile,
  listCourseProfiles,
  listStudentProfileCourseProfiles,
  studentProfileCourseProfilesByStudentProfileId,
} from "../graphql/queries";
import { generateClient } from "aws-amplify/api";
import {
  createStudentProfileCourseProfile,
  deleteStudentProfileCourseProfile,
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
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    CourseProfiles: [],
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [email, setEmail] = React.useState(initialValues.email);
  const [address, setAddress] = React.useState(initialValues.address);
  const [CourseProfiles, setCourseProfiles] = React.useState(
    initialValues.CourseProfiles
  );
  const [CourseProfilesLoading, setCourseProfilesLoading] =
    React.useState(false);
  const [courseProfilesRecords, setCourseProfilesRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = studentProfileRecord
      ? {
          ...initialValues,
          ...studentProfileRecord,
          CourseProfiles: linkedCourseProfiles,
        }
      : initialValues;
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setEmail(cleanValues.email);
    setAddress(
      typeof cleanValues.address === "string" || cleanValues.address === null
        ? cleanValues.address
        : JSON.stringify(cleanValues.address)
    );
    setCourseProfiles(cleanValues.CourseProfiles ?? []);
    setCurrentCourseProfilesValue(undefined);
    setCurrentCourseProfilesDisplayValue("");
    setErrors({});
  };
  const [studentProfileRecord, setStudentProfileRecord] = React.useState(
    studentProfileModelProp
  );
  const [linkedCourseProfiles, setLinkedCourseProfiles] = React.useState([]);
  const canUnlinkCourseProfiles = false;
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
      const linkedCourseProfiles = record
        ? (
            await client.graphql({
              query: studentProfileCourseProfilesByStudentProfileId.replaceAll(
                "__typename",
                ""
              ),
              variables: {
                studentProfileId: record.id,
              },
            })
          ).data.studentProfileCourseProfilesByStudentProfileId.items.map(
            (t) => t.courseProfile
          )
        : [];
      setLinkedCourseProfiles(linkedCourseProfiles);
      setStudentProfileRecord(record);
    };
    queryData();
  }, [idProp, studentProfileModelProp]);
  React.useEffect(resetStateValues, [
    studentProfileRecord,
    linkedCourseProfiles,
  ]);
  const [
    currentCourseProfilesDisplayValue,
    setCurrentCourseProfilesDisplayValue,
  ] = React.useState("");
  const [currentCourseProfilesValue, setCurrentCourseProfilesValue] =
    React.useState(undefined);
  const CourseProfilesRef = React.createRef();
  const getIDValue = {
    CourseProfiles: (r) => JSON.stringify({ id: r?.id }),
  };
  const CourseProfilesIdSet = new Set(
    Array.isArray(CourseProfiles)
      ? CourseProfiles.map((r) => getIDValue.CourseProfiles?.(r))
      : getIDValue.CourseProfiles?.(CourseProfiles)
  );
  const getDisplayValue = {
    CourseProfiles: (r) => `${r?.title ? r?.title + " - " : ""}${r?.id}`,
  };
  const validations = {
    firstName: [{ type: "Required" }],
    lastName: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    address: [{ type: "Required" }, { type: "JSON" }],
    CourseProfiles: [],
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
  const fetchCourseProfilesRecords = async (value) => {
    setCourseProfilesLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ title: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listCourseProfiles.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listCourseProfiles?.items;
      var loaded = result.filter(
        (item) => !CourseProfilesIdSet.has(getIDValue.CourseProfiles?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCourseProfilesRecords(newOptions.slice(0, autocompleteLength));
    setCourseProfilesLoading(false);
  };
  React.useEffect(() => {
    fetchCourseProfilesRecords("");
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
          firstName,
          lastName,
          email,
          address,
          CourseProfiles: CourseProfiles ?? null,
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
          const courseProfilesToLinkMap = new Map();
          const courseProfilesToUnLinkMap = new Map();
          const courseProfilesMap = new Map();
          const linkedCourseProfilesMap = new Map();
          CourseProfiles.forEach((r) => {
            const count = courseProfilesMap.get(getIDValue.CourseProfiles?.(r));
            const newCount = count ? count + 1 : 1;
            courseProfilesMap.set(getIDValue.CourseProfiles?.(r), newCount);
          });
          linkedCourseProfiles.forEach((r) => {
            const count = linkedCourseProfilesMap.get(
              getIDValue.CourseProfiles?.(r)
            );
            const newCount = count ? count + 1 : 1;
            linkedCourseProfilesMap.set(
              getIDValue.CourseProfiles?.(r),
              newCount
            );
          });
          linkedCourseProfilesMap.forEach((count, id) => {
            const newCount = courseProfilesMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                courseProfilesToUnLinkMap.set(id, diffCount);
              }
            } else {
              courseProfilesToUnLinkMap.set(id, count);
            }
          });
          courseProfilesMap.forEach((count, id) => {
            const originalCount = linkedCourseProfilesMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                courseProfilesToLinkMap.set(id, diffCount);
              }
            } else {
              courseProfilesToLinkMap.set(id, count);
            }
          });
          courseProfilesToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const studentProfileCourseProfileRecords = (
              await client.graphql({
                query: listStudentProfileCourseProfiles.replaceAll(
                  "__typename",
                  ""
                ),
                variables: {
                  filter: {
                    and: [
                      { courseProfileId: { eq: recordKeys.id } },
                      { studentProfileId: { eq: studentProfileRecord.id } },
                    ],
                  },
                },
              })
            )?.data?.listStudentProfileCourseProfiles?.items;
            for (let i = 0; i < count; i++) {
              promises.push(
                client.graphql({
                  query: deleteStudentProfileCourseProfile.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      id: studentProfileCourseProfileRecords[i].id,
                    },
                  },
                })
              );
            }
          });
          courseProfilesToLinkMap.forEach((count, id) => {
            const courseProfileToLink = courseProfilesRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                client.graphql({
                  query: createStudentProfileCourseProfile.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      studentProfileId: studentProfileRecord.id,
                      courseProfileId: courseProfileToLink.id,
                    },
                  },
                })
              );
            }
          });
          const modelFieldsToSave = {
            firstName: modelFields.firstName,
            lastName: modelFields.lastName,
            email: modelFields.email,
            address: modelFields.address
              ? JSON.parse(modelFields.address)
              : modelFields.address,
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
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              email,
              address,
              CourseProfiles,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              email,
              address,
              CourseProfiles,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
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
              firstName,
              lastName,
              email: value,
              address,
              CourseProfiles,
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
      <TextAreaField
        label="Address"
        isRequired={true}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              address: value,
              CourseProfiles,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextAreaField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              address,
              CourseProfiles: values,
            };
            const result = onChange(modelFields);
            values = result?.CourseProfiles ?? values;
          }
          setCourseProfiles(values);
          setCurrentCourseProfilesValue(undefined);
          setCurrentCourseProfilesDisplayValue("");
        }}
        currentFieldValue={currentCourseProfilesValue}
        label={"Course profiles"}
        items={CourseProfiles}
        hasError={errors?.CourseProfiles?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("CourseProfiles", currentCourseProfilesValue)
        }
        errorMessage={errors?.CourseProfiles?.errorMessage}
        getBadgeText={getDisplayValue.CourseProfiles}
        setFieldValue={(model) => {
          setCurrentCourseProfilesDisplayValue(
            model ? getDisplayValue.CourseProfiles(model) : ""
          );
          setCurrentCourseProfilesValue(model);
        }}
        inputFieldRef={CourseProfilesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Course profiles"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search CourseProfile"
          value={currentCourseProfilesDisplayValue}
          options={courseProfilesRecords.map((r) => ({
            id: getIDValue.CourseProfiles?.(r),
            label: getDisplayValue.CourseProfiles?.(r),
          }))}
          isLoading={CourseProfilesLoading}
          onSelect={({ id, label }) => {
            setCurrentCourseProfilesValue(
              courseProfilesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCourseProfilesDisplayValue(label);
            runValidationTasks("CourseProfiles", label);
          }}
          onClear={() => {
            setCurrentCourseProfilesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchCourseProfilesRecords(value);
            if (errors.CourseProfiles?.hasError) {
              runValidationTasks("CourseProfiles", value);
            }
            setCurrentCourseProfilesDisplayValue(value);
            setCurrentCourseProfilesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "CourseProfiles",
              currentCourseProfilesDisplayValue
            )
          }
          errorMessage={errors.CourseProfiles?.errorMessage}
          hasError={errors.CourseProfiles?.hasError}
          ref={CourseProfilesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "CourseProfiles")}
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
