import { motion } from "framer-motion";
import styled from "styled-components";

const {
  article: motionArticle,
  section: motionSection,
  div: motionDiv,
} = motion;

const StyledMotionArticle = styled(motionArticle)``;
const StyledMotionScetion = styled(motionSection)`
  padding: 0 20px;
`;
const StyledMotionWrap = styled(motionDiv)``;
const StyledMotionTitle = styled(motionDiv)``;
const StyledMotionContents = styled(motionDiv)``;

export {
  StyledMotionArticle,
  StyledMotionScetion,
  StyledMotionWrap,
  StyledMotionTitle,
  StyledMotionContents,
};
