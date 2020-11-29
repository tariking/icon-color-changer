import React from "react"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <a href="https://hihayk.github.io/scale">
          <h1>Color Changer</h1>
        </a>
        &nbsp; · &nbsp;made by{" "}
        <a href="https://gg-box.com" target="_blank" rel="noopener noreferrer">
          gg-box
        </a>
        &nbsp; · &nbsp;
        <a
          href="https://github.com/tariking/icon-color-changer"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {/* &nbsp; · &nbsp;<a href="/gallery">Gallery</a> */}
      </div>
      <div className="footer">
        注意：このアイコンは既に複数サービスで使用中です。
        <br />
        作成した画像は個人利用含め使用しないでください。
      </div>
    </>
  )
}

export default Footer
