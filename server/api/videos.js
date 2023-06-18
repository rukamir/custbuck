// ES5 example
// ES6+ example
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

export default defineEventHandler(async () => {
  console.log(process.env)
  var client = new S3Client({
    credentials: {
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey
    },
    // defaultsMode: "",
    disableHostPrefix: true,
    disableMultiregionAccessPoints: true,
    endpoint: "https://nyc3.digitaloceanspaces.com",
    logger: "error",
    tls: true
  })
  
  const input = { // ListObjectsV2Request
    Bucket: "custbuck-a-dev", // required
    // Delimiter: "STRING_VALUE",
    // EncodingType: "url",
    // MaxKeys: Number("int"),
    // Prefix: "STRING_VALUE",
    // ContinuationToken: "STRING_VALUE",
    // FetchOwner: true || false,
    // StartAfter: "STRING_VALUE",
    // RequestPayer: "requester",
    // ExpectedBucketOwner: "STRING_VALUE",
  };
  const command = new ListObjectsV2Command(input);
  const response = await client.send(command);
    console.log(response["Contents"])
    return response["Contents"].map(vid => vid["Key"]
    )
  })
  