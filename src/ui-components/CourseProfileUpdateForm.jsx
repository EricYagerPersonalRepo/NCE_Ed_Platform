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
import {
  getCourseProfile,
  listStudentProfileCourseProfiles,
  listStudentProfiles,
  studentProfileCourseProfilesByCourseProfileId,
} from "../graphql/queries";
import { generateClient } from "aws-amplify/api";
import {
  createStudentProfileCourseProfile,
  deleteStudentProfileCourseProfile,
  updateCourseProfile,
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
export default function CourseProfileUpdateForm(props) {
  const {
    id: idProp,
    courseProfile: courseProfileModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    studentprofiles: [],
    title: "",
    description: "",
  };
  const [studentprofiles, setStudentprofiles] = React.useState(
    initialValues.studentprofiles
  );
  const [studentprofilesLoading, setStudentprofilesLoading] =
    React.useState(false);
  const [studentprofilesRecords, setStudentprofilesRecords] = React.useState(
    []
  );
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = courseProfileRecord
      ? {
          ...initialValues,
          ...courseProfileRecord,
          studentprofiles: linkedStudentprofiles,
        }
      : initialValues;
    setStudentprofiles(cleanValues.studentprofiles ?? []);
    setCurrentStudentprofilesValue(undefined);
    setCurrentStudentprofilesDisplayValue("");
    setTitle(cleanValues.title);
    setDescription(cleanValues.description);
    setErrors({});
  };
  const [courseProfileRecord, setCourseProfileRecord] = React.useState(
    courseProfileModelProp
  );
  const [linkedStudentprofiles, setLinkedStudentprofiles] = React.useState([]);
  const canUnlinkStudentprofiles = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCourseProfile.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCourseProfile
        : courseProfileModelProp;
      const linkedStudentprofiles = record
        ? (
            await client.graphql({
              query: studentProfileCourseProfilesByCourseProfileId.replaceAll(
                "__typename",
                ""
              ),
              variables: {
                courseProfileId: record.id,
              },
            })
          ).data.studentProfileCourseProfilesByCourseProfileId.items.map(
            (t) => t.studentProfile
          )
        : [];
      setLinkedStudentprofiles(linkedStudentprofiles);
      setCourseProfileRecord(record);
    };
    queryData();
  }, [idProp, courseProfileModelProp]);
  React.useEffect(resetStateValues, [
    courseProfileRecord,
    linkedStudentprofiles,
  ]);
  const [
    currentStudentprofilesDisplayValue,
    setCurrentStudentprofilesDisplayValue,
  ] = React.useState("");
  const [currentStudentprofilesValue, setCurrentStudentprofilesValue] =
    React.useState(undefined);
  const studentprofilesRef = React.createRef();
  const getIDValue = {
    studentprofiles: (r) => JSON.stringify({ id: r?.id }),
  };
  const studentprofilesIdSet = new Set(
    Array.isArray(studentprofiles)
      ? studentprofiles.map((r) => getIDValue.studentprofiles?.(r))
      : getIDValue.studentprofiles?.(studentprofiles)
  );
  const getDisplayValue = {
    studentprofiles: (r) =>
      `${r?.firstName ? r?.firstName + " - " : ""}${r?.id}`,
  };
  const validations = {
    studentprofiles: [],
    title: [],
    description: [],
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
  const fetchStudentprofilesRecords = async (value) => {
    setStudentprofilesLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ firstName: { contains: value } }, { id: { contains: value } }],
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
        (item) => !studentprofilesIdSet.has(getIDValue.studentprofiles?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setStudentprofilesRecords(newOptions.slice(0, autocompleteLength));
    setStudentprofilesLoading(false);
  };
  React.useEffect(() => {
    fetchStudentprofilesRecords("");
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
          studentprofiles: studentprofiles ?? null,
          title: title ?? null,
          description: description ?? null,
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
          const studentprofilesToLinkMap = new Map();
          const studentprofilesToUnLinkMap = new Map();
          const studentprofilesMap = new Map();
          const linkedStudentprofilesMap = new Map();
          studentprofiles.forEach((r) => {
            const count = studentprofilesMap.get(
              getIDValue.studentprofiles?.(r)
            );
            const newCount = count ? count + 1 : 1;
            studentprofilesMap.set(getIDValue.studentprofiles?.(r), newCount);
          });
          linkedStudentprofiles.forEach((r) => {
            const count = linkedStudentprofilesMap.get(
              getIDValue.studentprofiles?.(r)
            );
            const newCount = count ? count + 1 : 1;
            linkedStudentprofilesMap.set(
              getIDValue.studentprofiles?.(r),
              newCount
            );
          });
          linkedStudentprofilesMap.forEach((count, id) => {
            const newCount = studentprofilesMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                studentprofilesToUnLinkMap.set(id, diffCount);
              }
            } else {
              studentprofilesToUnLinkMap.set(id, count);
            }
          });
          studentprofilesMap.forEach((count, id) => {
            const originalCount = linkedStudentprofilesMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                studentprofilesToLinkMap.set(id, diffCount);
              }
            } else {
              studentprofilesToLinkMap.set(id, count);
            }
          });
          studentprofilesToUnLinkMap.forEach(async (count, id) => {
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
                      { studentProfileId: { eq: recordKeys.id } },
                      { courseProfileId: { eq: courseProfileRecord.id } },
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
          studentprofilesToLinkMap.forEach((count, id) => {
            const studentProfileToLink = studentprofilesRecords.find((r) =>
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
                      courseProfileId: courseProfileRecord.id,
                      studentProfileId: studentProfileToLink.id,
                    },
                  },
                })
              );
            }
          });
          const modelFieldsToSave = {
            title: modelFields.title ?? null,
            description: modelFields.description ?? null,
          };
          promises.push(
            client.graphql({
              query: updateCourseProfile.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: courseProfileRecord.id,
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
      {...getOverrideProps(overrides, "CourseProfileUpdateForm")}
      {...rest}
    >
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              studentprofiles: values,
              title,
              description,
            };
            const result = onChange(modelFields);
            values = result?.studentprofiles ?? values;
          }
          setStudentprofiles(values);
          setCurrentStudentprofilesValue(undefined);
          setCurrentStudentprofilesDisplayValue("");
        }}
        currentFieldValue={currentStudentprofilesValue}
        label={"Studentprofiles"}
        items={studentprofiles}
        hasError={errors?.studentprofiles?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "studentprofiles",
            currentStudentprofilesValue
          )
        }
        errorMessage={errors?.studentprofiles?.errorMessage}
        getBadgeText={getDisplayValue.studentprofiles}
        setFieldValue={(model) => {
          setCurrentStudentprofilesDisplayValue(
            model ? getDisplayValue.studentprofiles(model) : ""
          );
          setCurrentStudentprofilesValue(model);
        }}
        inputFieldRef={studentprofilesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Studentprofiles"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search StudentProfile"
          value={currentStudentprofilesDisplayValue}
          options={studentprofilesRecords.map((r) => ({
            id: getIDValue.studentprofiles?.(r),
            label: getDisplayValue.studentprofiles?.(r),
          }))}
          isLoading={studentprofilesLoading}
          onSelect={({ id, label }) => {
            setCurrentStudentprofilesValue(
              studentprofilesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentStudentprofilesDisplayValue(label);
            runValidationTasks("studentprofiles", label);
          }}
          onClear={() => {
            setCurrentStudentprofilesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchStudentprofilesRecords(value);
            if (errors.studentprofiles?.hasError) {
              runValidationTasks("studentprofiles", value);
            }
            setCurrentStudentprofilesDisplayValue(value);
            setCurrentStudentprofilesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "studentprofiles",
              currentStudentprofilesDisplayValue
            )
          }
          errorMessage={errors.studentprofiles?.errorMessage}
          hasError={errors.studentprofiles?.hasError}
          ref={studentprofilesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "studentprofiles")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              studentprofiles,
              title: value,
              description,
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
              studentprofiles,
              title,
              description: value,
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
          isDisabled={!(idProp || courseProfileModelProp)}
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
              !(idProp || courseProfileModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
