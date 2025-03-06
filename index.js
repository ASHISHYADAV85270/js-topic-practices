// user input
input = {
  integrationType: "event",
  configuration: {
    displayName: "Configuration",
    configurationGroup: [
      {
        section: "Applications",
        referenceType: "list-of-application",
        parameters: [
          {
            name: "sourceApplication",
            displayName: "Source Application",
            description:
              "Source Application that the data has to be synced from",
            dataType: "string",
            isRequired: true,
            canOverride: true,
            parentendpoint: "okta",
            variableName: "oktaVar",
            minVersion: "10",
            uiElement:
              "select - dropdown with list of all the endpoints installed in the tenant belonging to the parent app and that have version greater than the min version mentioned.",
          },
          {
            name: "targetApplication",
            displayName: "Target Application",
            description:
              "Target Application that the data has to be synced from",
            dataType: "string",
            isRequired: true,
            canOverride: true,
            variableName: "targetVar",
            parentendpoint: "parent endpoint name as in sa.aquera.io",
            minVersion:
              "minimum version of the app that the integration supports",
            uiElement:
              "select - dropdown with list of all the endpoints installed in the tenant belonging to the parent app and that have version greater than the min version mentioned.",
          },
        ],
      },
      {
        section: "Advanced Preferences",
        parameters: [
          {
            displayName: "property1",
            dataType: "string",
            defaultValue: "some value",
            isRequired: true,
            variableName: "",
            canOverride: true,
            uiElement: "textArea",
          },
          {
            displayName: "property2",
            dataType: "number",
            defaultValue: 100,
            variableName: "",
            isRequired: false,
            canOverride: false,
            uiElement: "select",
          },
          {
            displayName: "property3",
            dataType: "boolean",
            defaultValue: true,
            isRequired: false,
            variableName: "",
            canOverride: true,
            uiElement: "option",
          },
        ],
      },
      {
        section: "Notifications",
        parameters: [
          {
            displayName: "property4",
            dataType: "string",
            defaultValue: "some string",
            variableName: "",
            isRequired: true,
            canOverride: false,
            uiElement: "multiselect",
          },
        ],
      },
    ],
  },
  attributeMapping: {
    referenceType: "map",
    canAddRow: "boolean",
    displayName: "Attribute Map",
    parameters: [
      {
        attribute: "string",
        expression: "string - [Optional]",
        mapWhen: ["both", "create", "update", "doNotMap"],
        attributeDataType: "string",
        canOverride: "boolean",
        required: "boolean",
        canDelete: "boolean",
      },
      {
        attribute: "string",
        expression: "string - [Optional]",
        mapWhen: ["both", "create", "update", "doNotMap"],
        attributeDataType: "string",
        canOverride: "boolean",
        required: "boolean",
        canDelete: "boolean",
      },
    ],
  },
  tables: {
    displayName: "Tables",
    referenceType: "table",
    tableGroup: [
      {
        displayName: "Table Name",
        description: "table desc",
        parameters: [
          {
            name: "string",
            value: "string - [optional]",
          },
          {
            name: "string",
            value: "string - [optional]",
          },
        ],
      },
      {
        displayName: "Table Name",
        description: "table desc",
        parameters: [
          {
            name: "string",
            value: "string - [optional]",
          },
          {
            name: "string",
            value: "string - [optional]",
          },
        ],
      },
    ],
  },
  groups: {
    displayName: "Group Rules",
    referenceType: "group",
    parameters: [
      {
        name: "string",
        rule: {
          expression: "string",
          assignTo: "Arrray of string",
        },
      },
    ],
  },
  documentation: {
    documentationGroup: [
      {
        type: "guide",
        url: "",
      },
      {
        type: "video",
        url: "",
      },
    ],
  },
};

// currently following schema
expectedOuput = {
  version: 'W/"53c-ewldjxp1RVraIJ7SpAXwfu1lbvE"',
  orchestrationid: "7120a716-d09b-bbd9-d903-34aa000312c8",
  templateType: "script",
  updatedOn: "2024-12-27T06:15:19.597Z",
  status: "idle",
  tenantId: "us-west-2:81d2464b-76fb-4ed9-be09-dbc397e5c133",
  visibility: "public",
  updatedBy: "ashish.chopra@aquera.com",
  createdBy: "ashish.chopra@aquera.com",
  name: "test generic",
  visibilityTenantId: [],
  imageURL: null,
  schedule: -1,
  selectedTemplate: "ed5670bd-114a-ad71-fea6-d361e6e56cbb",
  guid: "ed5670bd-114a-ad71-fea6-d361e6e56cbb",
  createdOn: "2024-12-27T06:15:19.597Z",
  parameters: [
    {
      help: "Add all the applications used in script.",
      dataTypeRef: "list-of-application",
      displayname: "Applications",
      name: "applications",
      type: "list-of-application",
      value: [
        {
          name: "kronos_readysuitv8_seniority",
          variable: "ukg",
          guid: "3506b96f-361b-3048-68c2-be23a7844fcd",
          id: "19612",
          application: "UKG demo",
          displayName: "HR Application",
        },
        {
          name: "oktav9",
          variable: "okta",
          guid: "fb24277e-ef1d-0428-0599-a1d6a5eeec51",
          id: "89779",
          application: "Okta V9 - [rahul]",
          displayName: "Directory",
        },
      ],
      group: "Connections",
    },
    {
      help: "Custom Script",
      isNoCodeTemplate: true,
      displayname: "Script",
      name: "script",
      type: "code",
      value: "",
      group: "Script",
    },
    {
      name: "tables",
      type: "table",
      displayname: "Tables",
      value: [
        {
          id: "6947c6b1-bbf5-4e20-8d45-f7fb5fbd99fa",
          name: "dummytable",
          description: "I ma table Desctiption",
          parameters: [
            {
              id: "83ba85d3-cc9d-4dc9-aac8-9814a31244c9",
              name: "r1",
              value: "c1",
              controlId: "yznjjt",
            },
            {
              id: "fa2f0959-6ed2-4dd6-a1a7-4934afe7e2f6",
              name: "r2",
              value: "c2",
              controlId: "oj2n6o",
            },
          ],
        },
      ],
    },
  ],
  engineId: "orch-v5",
  definition: {
    variables: [
      {
        isAdvancedExpression: true,
        displayName: "Filter Condition for users",
        name: "filterCondition",
        options: [],
        description: "official email here",
        type: "string",
        initialValue: "",
      },
      {
        isAdvancedExpression: true,
        displayName: "FullSync Max Time Limit",
        name: "maxTimeLimit",
        options: [],
        description: "Maximum time the script can eecute",
        type: "number",
        initialValue: "10",
      },
      {
        isAdvancedExpression: true,
        displayName: "Has Complete Access",
        name: "hasCompleteAccess",
        options: [],
        description: "Has Complete Access Description",
        type: "boolean",
        initialValue: "false",
      },
      {
        name: "selectedEmails",
        options: [],
        description: "Selected Emails to send emails",
        type: "multistring",
        initialValue: "",
        displayName: "Selected Emails",
      },
      {
        name: "countryName",
        options: ["India", "US"],
        description: "Select country to filter users",
        type: "singleselect",
        initialValue: "",
        displayName: "Country",
      },
      {
        name: "departments",
        options: ["IT", "Sales", "HR"],
        description: "List user departments to be filtered",
        type: "multiselect",
        initialValue: "",
        displayName: "Departments",
      },
    ],
  },
  description: "",
  type: "scheduled",
};

const schemaPreferenceMapper = {
  variableName: "name",
  dataType: "type",
  defaultValue: "initialValue",
  isRequired: "isRequired",
  canOverride: "canOverride",
  uiElement: "uiElement",
  displayName: "displayName",
};

const applicationSchemaPreferenceMapper = {
  parentendpoint: "name",
  variableName: "variable",
  name: "application",
  displayName: "displayName",
};

const tableSchemaPreferenceMapper = {
  displayName: "name",
  description: "description",
};

// Assuming inputData is an array of objects
function preferencesTransformData(inputData) {
  const transformedData = [];
  inputData.forEach((currInput) => {
    const transformedObj = {};
    Object.keys(currInput).forEach((key) => {
      const schemaKey = schemaPreferenceMapper[key];
      if (schemaKey) {
        transformedObj[schemaKey] = currInput[key];
      } else {
        transformedObj[key] = currInput[key];
      }
    });
    transformedData.push(transformedObj);
  });
  return transformedData;
}

// Assuming inputData is an array of objects
function applicationTransformData(inputData) {
  const transformedData = [];
  inputData.forEach((currInput) => {
    const transformedObj = {};
    Object.keys(currInput).forEach((key) => {
      const schemaKey = applicationSchemaPreferenceMapper[key];
      if (schemaKey) {
        transformedObj[schemaKey] = currInput[key];
      } else {
        transformedObj[key] = currInput[key];
      }
    });
    transformedData.push(transformedObj);
  });
  return transformedData;
}

function tableTransformData(inputData) {
  const transformedData = [];
  inputData.forEach((currInput) => {
    const transformedObj = {};
    transformedObj["name"] = currInput["displayName"];
    transformedObj["description"] = currInput["description"];
    transformedObj["parameters"] = currInput["parameters"];
    transformedData.push(transformedObj);
  });
  return transformedData;
}

function transformData(inputData) {
  const transformedData = {};
  transformedData["parameters"] = [];

  const jsonInputData = JSON.parse(JSON.stringify(inputData));
  const parentKey = Object.keys(jsonInputData);
  parentKey.forEach((key) => {
    if (key === "integrationType") {
      if (inputData[key] === "scheduled") {
        transformedData["schedule"] = -1;
      }
      if (inputData[key] === "event") {
        transformedData["event"] = {};
      }
    }
    if (key === "configuration") {
      const configurationGroup = jsonInputData[key]["configurationGroup"];
      let definition = [];
      let applications = [];
      configurationGroup.forEach((group) => {
        if (group.section === "Advanced Preferences") {
          const prevSchemaDefinition = group["parameters"];
          definition = preferencesTransformData(prevSchemaDefinition);
        }
        if (group.section === "Applications") {
          const prevApplications = group["parameters"];
          applications = applicationTransformData(prevApplications);
        }
      });

      transformedData["definition"] = { variables: definition };
      transformedData["parameters"].push({
        name: "applications",
        type: "list-of-application",
        displayname: "Applications",
        value: applications,
      });
    }
    if (key === "tables") {
      const prevTables = jsonInputData[key]["tableGroup"];
      const transformedTables = tableTransformData(prevTables);
      transformedData["parameters"].push({
        name: "tables",
        type: "table",
        displayname: "Tables",
        value: transformedTables,
      });
    }
  });
  return transformedData;
}

console.log(transformData(input));
