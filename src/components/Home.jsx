import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import './c.css'
function Home() {
  const {t} = useTranslation()
  const iframeRef = useRef(null);


  return (
    <div className='iframe-container-home'>
      <iframe
        src="/templates/index.html"
        title="External Content"
        style={{ width: "100%", height: "100vh", border: "none" }}
        ref={iframeRef}
      />
        <div class="text-overlay-home">
      <p className="text-overlay-home-p">{t("agrihelp.sub")}</p>
    </div>
    </div>
  );
}

export default Home;
