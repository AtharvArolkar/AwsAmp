import { S3ProviderListConfig } from "@aws-amplify/storage";
import { useEffect, useState } from "react";

import React from "react";
import { Amplify } from "aws-amplify";
import { Storage } from "@aws-amplify/storage";
import { Grid, View, useTheme, Card, Image } from "@aws-amplify/ui-react";
// import awsconfig from '../aws-exports';
// Amplify.configure(awsconfig);
Storage.list("photos/") // for listing ALL files without prefix, pass '' instead
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

export default function FileView() {
  const { tokens } = useTheme();
  const url: string = "../images";
  const photos: string[] = ["/taj.jpg", "/railway.jpg"];
  const videos: string[] = ["/videoplayback.mp4", "/videoplayback.webm"];

  return (
    <Grid
      templateColumns="1fr 1fr"
      // templateRows="10rem 10rem"
      gap={tokens.space.small}
    >
      {photos.map((photo, index) => {
        return (
          <Card key={index} backgroundColor={tokens.colors.blue[10]}>
            <Image
              src={url + photo}
              alt="View from road to Milford Sound, New Zealand.
          Glittering stream with old log, snowy mountain peaks
          tower over a green field."
            />
          </Card>
        );
      })}
      {videos.map((video, index) => (
        <Card key={index} backgroundColor={tokens.colors.blue[10]}>
          <video src={url + video} controls />
        </Card>
      ))}
    </Grid>
  );
}
