import React, { ReactChild } from "react";
import { ReactNode } from "types";
import {
  StyledMotionArticle,
  StyledMotionScetion,
  StyledMotionWrap,
  StyledMotionTitle,
  StyledMotionContents,
} from "./styled";

interface MotionDefaultProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  variants?: any;
  className?: string;
}

interface MotionExtraProps extends MotionDefaultProps {
  initial?: string;
  animate?: string;
  exit?: string;
  transition?: any;
}

interface MotinoProps {
  Article: Function;
  Section: Function;
  Wrap: Function;
  Title: Function;
  Contents: Function;
}

const Article = ({
  variants,
  children,
  className = null,
  initial = "hidden",
  animate = "enter",
  exit = "exit",
  transition,
}: MotionExtraProps) => {
  const defaultVariants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
  };

  const defaultTransition = {
    duration: 0.4,
    type: "easeInOut",
  };

  return (
    <StyledMotionArticle
      initial={initial}
      animate={animate}
      exit={exit}
      variants={variants ?? defaultVariants}
      className={className}
      transition={transition ?? defaultTransition}
      style={{ position: "relative" }}
    >
      {children}
    </StyledMotionArticle>
  );
};

const Section = ({ children, className = null, exit }: MotionExtraProps) => {
  return (
    <StyledMotionScetion exit={exit ?? { opacity: 0 }} className={className}>
      {children}
    </StyledMotionScetion>
  );
};

const Wrap = ({
  variants,
  children,
  className = null,
  animate = "animate",
  initial = "initial",
}: MotionExtraProps) => {
  const defaultVariants = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <StyledMotionWrap
      variants={variants ?? defaultVariants}
      animate={animate}
      initial={initial}
      className={className}
    >
      {children}
    </StyledMotionWrap>
  );
};

const Title = ({
  variants,
  children,
  className = null,
}: MotionDefaultProps) => {
  const defaultVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };
  return (
    <StyledMotionTitle
      variants={variants ?? defaultVariants}
      className={className}
    >
      {children}
    </StyledMotionTitle>
  );
};

const Contents = ({
  variants,
  children,
  className = null,
}: MotionDefaultProps) => {
  const defaultVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };
  return (
    <StyledMotionContents
      variants={variants ?? defaultVariants}
      className={className}
    >
      {children}
    </StyledMotionContents>
  );
};

const Motion: MotinoProps = {
  Article,
  Section,
  Wrap,
  Title,
  Contents,
};

export { Article, Section, Wrap, Title, Contents };
