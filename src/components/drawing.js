import React from "react"
import InputColor from "react-input-color"
import { ReactComponent as HeadPhone } from "./headPhone.svg"
import { ReactComponent as Girl } from "./girl.svg"
import { ReactComponent as Skin } from "./skin.svg"

const Drawing = () => {
  const [colorHeadPhone, setColorHeadPhone] = React.useState({})
  const [colorGirl, setColorGirl] = React.useState({})
  const [colorSkin, setColorSkin] = React.useState({})
  const [colorEdge, setColorEdge] = React.useState({})
  const [colorCercle, setColoCercler] = React.useState({})

  return (
    <div>
      <div
        style={{
          position: "relative",
          top: 30,
          left: 30,
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: 100,
            top: 10,
            left: 10,
          }}
        >
          <HeadPhone height="200" width="200" fill={colorHeadPhone.rgba} />
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 50,
            top: 10,
            left: 10,
          }}
        >
          <Girl height="200" width="200" fill={colorGirl.rgba} />
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 40,
            top: 10,
            left: 10,
          }}
        >
          <Skin height="200" width="200" fill={colorSkin.rgba} />
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 30,
            top: 10,
            left: 10,
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
              strokeWidth="15px"
              stroke={colorEdge.rgba}
              cx="400"
              cy="400"
              r="395"
            />
          </svg>
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 20,
            top: 10,
            left: 10,
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
      <div style={{ position: "relative", left: 300, top: 30 }}>
        <div style={{ position: "relative" }}>
          <span className="colorTitle">HeadPhone</span>
          <InputColor
            initialValue="#000000"
            onChange={setColorHeadPhone}
            placement="right"
            style={{ height: 42 }}
          ></InputColor>
          <div
            style={{
              width: 70,
              height: 42,
              marginLeft: 5,
              display: "inline-block",
              backgroundColor: colorHeadPhone.rgba,
            }}
          />
          <span className="colorName">{colorHeadPhone.rgba}</span>
        </div>

        <div style={{ position: "relative", marginTop: 20 }}>
          <span className="colorTitle">Girl</span>
          <InputColor
            initialValue="#5e72e4"
            onChange={setColorGirl}
            placement="right"
            style={{ height: 42 }}
          />
          <div
            style={{
              width: 70,
              height: 42,
              marginLeft: 5,
              display: "inline-block",
              backgroundColor: colorGirl.rgba,
            }}
          />
          <span className="colorName">{colorGirl.rgba}</span>
        </div>

        <div style={{ position: "relative", marginTop: 20 }}>
          <span className="colorTitle">Skin</span>
          <InputColor
            initialValue="#fee2e2"
            onChange={setColorSkin}
            placement="right"
            style={{ height: 42 }}
          />
          <div
            style={{
              width: 70,
              height: 42,
              marginLeft: 5,
              display: "inline-block",
              backgroundColor: colorSkin.rgba,
            }}
          />
          <span className="colorName">{colorSkin.rgba}</span>
        </div>

        <div style={{ position: "relative", marginTop: 20 }}>
          <span className="colorTitle">Edge</span>
          <InputColor
            initialValue="#1b1c26"
            onChange={setColorEdge}
            placement="right"
            style={{ height: 42 }}
          />
          <div
            style={{
              width: 70,
              height: 42,
              marginLeft: 5,
              display: "inline-block",
              backgroundColor: colorEdge.rgba,
            }}
          />
          <span className="colorName">{colorEdge.rgba}</span>
        </div>

        <div style={{ position: "relative", marginTop: 20 }}>
          <span className="colorTitle">Cercle</span>
          <InputColor
            initialValue="#d8e6e4"
            onChange={setColoCercler}
            placement="right"
            style={{ height: 42 }}
          />
          <div
            style={{
              width: 70,
              height: 42,
              marginLeft: 5,
              display: "inline-block",
              backgroundColor: colorCercle.rgba,
            }}
          />
          <span className="colorName">{colorCercle.rgba}</span>
        </div>
      </div>
    </div>
  )
}

export default Drawing
