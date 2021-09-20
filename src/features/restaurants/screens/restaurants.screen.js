import React, { useContext } from "react";

import { FlatList } from "react-native";
import { ActivityIndicator, Colors, Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { SafeArea } from "../../../utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-25px) translateY(-25px);
`;

export const RestaurantScreen = () => {
  const { restaurants, error, isLoading } = useContext(RestaurantsContext);
  console.log(error, isLoading);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <ActivityIndicator
            size={50}
            animating={isLoading}
            color={Colors.blue300}
          />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
