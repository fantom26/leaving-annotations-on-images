import { FC } from "react";

import { Container, FilePicker, Typography } from "components";
import { useStateContext } from "hooks";

export const Header: FC = () => {
  const { file } = useStateContext();
  return (
    <>
      <header className="header">
        <Container>
          <div className="header-wrapper">
            <Typography tag="h1" color="white" variant="h1">
              {!file ? "Here goes the file name" : file.name}
            </Typography>
            <FilePicker />
          </div>
        </Container>
      </header>
    </>
  );
};
