import { Footer, Header } from "@/components";
import styled from "styled-components";

const Section = styled.div`
  display: grid;
  margin-inline: 16px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 16px;
  margin-top: 80px; /* Adjust this value to leave space for the fixed header */
  margin-bottom: 60px;
  > div {
    background-color: #f2f2f2;
    padding: 20px;
  }
`;

export default function Grid() {
  return (
    <>
      <Header />
      <Section>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
        <div>Item 8</div>
        <div>Item 9</div>
        <div>Item 10</div>
        <div>Item 11</div>
        <div>Item 12</div>
      </Section>
      <Footer />
    </>
  );
}
