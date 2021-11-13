import * as React from "react";
import styled from "styled-components/native";
import { FAB } from "react-native-paper";

const Button = styled(FAB)`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const BackButton = ({ onPress }) => (
  <Button small icon="arrow-left" onPress={onPress} />
);
