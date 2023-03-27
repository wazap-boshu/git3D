import { FC } from "react";
import { ThreeDimentionalModel } from "../model/three-dimentional-model";
import {ImageCard} from "./image-card";

interface ThreeDimentionalModelCardProps {
  threeDimentionalModel: ThreeDimentionalModel;
}

export const ThreeDimentionalModelCard: FC<ThreeDimentionalModelCardProps> = (props) => {
  const { threeDimentionalModel } = props;

  const src = threeDimentionalModel.imageSource();

  const title = threeDimentionalModel.title();

  const description = threeDimentionalModel.projectDescription();

  const buttonText = "DOWNLOAD";

  return (
    <ImageCard
      src={src}
      title={title}
      description={description}
      buttonText={buttonText}
    />
  )
}