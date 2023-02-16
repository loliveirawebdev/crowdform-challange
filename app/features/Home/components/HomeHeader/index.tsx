import React from "react";
import { Button } from "../../../../components/Button";
import { Header } from "../../../../components/Header";
import { UserIcon } from "../../../../assets/icons/UserIcon";
import { Text, TouchableOpacity, View } from "react-native";
import { APP_THEME } from "../../../../config/ThemeProvider/theme";
import { ArrowUpIcon } from "../../../../assets/icons/ArrowUpIcon";
import { Transition, Transitioning } from "react-native-reanimated";
import { HeaderTitle, HeaderTitleContainer, styles } from "./styles";
import { ArrowDownIcon } from "../../../../assets/icons/ArrowDownIcon";
import { NotificationIcon } from "../../../../assets/icons/NotificationIcon";
import { ArrowUpRightIcon } from "../../../../assets/icons/ArrowUpRightIcon";

export const HomeHeader: React.FC = () => {
  const transitionRef = React.useRef<any>();
  const [isHeaderOpen, setIsHeaderOpen] = React.useState(false);
  const HeaderIcon = isHeaderOpen ? ArrowUpIcon : ArrowDownIcon;

  const openHeader = () => {
    transitionRef.current.animateNextTransition();
    setIsHeaderOpen(!isHeaderOpen);
  };

  const headerItems = React.useMemo(
    () => [
      <UserIcon color={APP_THEME.colors.black} />,
      <TouchableOpacity onPress={openHeader}>
        <HeaderTitleContainer>
          <HeaderTitle>Account: $1,457.23</HeaderTitle>
          <HeaderIcon color={APP_THEME.colors.black} />
        </HeaderTitleContainer>
      </TouchableOpacity>,
      <NotificationIcon color={APP_THEME.colors.black} />,
    ],
    [isHeaderOpen]
  );

  const transition = (
    <Transition.Together>
      <Transition.In type="fade" durationMs={200} />
      <Transition.Change />
      <Transition.Out type="fade" durationMs={200} />
    </Transition.Together>
  );

  const headerAppend = React.useMemo(() => {
    return (
      <Transitioning.View ref={transitionRef} transition={transition}>
        {isHeaderOpen && (
          <View style={styles.container}>
            <View style={styles.portfolioContainer}>
              <Text style={styles.portfolio}>Portfolio</Text>

              <View style={styles.totalContainer}>
                <Text style={styles.total}>$1,245.23</Text>
                <Text style={styles.percent}>
                  <ArrowUpRightIcon color={APP_THEME.colors.tertiary} />
                  31.82%
                </Text>
              </View>
            </View>

            <Button small type="secondary">
              Earn Rewards
            </Button>
          </View>
        )}
      </Transitioning.View>
    );
  }, [isHeaderOpen]);

  return <Header items={headerItems} append={headerAppend} />;
};
