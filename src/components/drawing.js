import React from "react"
import InputColor from "react-input-color"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { ReactComponent as HeadPhone } from "./headPhone.svg"
import { ReactComponent as Girl } from "./girl.svg"
import { ReactComponent as Skin } from "./skin.svg"

const Drawing = () => {
  const [colorHeadPhone, setColorHeadPhone] = React.useState({})
  const [colorGirl, setColorGirl] = React.useState({})
  const [colorSkin, setColorSkin] = React.useState({})
  const [colorEdge, setColorEdge] = React.useState({})
  const [colorCercle, setColoCercle] = React.useState({})

  return (
    <div className="boxContainer">
      <div className="box" style={{ width: 280 }}>
        <div
          className="svgImage"
          style={{
            position: "absolute",
            zIndex: 100,
          }}
        >
          <HeadPhone height="200" width="200" fill={colorHeadPhone.rgba} />
        </div>
        <div
          className="svgImage"
          style={{
            position: "absolute",
            zIndex: 50,
          }}
        >
          <Girl height="200" width="200" fill={colorGirl.rgba} />
        </div>
        <div
          className="svgImage"
          style={{
            position: "absolute",
            zIndex: 40,
          }}
        >
          <Skin height="200" width="200" fill={colorSkin.rgba} />
        </div>
        <div
          className="svgImage"
          style={{
            position: "absolute",
            zIndex: 30,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 800 800"
          >
            <circle
              id="縁"
              fill="none"
              strokeWidth="14px"
              stroke={colorEdge.rgba}
              cx="400"
              cy="400"
              r="393"
            />
          </svg>
        </div>
        <div
          className="svgImage"
          style={{
            position: "absolute",
            zIndex: 20,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 800 800"
          >
            <circle
              id="円形"
              stroke="none"
              strokeWidth="3"
              fill={colorCercle.rgba}
              cx="400"
              cy="400"
              r="400"
            />
          </svg>
        </div>
      </div>

      {/* ハンドリング */}
      <div className="box">
        <div style={{ position: "relative" }}>
          <span className="colorTitle">HeadPhone</span>
          <InputColor
            initialValue="#000000"
            onChange={setColorHeadPhone}
            placement="right"
            style={{ height: 38, padding: 0 }}
          ></InputColor>
          <div className="colorNameContainer">
            <div className="colorName">{colorHeadPhone.rgba}</div>
            <div className="colorName">{colorHeadPhone.hex}</div>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <span className="colorTitle">Girl</span>
          <InputColor
            initialValue="#696969"
            onChange={setColorGirl}
            placement="right"
            style={{ height: 38, padding: 0 }}
          />
          <div className="colorNameContainer">
            <div className="colorName">{colorGirl.rgba}</div>
            <div className="colorName">{colorGirl.hex}</div>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <span className="colorTitle">Skin</span>
          <InputColor
            initialValue="#faeded"
            onChange={setColorSkin}
            placement="right"
            style={{ height: 38, padding: 0 }}
          />
          <div className="colorNameContainer">
            <div className="colorName">{colorSkin.rgba}</div>
            <div className="colorName">{colorSkin.hex}</div>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <span className="colorTitle">Edge</span>
          <InputColor
            initialValue="#1b1c26"
            onChange={setColorEdge}
            placement="right"
            style={{ height: 38, padding: 0 }}
          />
          <div className="colorNameContainer">
            <div className="colorName">{colorEdge.rgba}</div>
            <div className="colorName">{colorEdge.hex}</div>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <span className="colorTitle">Cercle</span>
          <InputColor
            initialValue="#e6e6e6"
            onChange={setColoCercle}
            placement="right"
            style={{ height: 38, padding: 0 }}
          />
          <div className="colorNameContainer">
            <div className="colorName">{colorCercle.rgba}</div>
            <div className="colorName">{colorCercle.hex}</div>
          </div>
        </div>
        <div style={{ paddingTop: 35, paddingLeft: 40 }}>
          <CopyToClipboard
            text={
              colorHeadPhone.hex +
              "\n" +
              colorGirl.hex +
              "\n" +
              colorSkin.hex +
              "\n" +
              colorEdge.hex +
              "\n" +
              colorCercle.hex
            }
          >
            <button className="btnCopy">Copy hex</button>
          </CopyToClipboard>
          <CopyToClipboard
            text={
              colorHeadPhone.rgba +
              "\n" +
              colorGirl.rgba +
              "\n" +
              colorSkin.rgba +
              "\n" +
              colorEdge.rgba +
              "\n" +
              colorCercle.rgba
            }
          >
            <button className="btnCopy">Copy rgba</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  )
}

export default Drawing
