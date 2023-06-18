// ES5 example
// ES6+ example
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
var client = new S3Client({
  credentials: {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey
  },
  // defaultsMode: "",
  disableHostPrefix: true,
  disableMultiregionAccessPoints: true,
  endpoint: "https://custbuck-a-dev.nyc3.digitaloceanspaces.com",
  logger: "error",
  tls: true
})

export default defineEventHandler(async () => {
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
    print(response)
    return {
      title: 'Mount Everest',
      description: "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point",
      height: '8,848 m',
      countries: [
        'China',
        'Nepal'
      ],
      continent: 'Asia',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/600px-Everest_kalapatthar.jpg',
      dir: '/mountains',
      path: '/mountains/mount-everest',
      slug: 'mount-everest',
      updatedAt: '2020-12-11T15:40:35.000Z'
    }
  })
  