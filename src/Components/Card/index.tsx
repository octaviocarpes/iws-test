import React, { memo, ReactElement, useState, ReactNode } from 'react';
import { useStyles } from './styles';

interface Props {
  children: ReactNode;
  onTouch?: () => void;
}

const Card = memo(
  (props: Props): ReactElement => {
    const { children, onTouch } = props;
    const styles = useStyles();
    const [cardStyle, setCardStyle] = useState(styles.card);

    const _handleTouchStart = (): void => {
      setCardStyle(styles.clicked);
    };

    const _handleTouchEnd = (): void => {
      setCardStyle(styles.card);
      if (onTouch) onTouch();
    };

    return (
      <>
        <div
          className={cardStyle}
          onTouchStart={(): void => _handleTouchStart()}
          onTouchEnd={(): void => _handleTouchEnd()}
        >
          {children}
        </div>
      </>
    );
  },
);

Card.displayName = 'Card';
export default Card;
