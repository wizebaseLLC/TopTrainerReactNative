import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";
import { FeatureCard } from "../../../../components";
import { AppSpacing } from "../../../../constants";
import { User } from "../../../../models";

const FeaturedTrainerList = () => (
  <FlashList
    data={tempUsers}
    renderItem={({ item }) => (
      <View
        style={{
          paddingRight: AppSpacing.createSpacing(2),
          paddingBottom: AppSpacing.createSpacing(),
        }}
      >
        <FeatureCard
          onPress={() => console.log("press")}
          uri={item.imageUrl}
          text={item.displayName}
          rating={item?.rating}
        />
      </View>
    )}
    estimatedItemSize={314}
    horizontal
    keyExtractor={(item) => item.id}
    showsHorizontalScrollIndicator={false}
  />
);

const tempUsers: User[] = [
  {
    firstName: "Roman",
    lastName: "Reigns",
    displayName: "Roman Reigns",
    id: "reigns",
    imageUrl:
      "https://www.wwe.com/f/styles/wwe_large/public/gallery/thumb/2015/03/05_Diary_03252015rf_357.jpg",
    title: "Head of the table",
    rating: 5,
  },
  {
    firstName: "Dwayne",
    lastName: "Johnson",
    displayName: "The Rock",
    id: "rock",
    imageUrl:
      "https://www.muscleandfitness.com/wp-content/uploads/2017/06/The-Rock-Dwayne-Johnson-Cable-Crossover-Promo.jpg?w=1180&quality=86&strip=all",
    title: "Black Atom",
    rating: 3.5,
  },
  {
    firstName: "Cardi",
    lastName: "B",
    displayName: "Cardi B",
    id: "cardi",
    imageUrl:
      "https://thenewspocket.com/wp-content/uploads/2022/06/cardi-b-1a-1-scaled.webp",
    title: "Artist",
    rating: 5,
  },
  {
    firstName: "Jade",
    lastName: "Cargill",
    displayName: "Jade Cargill",
    id: "jade",
    imageUrl:
      "https://www.ewrestlingnews.com/wp-content/uploads/2022/08/jade-cargill-e1660584900991.jpg",
    title: "AEW TBS Champion",
    rating: 4.2,
  },
];

export default FeaturedTrainerList;
