import React from "react";
import Image from "next/image";

import { Button } from "@venmo/ui/components/ui/button";

type SectionTypes = {
  className?: string;
  children?: React.ReactNode;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
};

const Section = ({ className, children }: SectionTypes) => {
  return <section className={className}>{children}</section>;
};

const SectionContent = ({ className, children }: SectionTypes) => {
  return <div className={className}>{children}</div>;
};

const Content = ({ className, children }: SectionTypes) => {
  return <div className={className}>{children}</div>;
};

const ContentImage = ({
  className,
  imageSrc,
  imageTitle,
  imageWidth,
  imageHeight,
  onImageClick,
}: {
  className: string;
  imageSrc: string;
  imageTitle: string;
  imageWidth?: number;
  imageHeight?: number;
  onImageClick?: () => void;
}) => {
  return (
    <Image
      src={imageSrc}
      width={imageWidth}
      height={imageHeight}
      alt={imageTitle}
      className={className}
      onClick={onImageClick}
    />
  );
};

const ContentMark = ({ className, children }: SectionTypes) => {
  return <div className={className}>{children}</div>;
};

const ContentTitle = ({ className, children }: SectionTypes) => {
  return <h2 className={className}>{children}</h2>;
};

const ContentParagraph = ({ className, children }: SectionTypes) => {
  return <p className={className}>{children}</p>;
};

const ContentButton = ({ className, children, variant }: SectionTypes) => {
  return (
    <div>
      <Button variant={variant} className={className}>
        {children}
      </Button>
    </div>
  );
};

export {
  Section,
  SectionContent,
  Content,
  ContentImage,
  ContentMark,
  ContentTitle,
  ContentParagraph,
  ContentButton,
};
