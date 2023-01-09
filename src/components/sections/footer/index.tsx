import { FC } from "react";

import { Container, Typography } from "components";
import { ICONS } from "utils/constants";

export const Footer: FC = () => (
  <>
    <footer className="footer">
      <Container>
        <div className="footer-wrapper">
          <Typography className="footer-notice" tag="p" color="grey" variant="paragraph">
            <span>To leave a comment, mouseover</span>
            {ICONS.plus} <span>on an image and click the left mouse button</span> {ICONS.mouse}
          </Typography>
        </div>
      </Container>
    </footer>
  </>
);
