import { FC } from "react";

import styled from "styled-components";
import Image from "next/image";
import { AERVIO_LOGO } from "@/constants";

const CompanyLogoContainer = styled.div``;

export const CompanyLogo: FC<{
  src?: string;
  alt?: string;
  height?: number;
  width?: number;
}> = ({ src = AERVIO_LOGO, alt = "Aervio logo", width = 150, height = 44 }) => (
  <CompanyLogoContainer>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ marginBlock: "6px" }}
    />
  </CompanyLogoContainer>
);
