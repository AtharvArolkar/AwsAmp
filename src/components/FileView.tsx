import { S3ProviderListConfig } from "@aws-amplify/storage";
import { useEffect, useState } from "react";

import React from "react";
import { Amplify } from "aws-amplify";
import { Storage } from "@aws-amplify/storage";
// import awsconfig from '../aws-exports';
// Amplify.configure(awsconfig);
Storage.list('photos/') // for listing ALL files without prefix, pass '' instead
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

export default function FileView() {
  return <>this is file view</>;
}
