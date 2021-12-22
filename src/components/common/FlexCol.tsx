import React from "react";
import styled from "styled-components";

export interface FlexColProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  align?: "center" | "start" | "end" | "flex-start" | "flex-end" | "normal";
  justify?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "flex-start"
    | "flex-end";
  gap?: number;
}

const DivWrapper = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "normal"};
`;

export default function FlexCol({
  children,
  className,
  style,
  align = "center",
  justify,
  gap,
  ...props
}: FlexColProps) {
  return (
    <DivWrapper
      className={className}
      style={{
        ...style,
      }}
      align={align}
      gap={gap}
      justify={justify}
      {...props}
    >
      {React.Children.map(children, (child: any, index: number) => {
        if (!child || !child.props) return;
        if (!child.props)
          return (
            <div>{`ERROR: String not permitted!! insert DOM object like div`}</div>
          );

        return React.cloneElement(child, {
          style:
            !gap || index === 0
              ? { ...child.props.style }
              : { ...child.props.style, marginTop: gap },
        });
      })}
    </DivWrapper>
  );
}
