import { FC } from "react";
import { ThreeDimentionalEntity } from "../entities/three-dimentional-model";
import {ImageCard} from "./image-card";

interface ThreeDimentionalEntityCardProps {
  threeDimentionalEntity: ThreeDimentionalEntity;
}

export const ThreeDimentionalEntityCard: FC<ThreeDimentionalEntityCardProps> = (props) => {
  const { threeDimentionalEntity } = props;

  const src = threeDimentionalEntity.imageSource();

  const title = threeDimentionalEntity.title();

  const description = threeDimentionalEntity.projectDescription();

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