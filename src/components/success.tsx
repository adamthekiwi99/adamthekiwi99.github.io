/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Footer from "../components/footer"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import './section.css';
import Info from "../sections/success"

const Success = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="king" hiddenMobile width={64} stroke color="icon_orange" left="60%" top="20%" />
        <SVG icon="triangle" width={48} stroke color="icon_blue" left="60%" top="70%" />
        <SVG icon="box" width={6} color="icon_darker" left="60%" top="15%" />
        <SVG icon="box" hiddenMobile width={64} color="icon_purple" left="15%" top="65%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
        <SVG icon="king" width={24} stroke color="icon_brightest" left="90%" top="50%" />
        <SVG icon="queen" width={16} stroke color="icon_darker" left="70%" top="90%" />
        <SVG icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <SVG icon="cross" width={16} stroke color="icon_pink" left="20%" top="10%" />
        <SVG icon="queen" width={12} stroke color="icon_darkest" left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="queen" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
      <SVG icon="queen" width={6} stroke color="icon_darkest" left="4%" top="20%" />
      <SVG icon="queen" width={12} stroke color="icon_darkest" left="50%" top="60%" />
      <SVG icon="upDown" width={12} stroke color="icon_darkest" left="60%" top="50%" />
      <SVG icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
      <SVG icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
      <SVG icon="king" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <SVG icon="circle" width={64} color="icon_green" left="32%" top="4%" />
      <SVG icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
      <SVG icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
      <SVG icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Info />
      </Inner>
      <Footer />
    </Content>
  </div>
)

export default Success
