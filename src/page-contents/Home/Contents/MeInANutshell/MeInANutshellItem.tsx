import React from "react";
import { Nutshell } from "./values";
import styles, { GridItem } from "./styles";
import CircleBackground from "@site/src/components/CircleBackground";
import useIsDarkMode from "@site/src/hooks/useIsDarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MeInANutshellItemProps {
  nutshell: Nutshell;
}

const MeInANutshellItem: React.FC<MeInANutshellItemProps> = ({ nutshell }) => {
  const isDarkMode = useIsDarkMode();
  return (
    <GridItem className="card me-in-a-nutshell-item">
      <CircleBackground
        className="icon"
        size="6rem"
        linearGradient={styles.nutshell.gradient}
      >
        <FontAwesomeIcon
          icon={nutshell.icon}
          size="3x"
          color={isDarkMode ? undefined : "var(--ifm-card-background-color)"}
        />
      </CircleBackground>
      <div className="card__header" css={styles.header}>
        <h3 css={styles.title}>{nutshell.title}</h3>
      </div>
      <div className="card__body">
        <p css={styles.description}>{nutshell.description}</p>
      </div>
    </GridItem>
  );
};

export default MeInANutshellItem;
