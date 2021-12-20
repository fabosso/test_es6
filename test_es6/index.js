import { SQSClient, AddPermissionCommand } from "@aws-sdk/client-sqs";

const handler = async (event, context) => {
  console.log("EVENT: \n" + JSON.stringify(event, null, 2));
  return context.logStreamName;
};

export { handler };
