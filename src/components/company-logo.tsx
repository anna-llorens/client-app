import { FC } from "react";

import { AERVIO_LOGO } from "@/constants";
import Image from "next/image";
import styled from "styled-components";

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
      style={{ marginTop: "6px" }}
    />
  </CompanyLogoContainer>
);
