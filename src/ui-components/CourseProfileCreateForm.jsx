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
import { listCourseEnrollments } from "../graphql/queries";
import {
  createCourseProfile,
  updateCourseEnrollment,
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
export default function CourseProfileCreateForm(props) {
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
    title: "",
    description: "",
    courseEnrollments: [],
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
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
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setCourseEnrollments(initialValues.courseEnrollments);
    setCurrentCourseEnrollmentsValue(undefined);
    setCurrentCourseEnrollmentsDisplayValue("");
    setErrors({});
  };
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
    title: [{ type: "Required" }],
    description: [],
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
          title,
          description,
          courseEnrollments,
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
            title: modelFields.title,
            description: modelFields.description,
          };
          const courseProfile = (
            await client.graphql({
              query: createCourseProfile.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createCourseProfile;
          const promises = [];
          promises.push(
            ...courseEnrollments.reduce((promises, original) => {
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
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "CourseProfileCreateForm")}
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
              description,
              courseEnrollments,
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
              title,
              description: value,
              courseEnrollments,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              description,
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
